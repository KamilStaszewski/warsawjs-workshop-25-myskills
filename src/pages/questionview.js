import React, { Component } from 'react';
import List from '../components/list';
import Description from '../components/description';


export default class Questionview extends Component {
  render() {
    return (
      <div>
        <Description />
        <List />
      </div>
    )
  }
}
