import {TodoList} from "../components/TodoList";
import {connect} from "react-redux";
import {toggleTodo} from "../action";
import {withRouter} from "react-router-dom";
import getVisibleTodos from "../selector";

const VisibleTodoList = withRouter(connect(
    (state, {match}) => ({todos: getVisibleTodos(state, match.params.filter || 'all')}),
    (dispatch) => ({
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    })
)(TodoList));

export default VisibleTodoList;