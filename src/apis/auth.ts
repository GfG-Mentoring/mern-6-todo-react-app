import { isAxiosError } from "axios";
import { apiInstance } from "."


const loginUserApi = async (email: string, password: string) => {
    try {
        const response = await apiInstance.post('/auth/login', {
            email, password
        });
        return [response.data, null];
    } catch (err) {
        if (isAxiosError(err)) {
            return [null, err.response?.data?.message];
        }
        return [null, 'Something went wrong.']
    }

}

export { loginUserApi }