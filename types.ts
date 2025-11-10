
export interface User {
  name: string;
}

export interface FileData {
  name: string;
  type: string;
  url: string;
}

export interface Message {
  id: string;
  user: User;
  text?: string;
  file?: FileData;
  timestamp: number;
}
