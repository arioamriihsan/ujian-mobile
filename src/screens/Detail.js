import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { useSelector } from 'react-redux';

const Detail = ({navigation}) => {

  const name = useSelector(state => state.detail.name);
  const address = useSelector(state => state.detail.location.address);
  const rating = useSelector(state => state.detail.user_rating.aggregate_rating);
  const cuisine = useSelector(state => state.detail.cuisines);
  const time = useSelector(state => state.detail.timings);
  const price = useSelector(state => state.detail.average_cost_for_two);

  return ( 
    <View>
      <Header 
        placement="left"
        leftComponent={{
          icon: "arrow-back",
          onPress: () => navigation.goBack(),
          color: "white",
        }}
        centerComponent={{
          text: name,
          style: styles.header,
        }}
        containerStyle={{
          backgroundColor: "tomato",
          justifyContent: 'space-around',
          marginTop: Platform.OS === 'ios' ? 0 : - 25,
          borderBottomWidth: 0.5,
        }}
      />
      <Image 
        source={{ uri: "https://b.zmtcdn.com/data/pictures/5/18660165/0f6364ff33ba43fee90184cce115b46a.jpg" }}
        style={styles.image}
      />
      <View style={styles.containerText}>
        <View style={styles.groupText}>
          <Text>Rating</Text>
          <Text>: {rating}</Text>
        </View>  
        <View style={styles.groupText}>
          <Text>Address</Text>
          <Text>: {address}</Text>
        </View>  
        <View style={styles.groupText}>
          <Text>Cuisine</Text>
          <Text>: {cuisine}</Text>
        </View>  
        <View style={styles.groupText}>
          <Text>Open</Text>
          <Text>: {time}</Text>
        </View>  
        <View style={styles.groupText}>
          <Text>Cost</Text>
          <Text>: {price}</Text>
        </View>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    fontSize: 18, 
    fontWeight: "700",
  },
  image: {
    height: 200, 
    width: "100%",
  },
  containerText: {
    display: "flex",
  },
  groupText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Detail;
