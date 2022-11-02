import React from "react";
import "./ListTodo.scss"
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    //CREATE
    addTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Add todo successful!")
    }

    //UPDATE
    handleEdit = (todo) => {
        this.setState({
            editTodo: todo
        })
    }

    handleChangeEdit = (e) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    handleSaveEdit = (editTodo) => {
        let currentTodos = [...this.state.listTodos];
        let index = currentTodos.findIndex((item) => item.id === editTodo.id)
        currentTodos[index].title = editTodo.title;
        this.setState({
            listTodos: currentTodos,
            editTodo: {}
        })
        toast.success('Update successful')
    }

    //DELETE
    handleDelete = (todo) => {
        let currentTodos = [...this.state.listTodos];
        currentTodos = currentTodos.filter((item, index) => item !== todo)
        this.setState({
            listTodos: currentTodos
        })
        toast.success('Delete successful')
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEdit = Object.keys(editTodo).length !== 0;
        return (
            <div className="list-todo-container">
                <AddTodo
                    addTodo={this.addTodo}
                />
                <div className="list-todo-content">
                    {
                        listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEdit && item.id === editTodo.id ?
                                        <>
                                            <span>
                                                {index + 1}. <input
                                                    value={editTodo.title}
                                                    onChange={(e) => { this.handleChangeEdit(e) }}
                                                />
                                            </span>
                                            <button
                                                className="btn-edit"
                                                onClick={() => { this.handleSaveEdit(editTodo) }}
                                            >Save
                                            </button>
                                        </>
                                        :
                                        <>
                                            <span>{index + 1}. {item.title}</span>
                                            <button
                                                className="btn-edit"
                                                onClick={() => { this.handleEdit(item) }}
                                            >Edit
                                            </button>
                                        </>
                                    }

                                    <button
                                        className="btn-delete"
                                        onClick={() => { this.handleDelete(item) }}
                                    >Delete
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}

export default ListTodo