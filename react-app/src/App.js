import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';

import SearchBar from './components/Header/SearchBar';
// import NewsFeed from './components/NewsFeed';
import StockChart from './components/AssetDetails/StockChart';

// import GeneralNewsFeed from './components/GeneralNewsFeed';

import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Splash from './components/Splash';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'
import AssetDetails from './components/AssetDetails'
import { authenticate } from './store/session';
// import IndividualStockNews from './components/IndividualStockNews';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route path='/' exact={true}>
            <Splash />
            <Footer />
        </Route>
        <Route path='/dashboard'> 
            <Dashboard />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/stock/:ticker' exact={true}>
          <AssetDetails />
          {/* <StockChart /> */}
          
          {/* <IndividualStockNews /> */}
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/dashboard' exact={true} >
          <SearchBar></SearchBar>
          {/* <GeneralNewsFeed /> */}
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
