import React from "react";

//Child component của MyComponent

class MyForm extends React.Component {
    state = {
        title: "",
        salary: "",
    }

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let job = {
            id: Math.floor(Math.random() * 1000),
            ...this.state
        }
        this.props.addJob(job); //truyền dữ liệu từ con lên cha bằng các truyền qua tham số của f() ở component cha
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="title">Title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(e) => { this.handleChangeTitle(e) }}
                    />
                    <br />
                    <label htmlFor="salary">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(e) => { this.handleChangeSalary(e) }}
                    />
                    <br />
                    <button onClick={(e) => { this.handleSubmit(e) }} >Submit</button>
                </form>
            </>
        )
    }
}

export default MyForm;