import React, { Component } from 'react'
import Icon from "react-native-vector-icons/Ionicons"
let color
export default class Mail extends Component {

  render() {
    this.props.white ? color = '#fff' : color = '#000'
    return (
      <Icon name='ios-mail' color={color} size={32} style={{padding: 20}}/>
    )
  }
}
