import React, { Component } from "react";
import { View, TouchableOpacity, TextInput } from "react-native/types";

export default class Search extends Component{
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        map: {
          width: '100%',
          height: '100%',
        },
        searchBar: {
          position: 'absolute',
          top: 100,
          left: 20,
          right: 20,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'rgb(226,227,229)',
          borderRadius: 30,
          padding: 5,
          elevation: 4,
        },
        search: {
          position: 'absolute',
      
          alignItems: 'center',
      
          padding: 20,
      
        },
        
    });

render() {
    return (
        <View style={this.styles.searchBar}>

        <TouchableOpacity style={this.styles.searchButton} onPress={handleSearch}>
          <MaterialIcons name="search" size={24} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />

      </View>
    );
   
}
}