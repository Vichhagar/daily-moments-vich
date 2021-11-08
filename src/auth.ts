import React, { useContext } from 'react';

export const AuthContext = React.createContext({loggedIn:false});

export function useAuth() {
    return useContext(AuthContext);
}

// auth.onAuthStateChanged((user) => {
//     if (user) {
//       setLoggedIn(true);
//       console.log('from app.tsx: ',)
      
//     } else {
//       setLoggedIn(false);
//     }
//   })