import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import store from './store/store';
import {LOADER_URL, TODO_LIST_URL, TODO_URL} from './constants';

import AppView from './AppView';
import LoaderView from './LoaderView';
import TodoView from './TodoView';


const Root = () => {
    return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact component={LoaderView} path={LOADER_URL} />
              <Route exact component={AppView} path={TODO_LIST_URL} />
              <Route exact component={TodoView} path={TODO_URL} />
            </Switch>
          </Router>
        </Provider>
    )
};

export default Root;
