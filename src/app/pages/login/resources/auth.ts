export interface User {
    id: string;
    username: string;
    email: string;
    isadmin: boolean;
    lastconnect: Date;
  }
  
  export var UserModel: User = {
    id: null,
    username: null,
    email: null,
    isadmin: false,
    lastconnect: null
  };