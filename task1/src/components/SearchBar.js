import React from 'react';
import {StyleSheet, TextInput, View, Keyboard, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }>
        <Ionicons
          name="search"
          size={20}
          color="white"
          style={{marginLeft: 1}}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          //   onFocus={() => {
          //     setClicked(true);
          //   }}
        />
        {clicked && (
          <Ionicons
            name="cross"
            size={20}
            color="white"
            style={{padding: 1}}
            // onPress={() => {
            //   setSearchPhrase('');
            // }}
          />
        )}
      </View>
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              //   setClicked(false);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
    backgroundColor: 'white',
  },
});
