import React from "react";
import "./chatPage.css";

const ChatPage = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h3>Logo</h3>
        <h2>Voyager Demo Dapp🚀</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <form action="">
            <input type="text" name="" id="" placeholder="Add API Key" />
            <button type="submit" className="my-btn">
              Add
            </button>
          </form>
          <button className="my-btn">Add Wallet</button>
        </div>
      </nav>
      <div className="main">
        <div className="sidebar">
          <h5>Chat history</h5>
          <div className="cards">
            <div className="card">
              <h6>Some Dummy chat history</h6>
              <p>dkljebiebcbcbecebcbewcheh</p>
            </div>
            <div className="card">
              <h6>Some Dummy chat history</h6>
              <p>dkljebiebcbcbecebcbewcheh</p>
            </div>
            <div className="card">
              <h6>Some Dummy chat history</h6>
              <p>dkljebiebcbcbecebcbewcheh</p>
            </div>
          </div>
        </div>
        <div className="mainbar">
          <div className="chatSession">
            <div className="chats">
              <div className="profile">
                <h4>Unfold Hacathon</h4>
              </div>
              <div className="chat">
                <div className="messages">
                  <div className="message">hi</div>
                  <div className="message al-ryt">hello</div>
                  <div className="message">How are you?</div>
                </div>
              </div>
            </div>
            <form action="">
              <input type="text" name="" id="" placeholder="Send Message" />
              <button className="my-btn">Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
