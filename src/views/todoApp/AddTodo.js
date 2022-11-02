import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleChangInput = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleClick = () => {
        let todo = { id: 'todo' + (Math.floor(Math.random() * 10000)), ...this.state }
        if (!this.state.title) {
            toast.error('Missing todo\'s title')
            return
        }
        this.props.addTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <>
                <h2 className="list-todo-header">To do list</h2>
                <div className="add-todo">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => { this.handleChangInput(e) }}
                    />
                    <button
                        className="btn-add"
                        type="button"
                        onClick={() => { this.handleClick() }}
                    >Add
                    </button>
                </div>
            </>
        )
    }
}

export default AddTodo;