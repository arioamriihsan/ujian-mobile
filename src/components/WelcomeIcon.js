import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const WelcomeIcon = () => {
  return ( 
    <View style={styles.logo}>
      <Icon name="android" size={100} color="#3DDC84" />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
});

export default WelcomeIcon;
