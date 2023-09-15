
export interface User{
  name: string,
  password:string,
  email:string,
}

export interface UserSession extends User{

  sessionKey:string
}

export interface UserCrendentails{
  email:string,
  password:string,
}
