import React, { useState, ChangeEvent, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

interface Message {
  text: string;
  sender: string;
  timestamp: string;
}

function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [participantsMessages, setParticipantsMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const [showParticipants, setShowParticipants] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;
    const currentTime = new Date().toLocaleTimeString();
    const newMessage: Message = {
      text: messageInput,
      sender: 'You',
      timestamp: currentTime,
    };

    // Add the message to the appropriate list based on the active screen
    if (showParticipants) {
      setParticipantsMessages([...participantsMessages, newMessage]);
    } else {
      setMessages([...messages, newMessage]);
    }

    setMessageInput('');
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (file) {
      // You can handle different file types (PDF, images) here
      if (file.type === 'application/pdf') {
        // Handle PDF file
        const message = `File uploaded: ${file.name} (PDF)`;
        // Create a download link for the PDF
        const pdfLink = URL.createObjectURL(file);
        const currentTime = new Date().toLocaleTimeString();
        const newMessage: Message = {
          text: message,
          sender: 'You',
          timestamp: currentTime,
          pdfLink, // Store the PDF link
        };
        setMessages([...messages, newMessage]);
      } else if (file.type.startsWith('image/')) {
        // Handle image file
        const message = `File uploaded: ${file.name} (Image)`;
        const imageUrl = URL.createObjectURL(file); // Create an image URL
        const currentTime = new Date().toLocaleTimeString();
        const newMessage: Message = {
          text: message,
          sender: 'You',
          timestamp: currentTime,
          imageUrl, // Store the image URL
        };
        setMessages([...messages, newMessage]);
      }
      setSelectedFile(null); // Clear the selected file
    }
  };
  return (
    <div className="chat-container">
      <br />
      <div className="chat-header">
        <h1>Group Chat</h1>
        <div className="chat-header-buttons" style={{ display: 'flex' }}>
          <button
            className={`button ${!showParticipants ? 'active-button' : ''
              }`}
            onClick={() => setShowParticipants(false)}
            style={{
              background: !showParticipants
                ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.81) -133.41%, #69008D -26.83%, #A339E9 105.22%)'
                : 'transparent',
            }}
          >
            Messages
          </button>
          <button
            className={`button ${showParticipants ? 'active-button' : ''}`}
            onClick={() => setShowParticipants(true)}
            style={{
              background: showParticipants
                ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.81) -133.41%, #69008D -26.83%, #A339E9 105.22%)'
                : 'transparent',
            }}
          >
            Participants
          </button>
        </div>
      </div>
      <div className="chat-messages">
        {/* Render the chat messages */}
        {!showParticipants && (
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'You' ? 'sent' : 'received'
                  }`}
              >
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-sender">{message.sender}</span>
                    <span className="message-timestamp">
                      {message.timestamp}
                    </span>
                  </div>
                  <div className="message-text">
                    {message.text}
                    {/* Render PDF or image if available */}
                    {message.pdfLink && (
                      <a href={message.pdfLink} style={{ color: "#fff", display: "block" }} target="_blank" rel="noopener noreferrer">
                        View PDF
                      </a>
                    )}
                    {message.imageUrl && (
                      <img src={message.imageUrl} alt="Uploaded" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showParticipants && (
          <div className="participants-messages">
            {participantsMessages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'You' ? 'sent' : 'received'
                  }`}
              >
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-sender">{message.sender}</span>
                    <span className="message-timestamp">
                      {message.timestamp}
                    </span>
                  </div>
                  <div className="message-text">{message.text}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={messageInput}
          onChange={handleInputChange}
        />
        <input
          type="file"
          id="file-input"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <label htmlFor="file-input">
          <IconButton component="span">
            <AttachFileIcon fontSize="large" color="secondary" />
          </IconButton>
        </label>
        <button className="send-button" onClick={handleSendMessage}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default ChatApp;
