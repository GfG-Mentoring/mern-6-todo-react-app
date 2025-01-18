import { isAxiosError } from "axios";
import { apiInstance } from ".";


const getTodosApi = async (limit = 10, page = 1) => {
    try {
        const response = await apiInstance.get(`/todo?limit=${limit}&page=${page}`, {
            headers: {
                'Authorization': localStorage.getItem('auth')
            }
        });

        return [response.data.data, null];

    } catch (err) {
        if (isAxiosError(err)) {
            return [null, err.response?.data?.message];
        }
        return [null, 'Something went wrong.']
    }
}

export { getTodosApi }