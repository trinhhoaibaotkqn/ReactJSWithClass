import React from 'react';
import axios from 'axios';
import './ListUser.scss'

//Call API get list users in page 2

class ListUser extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetail = (user) => {

    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className='list-user-container'>
                <div className='title'>All users</div>
                <div className='list-user-content'>
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div
                                    className='child'
                                    key={item.id}
                                // onClick={() => this.handleViewDetail(item)}
                                >
                                    {index + 1}. {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        );
    }
}

export default ListUser;