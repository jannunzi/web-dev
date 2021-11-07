import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a7/twitter/home">Build</Link>
            <ReduxExamples/>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
};

export default Practice;
