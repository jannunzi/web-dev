import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import hello from "../reducers/hello";
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
const store = createStore(hello);
const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;