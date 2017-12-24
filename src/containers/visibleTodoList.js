import {TodoList} from "../components/TodoList";
import {connect} from "react-redux";

const VisibleTodoList = connect(
    (state) => ({todos: state})
)(TodoList);

export default VisibleTodoList;