import { types } from "../types/types";

const { login,logout } = types;

export const authReducer = (state={}, {type,payload}) =>{
   switch (type) {
      case login:
         return {
            ...payload,
            logged: true
         }
      
      case logout: 
         return {
            logged: false
         }
   
      default:
         return state;
   }
}