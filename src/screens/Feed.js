import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { Icons, FoodCard } from '../components';
import { FetchData, GetDetail } from '../redux/actions/zomatoAction';

const Feed = ({navigation}) => {

  console.log(navigation);

  const dispatch = useDispatch();
  // const username = useSelector(state => state.auth.username);
  const data = useSelector(state => state.data.restaurants);
  
  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  const handlePress = image => {
    console.log(image);
    dispatch(GetDetail(image));
    navigation.navigate("Detail");
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => handlePress(item)}>
            <View style={{ width: "50%", height: 250 }}>
              <FoodCard data={item} />
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={({}, index) => index.toString()}
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
