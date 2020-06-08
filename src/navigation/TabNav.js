import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { Logout } from '../screens'; 
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();

const TabNav = ({navigation}) => {
  return ( 
    <Tab.Navigator
      initialRouteName="HomeNav"
      tabBarOptions={{
        activeTintColor: "#3DDC84",
        inactiveTintColor: "gray",
        showLabel: false
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "HomeNav") {
            iconName = "home";
          } else if (route.name === "Logout") {
            iconName = "account-box"
          }
          return <Icon name={iconName} size={35} color={color} />
        }
      })}
    >
      <Tab.Screen name="HomeNav" component={StackNav} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
};

export default TabNav;
