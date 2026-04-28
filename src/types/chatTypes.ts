export interface Chat {
  chat_id: string;
  chats: {
    id: string;
    status: string;
    task_id: string;
    tasks: {
      id: string;
      title: string;
      description: string;
    };
  };
}

export interface ChatsResponse {
  chats: Chat[];
}
