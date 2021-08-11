import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { logout } from '../../Redux/Action/authAction'
const Dashboard = () => {
    const dispatch=useDispatch();
    const history=useHistory()
    return (
        <div>
            welcome to dashboard
            <button onClick={()=>{dispatch(logout());
            history.push('/sign')
            }}>logout</button>
        </div>
    )
}

export default Dashboard
