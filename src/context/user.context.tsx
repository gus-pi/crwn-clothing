import { createContext, Dispatch, SetStateAction, useState } from 'react';

type User = {
  email: string | null;
};

export const UserContext = createContext<{
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
