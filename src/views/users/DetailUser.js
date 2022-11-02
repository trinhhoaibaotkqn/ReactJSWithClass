import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

//use Hook because this version react router v6
//call API get user by id
function DetailUser() {
    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://reqres.in/api/users/${params.id}`);
            setUser(res.data.data)
        }

        fetchData()
    }, [params]);

    return (
        <>
            {
                Object.keys(user).lenght !== 0 &&
                <div className='user'>
                    <div>{user.first_name} {user.last_name}</div>
                    <div>Email: {user.email}</div>
                    <div>
                        <img src={user.avatar} alt="avatar-user"></img>
                    </div>
                </div>

            }
        </>
    );
}

export default DetailUser;
