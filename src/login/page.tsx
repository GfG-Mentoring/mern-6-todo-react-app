import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers';
import { apiInstance } from '../apis';
import { loginUserApi } from '../apis/auth';
import { toast } from 'react-toastify';
import { updateAuth } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const LoginPage = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [credentials, setCredentials] = React.useState({
        username: "",
        password: ""
    });


    const handleInputChange = (value: string, key: "username" | "password") => {
        setCredentials({
            ...credentials,
            [key]: value
        });
        console.log(apiInstance)
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(credentials)

        const [data, error] = await loginUserApi(credentials.username, credentials.password);
        if (error) {
            toast.error(error);
        }
        toast.success(data.message);
        dispatch(updateAuth({ authToken: data.data.token }));

        //     setIsAuthenticated(true);
        navigate("/");

    }


    return (
        //   create a login page
        <div className=''>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                }}
                onSubmit={handleLogin}
            >
                <h1>Login Page</h1>
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    style={{
                        marginBottom: "1rem"
                    }}
                    onChange={e => {
                        handleInputChange(e.target.value, "username")
                    }}
                />

                <input style={{
                    marginBottom: "1rem"
                }}
                    type="password"
                    placeholder="Password"
                    onChange={e => {
                        handleInputChange(e.target.value, "password")
                    }}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage 