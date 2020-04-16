import React from 'react';
import {useSelector} from 'react-redux';
import InputForm from './components/InputForm/';
import BasicDataView from './components/BasicDataView/';

function App() {

  const basicData = useSelector(state => state.basicData);

  return (
    <div className="App">
      <InputForm/>
      {basicData ? <BasicDataView/> : <p>nothing to see here!</p> }
    </div>
  );
}

export default App;
