import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { Icons, FoodCard } from '../components';
import { FetchData, GetDetail } from '../redux/actions/zomatoAction';

const Feed = ({navigation}) => {

  console.log(navigation);

  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  const data = useSelector(state => state.data.restaurants);

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  const handlePress = restaurant => {
    dispatch(GetDetail(restaurant));
    navigation.navigate("Detail");
  };

  return (
    <View style={styles.container}>
      <Header
        rightComponent={{
          text: `Hallo, ${username}`,
          style: { color: 'white', fontSize: 18, fontWeight: '700' },
        }}
        leftComponent={{
          icon: 'ticket-account',
          color: 'white',
          type: 'material-community',
          size: 30,
        }}
        containerStyle={{
          backgroundColor: 'tomato',
          justifyContent: 'space-around',
          marginTop: Platform.OS === 'ios' ? 0 : - 7,
        }}
        rightContainerStyle={{
          flex: 3,
        }}
      />
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10,
        backgroundColor: "#fff",
      }}>
        <Icons icons={'credit-card'} types={'entypo'} name={'Credit'} />
        <Icons icons={'food-variant'} types={'material-community'} name={'Variant'} />
        <Icons icons={'food-fork-drink'} types={'material-community'} name={'Recipe'} />
        <Icons icons={'location-pin'} types={'entypo'} name={'Location'} />
        <Icons icons={'shopping-cart'} types={'font-awesome'} name={'Cart'} />
        <Icons icons={'local-pizza'} types={'material'} name={'Pizza'} />
        <Icons icons={'hamburger'} types={'material-community'} name={'Burger'} />
        <Icons icons={'more-horizontal'} types={'feather'} name={'More'} />
      </View>
      <FlatList 
        data={data}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => handlePress(item.restaurant)}>
            <View style={{ width: "50%", height: 250 }}>
              <FoodCard data={item.restaurant} />
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={item => item.restaurant.name}
        style={{ width: "98%" }}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Feed;
