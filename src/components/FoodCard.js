import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Left, Right, Icon, View, Text } from 'native-base';

const FoodCard = ({data}) => {

  console.log(data.url);

  return ( 
    <Card>
      <View >
        <Image
          source={{ uri: data.url }}
          style={{ height: 180, width: "100%" }}
        />
      </View>
      {/* <CardItem style={{ marginTop: -10, height: 50 }}>
        <Left>
          <Icon 
            type="FontAwesome"
            name="star"
            style={{ fontSize: 11, color: "gold" }}
          />
          <Text style={{ fontSize: 11, color: "black", fontWeight: "bold" }}>{data.user_rating.aggregate_rating}</Text>
        </Left>
      </CardItem>
      <CardItem style={{ marginTop: -20, height: 40 }}>
        <Text style={{ fontWeight: "bold", marginRight: 5, fontSize: 14 }}>{data.name}</Text>
      </CardItem> */}
    </Card>
  );
};

export default FoodCard;