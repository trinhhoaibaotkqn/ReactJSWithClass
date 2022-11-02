import React from "react";

//Child component của MyComponent

class ChildComponent extends React.Component {
    state = {
        isShow: false
    }

    //chức năng show hide
    handleClickShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    handleClickDelete = (job) => {
        this.props.deleteJob(job)////truyền dữ liệu từ con lên cha
    }

    render() {
        let { arrJobs } = this.props;

        return (
            <>
                <div>List jobs</div>
                {this.state.isShow === false ?
                    <div>
                        <button onClick={() => { this.handleClickShowHide() }}>Show</button>
                    </div>
                    :
                    <div className="job-list">
                        {
                            arrJobs.map((job, index) => {
                                return (
                                    <div key={job.id}>
                                        {job.title} - {job.salary}$ <></>
                                        <button onClick={() => { this.handleClickDelete(job) }}>x</button>
                                    </div>
                                )
                            })
                        }
                        <div>
                            <button onClick={() => { this.handleClickShowHide() }}>Hide</button>
                        </div>
                    </div>
                }
            </>
        )
    }
}

//Funtion component
// const ChildComponent = (props) => {
//     let { name, age, arrJobs } = props;
//     return (
//         <>
//             <div>
//                 This is child component with props: {name} and {age}
//             </div>

//             <div className="job-list">
//                 {
//                     arrJobs.map((job, index) => {
//                         return (
//                             <div key={job.id}>
//                                 {job.name} - {job.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;