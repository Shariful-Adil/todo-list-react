import React, { Component } from "react";
import TodoForm from './TodoForm'
import Todo from './Todo'
import "../style/TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = { todos: [{ Id: 1, Text: 'todo 1' }, { Id: 2, Text: 'todo 2' }] }

    }

    addTodo = (todo) => {
        let todos = [...this.state.todos]
        todos.push(todo);
        this.setState({ todos: todos });
    };

    removeTodo = (id) => {
        let todos = this.state.todos.filter(todo => {
            return todo.Id != id;
        });
        this.setState({ todos: todos });
    };

    updateTodo = todo => {

        let todos = [...this.state.todos];
        todos.map(item => {
            if (item.Id == todo.Id) {
                item.Text = todo.Text;
            }
            return item;
        })
        this.setState({ todos: todos });
    }


    render() {

        let todos = this.state.todos.map((todo) => {
            return (
                <CSSTransition key={todo.Id} timeout={500} classNames='todo'>
                    <Todo todo={todo}
                        key={todo.Id}
                        removeTodo={() => this.removeTodo(todo.Id)}
                        updateTodo={this.updateTodo}
                    />
                </CSSTransition>
            );
        })

        return (

            <div className='TodoList'>
                <h1>Todo List</h1>
                <TodoForm addTodo={this.addTodo} />
                <ul>
                    <TransitionGroup className='todo-list'>
                        {todos}
                    </TransitionGroup>
                </ul>

            </div>
        )

    }

}

export default TodoList;