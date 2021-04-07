import React, {useState} from 'react';
import {View, FlatList, Text, Alert, StyleSheet} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  function randomId() {
    return Math.floor(Math.random() * 100);
  }

  const [items, setItems] = useState([
    {id: randomId(), text: 'milk'},
    {id: randomId(), text: 'eggs'},
    {id: randomId(), text: 'bread'},
    {id: randomId(), text: 'juice'},
  ]);

  const deleteItem = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'please enter an item', [{text: 'ok'}]);
    } else {
      setItems(items => [...items, {id: randomId(), text: text}]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} randomId={randomId}></AddItem>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
