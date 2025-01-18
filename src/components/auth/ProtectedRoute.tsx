import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Authenticated = ({ children }: any) => {

    const authData = useSelector((state: any) => state.auth);

    const navigate = useNavigate();

    if (authData?.authToken) {
        return <>
            {children}
        </>
    }

    return <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw'
    }}>
        <h3>
            You're not Authenticated.
            Please login to access this page.
        </h3>
        <button onClick={() => navigate('/login')}>Login</button>
    </div>
}

export default Authenticated


