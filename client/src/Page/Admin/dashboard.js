import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import { useHistory } from 'react-router'
import { logout } from '../../Redux/Action/authAction'
import {getAllPapers} from '../../Redux/Action/paperAction'
const Dashboard = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const paper = useSelector((state)=>state.paper.datas);
    useEffect (()=>{
        dispatch(getAllPapers())
    })
    return (
        <div>
            welcome to dashboard
{
    paper.map((el)=>(
        <div>
        <h6>{el.titre}</h6>
        <p>{el.contenu}</p>
        <img src={el.image} alt="imgs"/>
        </div>
    ))
}






            <button onClick={()=>{dispatch(logout());
            history.push('/sign')
            }}>logout</button>
        </div>
    )
}

export default Dashboard
