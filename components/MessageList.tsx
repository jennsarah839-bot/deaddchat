
import React, { useEffect, useRef } from 'react';
import type { Message as MessageType, User } from '../types';
import { Message } from './Message';

interface MessageListProps {
  messages: MessageType[];
  currentUser: User;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, currentUser }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
      {messages.map((msg) => (
        <Message
          key={msg.id}
          message={msg}
          isCurrentUser={msg.user.name !== 'system' && msg.user.name === currentUser.name}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
