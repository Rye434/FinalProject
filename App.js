// App.js
import React from 'react';
import Main from "./components/Main";
import { createStore, applyMiddleware } from "redux";
import restaurants from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

export default class App extends React.Component {



    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
let state = { status: "page1" };
let store = createStore(restaurants, state, applyMiddleware(thunk));