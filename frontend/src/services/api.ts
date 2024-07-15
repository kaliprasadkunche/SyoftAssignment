import axios from 'axios';

interface LoginData {
    user_email: string;
    user_password: string;
}

const API_BASE_URL = 'https://syoft.dev/Api';

export const registerUser = (userData: any) => {
    return axios.post(`${API_BASE_URL}/user_registeration/api/user_registeration`, userData);
};

export const loginUser = (loginData: LoginData) => {
    return axios.post(`${API_BASE_URL}/userlogin/api/userlogin`, loginData);
};

// import axios from 'axios';



// export const loginUser = (data: LoginData) => {
//     return axios.post('https://syoft.dev/Api/userlogin/api/userlogin', data);
// };
