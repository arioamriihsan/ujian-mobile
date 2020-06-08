import React from 'react';
import Center from '../support/helper/Center';
import { Text, StyleSheet } from 'react-native';
import { Thumbnail } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';

const ProfileScreen = () => {

  const username = useSelector(state => state.auth.username);
  const displayPicture = useSelector(state => state.detail.url);
  
  let { imageStyle } = styles;
  return ( 
    <Center>
      <Thumbnail 
        source={displayPicture ? 
          {uri: displayPicture} :  require('../assets/defaultpicture.jpg')}
        style={imageStyle}
      />
      <Text>{username}</Text>
      {/* <Button title="LOGOUT" onPress={() => dispatch(LogoutAction())} /> */}
    </Center>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
  },
});

export default ProfileScreen;
