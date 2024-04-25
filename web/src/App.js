import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';
import {SideMenu} from './components/SideMenu/SideMenu';

// React Hooks
import {useState} from 'react';

function App() {
  const[input, setInput ] =useState("")
  const[chatlog, setChatlog ] =useState([{
    user:"gpt",
    message:"Como posso te ajudar hoje?"
  }])
  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className='chatbox'>

      </section>
    </div>
  );
}

export default App;
