import { useState } from 'react';
import './App.css';
import List from './components/useEffect/List';
import Details from './components/useEffect/Details';
import NewData from './components/useJsonFetch/NewData';
import NewLoading from './components/useJsonFetch/NewLoading';
import NewError from './components/useJsonFetch/NewError';

function App() {
  const [id, setId] = useState(false)

  function clickHandler(itemId) {
    setId(itemId)
  };

  return (
    <>
      <div className='title'>UseEffect</div>
      <div className='box'>
        <List clickHandler={clickHandler} />
        {id ? <Details id={id} /> : null}
      </div>

      <div className='title'>useJsonFetch</div>
      <div className='container'>
        <NewData />
        <NewError />
        <NewLoading />
      </div>
    </>
  );
}

export default App;
