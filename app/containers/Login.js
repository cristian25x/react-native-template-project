// @flow
'use strict';

import React from 'react';
import { connect } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

 class Login extends React.Component {
   constructor(props){
     super(props);
   }

  render() {
    return (
      <View style={{flex: 1}}>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    loginCompleteReducer : state.loginCompleteReducer
  }
}

export default connect(mapStateToProps)(Login);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
