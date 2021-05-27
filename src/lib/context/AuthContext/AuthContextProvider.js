import React, {useEffect, useState} from 'react';
import {firebase} from '../../../firebase/config';
import {createContext} from 'react';

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribeFromAuth = firebase
      .auth()
      .onAuthStateChanged(async userAuth => {
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

    const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
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
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  const signIn = async (email, password) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setCurrentUser(user);
    } catch (e) {
      alert(e);
    }
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("You've been successfully signed out");
      })
      .catch(e => alert(e));
  };

  const registerAccount = async (displayName, email, password) => {
    try {
      const {user} = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

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
