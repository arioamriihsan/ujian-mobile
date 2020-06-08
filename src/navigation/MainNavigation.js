import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../screens';
import { useDispatch, useSelector } from 'react-redux';
import { KeepLogin } from '../redux/actions/authAction';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import TabNav from './TabNav';

const MainNavigation = () => {

  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);

  useEffect(() => {
    dispatch(KeepLogin());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {username ? <TabNav /> : <Login />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3DDC84",
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
