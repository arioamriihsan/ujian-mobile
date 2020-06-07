import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../screens';
import Center from '../support/helper/Center';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { KeepLogin } from '../redux/actions/authAction';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import TabNav from './TabNav';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>TomatoApp</Text>
        <Icon type="material-community" name="food" size={100} color="#fff" />
      </View>
    </View>
  );
};

const MainNavigation = () => {

  const [splash, setSplash] = useState(false);

  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);

  const openSplash = () => {
    setTimeout(() => {
      setSplash(true);
    }, 2000);
    closeSplash();
  };

  // callback to close splashScreen
  const closeSplash = () => setSplash(false);

  useEffect(() => {
    // mounting splashScreen for 2s
    openSplash(closeSplash);

    // start when splashScreen close after 2s
    AsyncStorage.getItem("username")
    .then(res => {
      console.log(res);
      dispatch(KeepLogin(res))
    })
    .catch(err => {
      console.log(err);
    })
  }, [dispatch]);

  return (
    <NavigationContainer>
      { !splash 
        ? <SplashScreen /> 
        : username ? <TabNav /> : <Login />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    color: "#fff",
  },
});

export default MainNavigation;