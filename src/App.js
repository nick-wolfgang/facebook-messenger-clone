import React from 'react';
import {Button, FormControl, InputLabel, Input} from '@mui/material';
import { useState, useEffect } from 'react'; 
import Message from './Message';
import './App.css'; 
import fm2 from './fm2.png'
//import db from './firebase';



function App() {

const [input, setInput] = useState('');
const [messages, setMessages] = useState([
  {username: 'Wolfgang', message: 'Bonjour toi :)'},
  {username: 'Sonny', message: 'Hello!'},

]);
const [username, setUsername] = useState('');

console.log(fm2);


useEffect(() => {
  setUsername(prompt('Entrez votre nom SVP...'))
}, []) //Condition

{/*useEffect(() => {
  db.collection('messages').onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => doc.data()))
  });
}, [])  */}

const sendMessage = (event) => {
  //All the logic to send the message goes here
  event.preventDefault();
  setMessages([...messages, {username: username, message: input}])
  setInput('');
}

  return (
    <div className="App">
      <div className="img">
        <img src={fm2} height='170px' width='170px'/>
      </div>
      <h1>Messenger App</h1>
      <h2>Welcome {username} nice to meet you !</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <div className="input_button">
            <Input value={input} onChange={event => setInput(event.target.value)}/>
            <Button disabled={!input} variant="contained" type='submit' onClick={sendMessage}>
              Send Message
            </Button>
          </div>
        </FormControl>
      </form>
      
      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }  
    </div>
  );
}

export default App;
