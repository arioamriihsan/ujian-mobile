import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const WelcomeIcon = () => {
  return ( 
    <View style={styles.logo}>
      <Text style={styles.logoText}>TomatoApp</Text>
      <Icon type="material-community" name="food" size={100} color="tomato" />
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
  logoText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "tomato",
  },
});

export default WelcomeIcon;
