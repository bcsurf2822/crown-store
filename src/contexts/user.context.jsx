import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";

//Value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//Provider is the actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log("Auth State Changed Listener for User:  ", user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
// By returning the unsubscribe it cleans up the actual method. and often times will call the error or completed if passed which is why it is listed

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
