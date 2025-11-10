
import React from 'react';
import type { Message as MessageType } from '../types';
import { FileIcon } from './icons/FileIcon';

interface MessageProps {
  message: MessageType;
  isCurrentUser: boolean;
}

const FilePreview: React.FC<{ file: MessageType['file'] }> = ({ file }) => {
    if (!file) return null;

    if (file.type.startsWith('image/')) {
        return <img src={file.url} alt={file.name} className="mt-2 rounded-lg max-w-xs max-h-64 object-cover" />;
    }

    return (
        <a 
            href={file.url} 
            download={file.name}
            className="mt-2 flex items-center gap-3 bg-slate-600/50 p-3 rounded-lg hover:bg-slate-600 transition-colors duration-200"
        >
            <FileIcon className="h-8 w-8 text-slate-400" />
            <div className="overflow-hidden">
                <p className="font-medium text-sm truncate">{file.name}</p>
                <p className="text-xs text-slate-400">Click to download</p>
            </div>
        </a>
    );
}

export const Message: React.FC<MessageProps> = ({ message, isCurrentUser }) => {
  const isSystemMessage = message.user.name === 'system';

  if (isSystemMessage) {
    return (
      <div className="text-center my-2">
        <p className="text-xs text-slate-500 italic max-w-md mx-auto">{message.text}</p>
      </div>
    );
  }

  const messageAlignment = isCurrentUser ? 'items-end' : 'items-start';
  const bubbleStyles = isCurrentUser
    ? 'bg-purple-600 text-white rounded-br-none'
    : 'bg-slate-700 text-slate-200 rounded-bl-none';

  return (
    <div className={`flex flex-col ${messageAlignment}`}>
      <div className="flex items-baseline gap-2">
        {!isCurrentUser && (
            <span className="font-bold text-sm text-slate-400">{message.user.name}</span>
        )}
        <span className="text-xs text-slate-500">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      <div
        className={`mt-1 max-w-sm md:max-w-md p-3 rounded-2xl ${bubbleStyles}`}
      >
        {message.text && <p className="whitespace-pre-wrap break-words">{message.text}</p>}
        {message.file && <FilePreview file={message.file} />}
      </div>
    </div>
  );
};
