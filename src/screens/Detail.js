import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';

const Detail = ({navigation}) => {

  const [dp, setDP] = useState(null);

  const image = useSelector(state => state.detail.url);

  useEffect(() => {
    setDP(image);
    return (() => {
      setDP(null);
    })
  }, []);

  const handleBtn = image => {
    navigation.navigate("Logout");
  };

  let { imageStyle, btnStyle } = styles;

  return ( 
    <View>
      <Image 
        source={{ uri: dp }}
        style={imageStyle}
      />
      <View>
        <Button 
          title="set as display picture?"
          buttonStyle={btnStyle}
          onPress={() => handleBtn(image)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 400, 
    width: "100%",
  },
  btnStyle: {
    textTransform: "uppercase",
    backgroundColor: "#3DDC84",
  },
});

export default Detail;
