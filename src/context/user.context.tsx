import { createContext, useEffect, useReducer } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';
import { User } from '../utils/types/types';

// Define the shape of the state
interface UserState {
  currentUser: User | null;
}

// Define action types
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
} as const;

// Create a type for action objects
type UserAction = {
  type: typeof USER_ACTION_TYPES.SET_CURRENT_USER;
  payload: User | null;
};

// Initial state
const INITIAL_STATE: UserState = {
  currentUser: null,
};

// Reducer function with proper typing
const userReducer = (state: UserState, action: UserAction): UserState => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

// Context value type
interface UserContextValue {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

// Create context with proper typing
export const UserContext = createContext<UserContextValue>({
  currentUser: null,
  setCurrentUser: () => null, // Default no-op function
});

// Provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setCurrentUser = (user: User | null) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value: UserContextValue = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
