import React, { Component } from 'react'
import Icon from "react-native-vector-icons/Ionicons"

export default class Burger extends Component {

  render() {
    this.props.black ? color = '#000' : color = '#fff'
    return (
      <Icon name='ios-menu' color={color} size={30} style={{padding: 10}}/>
    )
  }
}
