
import React, { useState, useRef } from 'react';
import { SendIcon } from './icons/SendIcon';
import { PaperclipIcon } from './icons/PaperclipIcon';

interface MessageInputProps {
  onSendMessage: (content: { text?: string; file?: File }) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [text, setText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage({ text });
      setText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onSendMessage({ file });
    }
    // Reset file input to allow selecting the same file again
    e.target.value = '';
  };
  
  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 z-10">
      <div className="flex items-center gap-4 bg-slate-800 rounded-full p-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleAttachClick}
          className="p-2 text-slate-400 hover:text-purple-400 transition-colors duration-200"
          aria-label="Attach file"
        >
          <PaperclipIcon className="h-6 w-6" />
        </button>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="spill the tea..."
          rows={1}
          className="flex-1 bg-transparent resize-none text-slate-200 placeholder-slate-500 focus:outline-none max-h-24"
        />
        <button
          onClick={handleSend}
          disabled={!text.trim()}
          className="p-2.5 rounded-full bg-purple-600 text-white disabled:bg-slate-700 disabled:text-slate-500 hover:bg-purple-700 transition-all duration-200 transform enabled:hover:scale-110"
          aria-label="Send message"
        >
          <SendIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
