import "./App.css";
import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Input, IconButton } from "@mui/material";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import SendIcon from "@mui/icons-material/Send";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt=""
      />
      <h2>Welcome {username}</h2>
      <form type="submit" className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter message</InputLabel>
          <Input
            className="app__input"
            placeholder="Enter a message"
            value={input}
            type="text"
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            type="submit"
            color="primary"
            disabled={!input}
            variant="contained"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Message key={id} username={username} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
