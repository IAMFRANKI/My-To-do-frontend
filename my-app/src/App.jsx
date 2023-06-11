import { createContext, useState } from 'react';
import { Route, Routes, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todo from './pages/Todo';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const logOut = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  const route = ([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/todo',
      element: <Todo/>
    }
  ])

  return (
    <UserContext.Provider value={{ user, setUser, logOut }}>
     
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
