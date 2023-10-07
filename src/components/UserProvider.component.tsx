import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChangedLister,
  createUserDocumentFromAuth,
} from "../utils/firebase.utils";

export const UserContext = createContext<
  [any, Dispatch<SetStateAction<any>>] | null
>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<any | null>();

  useEffect(() => {
    let unsubscribe = onAuthStateChangedLister((user) => {
      console.log("user change:" + user);
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </UserContext.Provider>
  );
}
