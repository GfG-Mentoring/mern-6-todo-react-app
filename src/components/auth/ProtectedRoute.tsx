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

    return <div className='flex w-screen h-screen flex-col justify-center items-center'>
        <h3>
            You're not Authenticated.
            Please login to access this page.
        </h3>
        <button className='border bg-blue-600 px-4 py-1 text-white rounded-md' onClick={() => navigate('/login')}>Login</button>
    </div>
}

export default Authenticated


