import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import colors from '../../res/colors';


class CoinSearch extends Component{

state = {
   query:"" 
}
handleText(query){
    this.setState({query});
    if(this.props.onChange){
    this.props.onChange(query);
    }

}
    render(){
    let {query} = this.state;
        return(
        <View>
         <TextInput style={[styles.textInput, styles.textInputAndroid ]} onChangeText={this.handleText()} value={query} placeholder='Search coin' placeholderTextColor={"#fff"} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput:{
      height:46,
      backgroundColor:colors.charade,
      paddingLeft:16,
      color:"#fff"
    },
textInputAndroid:{
    borderBottomWidth:2,
    borderBottomColor:colors.zircon
}
  })
export default CoinSearch;