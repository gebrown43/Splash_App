import React from 'react';
import {Platform, Share, TouchableOpacity, StyleSheet} from 'react-native';

import ShareIcon from '../assets/Share';

const ShareButton = ({data}) => {
  const {user, links, photo: photoInfo} = data;
  const photoTitle = photoInfo?.description
    ? photoInfo?.description
    : photoInfo?.alt_description;
  const shareTitle = `${photoTitle} by: ${user?.name}`;
  const shareUrl = links?.html;

  const shareMessage = () => {
    if (Platform.OS === 'android') {
      return `Splash App  ${shareUrl}`;
    }

    return shareTitle;
  };

  const onShareMessage = () => {
    return Share.share(
      {
        title: shareTitle,
        message: shareMessage,
        url: shareUrl,
      },
      {
        subject: shareTitle,
      },
    );
  };

  return (
    <TouchableOpacity style={styles.shareButton} onPress={onShareMessage}>
      <ShareIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shareButton: {
    marginRight: 20,
  },
});
export default ShareButton;
