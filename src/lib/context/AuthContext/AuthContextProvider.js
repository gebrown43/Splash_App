import React, {useEffect, useState} from 'react';
import {createContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribeFromAuth = auth().onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setLoading(false);

      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  const createUserProfileDocument = async (userAuth, additionalData = null) => {
    if (!userAuth) {
      return;
    }

    const userRef = firestore().doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email, photoURL} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          photoURL,
          ...additionalData,
        });
      } catch (error) {
        alert(error.message);
      }
    }

    return userRef;
  };

  const signIn = async (email, password) => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      setCurrentUser(user);
    } catch (e) {
      alert(e.message);
    }
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        alert("You've been successfully signed out");
      })
      .catch(e => alert(e.message));
  };

  const registerAccount = async (displayName, email, password) => {
    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserProfileDocument(user, {displayName});

      setCurrentUser(user);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentUserLoading: loading,
        registerAccount,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
