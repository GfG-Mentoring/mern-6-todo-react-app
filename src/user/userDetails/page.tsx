import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const UserDetails = () => {

    const pathParam = useParams();

    const navigate = useNavigate();


    const goBack = () => {
        navigate(-1);
    }





    return <>
        <button onClick={() => goBack()}> go back</button >
        <div style={{
            border: '1px solid gray',
            padding: "0.5rem 2rem"
        }}>
            <h2>{pathParam.userId}</h2>
            <p>{'unknown'}</p>
        </div>
    </>
}

export default UserDetails