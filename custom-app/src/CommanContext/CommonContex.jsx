import React,{createContext,useState} from 'react'
 

export const DataProvder = createContext();


 export default function CommonContex({children }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const ContextValue={
    username,setUserName,password,setPassword
  }

  return (
   <DataProvder.Provider value={ContextValue}>
    {children}


   </DataProvder.Provider>
  )
}
