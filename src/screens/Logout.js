import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import Center from '../support/helper/Center';
import { LogoutAction } from '../redux/actions/authAction';

const Logout = (props) => {

  const dispatch = useDispatch();

  return ( 
    <Center>
      <Button title="LOGOUT" onPress={() => dispatch(LogoutAction())} />
    </Center>
  );
};

export default Logout;
