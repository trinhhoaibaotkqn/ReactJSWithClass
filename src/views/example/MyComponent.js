import React from "react";
import ChildComponent from "./ChildComponent";
import MyForm from "./MyForm";
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "job1", title: "Web developer", salary: "1000" },
            { id: "job2", title: "Tester", salary: "2000" },
            { id: "job3", title: "Project manager", salary: "5000" }
        ]
    }

    addJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => {
            return item !== job
        })
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        return (
            <>
                <MyForm
                    addJob={this.addJob} //truyền props xuống component con
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;