import React, { useState } from 'react';
// import { Text, StyleSheet } from 'react-native';
// import { Icon } from 'react-native-elements';
// import { Thumbnail } from 'native-base';
// import { useDispatch, useSelector } from 'react-redux';
// import Center from '../support/helper/Center';
// import { LogoutAction } from '../redux/actions/authAction';
// import { detailReducer } from '../redux/reducers/detailReducer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens';
import Center from '../support/helper/Center';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../redux/actions/authAction';

const Drawer = createDrawerNavigator();

const LogoutScreen = () => {

  const dispatch = useDispatch();

  return (
    <Center>
      <Button title="Logout" onPress={() => dispatch(LogoutAction())} />
    </Center>
  );
};

const Logout = (props) => {

  // const [dp, setDp] = useState(null);

  return ( 
    <Drawer.Navigator
      drawerType="slide"
      initialRouteName="ProfileScreen"
      drawerPosition="right"
    >
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{title: 'Profile'}}/>
      <Drawer.Screen name="LogoutScreen" component={LogoutScreen} options={{title: 'Logout'}}/>
    </Drawer.Navigator>
  );
};

// const styles = StyleSheet.create({
//   imageStyle: {
//     borderRadius: 20,
//   },
// });

export default Logout;
