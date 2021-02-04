import React, { Component } from "react";
import "../style/Todo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { isEidt: false, task: props.todo.Text }
    }

    makeEditable = () => {
        this.setState({ isEidt: !this.state.isEidt })
    }

    handleChange = (e) => {
        this.setState({ task: e.target.value })
    }

    updateTodo = () => {

        let todo = { ...this.props.todo };
        todo.Text = this.state.task;
        this.props.updateTodo(todo);
        // this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEidt: false });

    }

    render() {
        if (!this.state.isEidt) {
            return (
                <TransitionGroup className='Todo'>

                    <CSSTransition key='normal' timeout={500} classNames='task-text'>
                        <li className='Todo-task' onClick={this.handleToggle}>
                            {this.props.todo.Text}
                        </li>
                    </CSSTransition>
                    <div className='Todo-buttons'>
                        <button onClick={this.makeEditable}><i className='fas fa-pen' /></button>
                        <button onClick={this.props.removeTodo}><i className='fas fa-trash' /></button>
                    </div>
                </TransitionGroup>
            )
        }
        else {
            return (
                <TransitionGroup className='Todo'>
                    <CSSTransition key='editing' timeout={500} classNames='form'>
                        <form className='Todo-edit-form'>
                            <input
                                type='text'
                                value={this.state.task}
                                name='task'
                                onChange={this.handleChange}
                            />
                            <button onClick={this.updateTodo}>Save</button>
                        </form>
                    </CSSTransition>
                </TransitionGroup>
            )
        }


    }

}

export default Todo;