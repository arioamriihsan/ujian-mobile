import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { WelcomeIcon } from '../components';
import { LoginAction } from '../redux/actions/authAction';

const Login = () => {

  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  return ( 
    <View style={styles.container}>
      <WelcomeIcon />
      <Input 
        placeholder="Username"
        leftIcon={
          <Icon name="account-outline" type="material-community" size={30} color="tomato" />
        }
        onChangeText={e => setUsername(e)}
        value={username}
      />
      <View>
        <Button 
          title="Enter"
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonColor}
          onPress={() => dispatch(LoginAction(username))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  buttonStyle: {
    width: "90%",
    marginHorizontal: 20,
    marginVertical: 30,
  },
  buttonColor: {
    backgroundColor: "tomato",
  },
});

export default Login;
