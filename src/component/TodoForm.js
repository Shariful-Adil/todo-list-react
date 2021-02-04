import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../style/NewTodoForm.css";


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { Text: '' }

    }

    handleChange = (event) => {
        this.setState({ Text: event.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.Text) {
            this.props.addTodo({ Id: uuidv4(), ...this.state });
            this.setState({ Text: '' })
        }
    }

    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo</label>
                <input
                    type='text'
                    placeholder='New Todo'
                    id='task'
                    name='task'
                    value={this.state.Text}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>

        )
    }
}

export default TodoForm;