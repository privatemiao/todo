import {TodoList} from "../components/TodoList";
import {connect} from "react-redux";
import {toggleTodo} from "../action";

const VisibleTodoList = connect(
    (state) => ({todos: state}),
    (dispatch) => ({
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    })
)(TodoList);

export default VisibleTodoList;