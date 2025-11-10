
import React, { useState, useEffect } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { ChatScreen } from './components/ChatScreen';
import type { Message, User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (user) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        user: { name: 'system' },
        text: `ayo ${user.name}, welcome to deadchat. no rules, no history, just vibes. what's the tea? 💅`,
        timestamp: Date.now(),
      };
      setMessages([welcomeMessage]);
    } else {
      setMessages([]);
    }
  }, [user]);

  const handleLogin = (username: string) => {
    if (username.trim()) {
      setUser({ name: username.trim() });
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSendMessage = (content: { text?: string; file?: File }) => {
    if (!user) return;

    const { text, file } = content;

    if (!text?.trim() && !file) return;

    let fileData;
    if (file) {
      fileData = {
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      };
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      user: user,
      text: text,
      file: fileData,
      timestamp: Date.now(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <ChatScreen
      user={user}
      messages={messages}
      onSendMessage={handleSendMessage}
      onLogout={handleLogout}
    />
  );
};

export default App;
