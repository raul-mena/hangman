import React from 'react';

//components
import KeywordComponent from './components/keyword/keyword';
import HeaderComponent from './components/header/header';
import OptionsComponent from './components/options/options';
import WordComponent from './components/word/word';

//redux section
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <OptionsComponent></OptionsComponent>
        <WordComponent></WordComponent>
        <KeywordComponent></KeywordComponent>
      </div>
    </Provider>

  );
}

export default App;
