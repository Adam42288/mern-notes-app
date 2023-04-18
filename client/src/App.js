
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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


  return (
    <ApolloProvider client={client}>
      <div className="App">

        <BrowserRouter>
          <Navbar />
          <div className="pages">
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
                element={<Note />}
              />
            </Routes>
          </div>
        </BrowserRouter>

      </div>
    </ApolloProvider>
  );
}

export default App;