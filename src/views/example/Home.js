import React from 'react';

import Color from '../HOC/Color';
import avatar from '../../assets/images/avatar.JPG';
import { connect } from 'react-redux';

class Home extends React.Component {

    handleClickDelete = (user) => {
        this.props.deleteUser(user);
    }

    handleCreateUser = () => {
        this.props.createUser();
    }

    render() {
        let listUser = this.props.dataRedux;
        return (
            <div>
                <div>
                    Hello everyone.
                </div>
                <div>
                    My name is Hoài Bảo - 22 years old
                </div>
                <div>
                    <img
                        src={avatar}
                        style={{ width: '244px', height: '163px', marginTop: '10px' }}
                        alt="avatar"
                    >
                    </img>
                </div>
                <div>
                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1}. {item.name}
                                    <button onClick={() => { this.handleClickDelete(item) }}>x</button>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => { this.handleCreateUser() }}>Add new user</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users //truyền state của redux vào
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (user) => dispatch({ type: 'DELETE_USER', payload: user }),//thêm vào redux action
        createUser: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
//truyền vào trong connect theo kiểu HOC để component Home nhận dưới dang props