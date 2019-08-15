import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import store from './redux';
import Home from './pages/Home';
import Login from './pages/Login';
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
