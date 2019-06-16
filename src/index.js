import React from 'react';
import ReactDOM from 'react-dom';
import firebase from  './firebase';

import 'semantic-ui-css/semantic.min.css'

import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(() => {}, composeWithDevTools());

class Root extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            console.log(user)

            this.props.history.push("/");
          }
        })
      }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={ App }/>
                    <Route path="/login" component={ Login }/>
                    <Route path="/register" component={ Register }/>
                </Switch>
            </Router>
        )
    }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>
, document.getElementById('root'));
