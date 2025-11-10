
import React from 'react';
import type { Message, User } from '../types';
import { Header } from './Header';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

interface ChatScreenProps {
  user: User;
  messages: Message[];
  onSendMessage: (content: { text?: string; file?: File }) => void;
  onLogout: () => void;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({ user, messages, onSendMessage, onLogout }) => {
  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-200 overflow-hidden">
      <Header onLogout={onLogout} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <MessageList messages={messages} currentUser={user} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};
