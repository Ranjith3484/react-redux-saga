import React, { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './components/counter.js';
import InputForm from './components/form.js';
import PostList from './components/posts';
import GettingData from './scenes/gettingData.js';

const store = createStore(allReducers);

export default class App extends Component{
  render(){
    return(
      <GettingData/>
    );
  }
}