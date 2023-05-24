import { Component } from "react";
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class MapPage extends Component{
    
    private styles = StyleSheet.create({
        container: {
          flex: 1,
        },
      
        map: {
          width: '100%',
          height: '100%',
        },
        
    });
    render() {
        return (
            <View style={this.styles.container}>
                 <MapView style={this.styles.map} /> 
            </View>
        );
       
    }
}
    

