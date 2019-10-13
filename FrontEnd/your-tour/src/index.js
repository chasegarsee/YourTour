import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

let config = {
    apiKey: 'AIzaSyBfo6GsolwHY7TYkzkBMLvz1YTSOvolU-U',
    authDomain: "",
    databaseURL: "",
    storageBucket: ""
}
firebase.initializeApp(config)
ReactDOM.render(<App />, document.getElementById('root'));