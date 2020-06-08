import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { WelcomeIcon } from '../components';
import { LoginAction } from '../redux/actions/authAction';
import Center from '../support/helper/Center';

const Login = () => {

  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  let { buttonColor } = styles;

  return ( 
    <Center>
      <WelcomeIcon />
      <Input 
        placeholder="Username"
        onChangeText={e => setUsername(e)}
        value={username}
      />
      <View>
        <Button 
          title="Login"
          buttonStyle={buttonColor}
          onPress={() => dispatch(LoginAction(username))}
        />
      </View>
    </Center>
  );
};

const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: "#3DDC84",
  },
});

export default Login;
