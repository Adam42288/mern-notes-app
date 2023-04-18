
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import Note from './pages/Note';
import Signup from "./pages/SignupForm";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';


function App() {

  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const ProtectedRoute = ({ loggedIn, children }) => {
    if (!loggedIn) {
      console.log("not logged in")
      return <Navigate to="/"/>
    }

    return children
  }


  return (
    <ApolloProvider client={client}>
      <div className="App">

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/SignupForm'
              element={<Signup />}
            />
            <Route
              path='/Note' 
              element={
                <ProtectedRoute loggedIn={() => {Auth.loggedIn()}}>
                  <Note/>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>

      </div>
    </ApolloProvider>
  );
}

export default App;