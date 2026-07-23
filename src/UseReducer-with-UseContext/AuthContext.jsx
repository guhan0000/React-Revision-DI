import React, { createContext, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, msg: "logged in successfully!" };
    case "LOGIN_FAILURE":
      return { ...state, user: null, loading: true, msg: action.payload };
    case "LOGOUT":
      return { ...state, user: null, msg: "logged out successfully" };
    default:
      return state;
  }
}
const AuthContext = createContext();
const initialState = { user: null, loading: false, msg: "" };

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
