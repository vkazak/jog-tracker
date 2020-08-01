import axios from 'axios';

const serverUrl = 'https://jogtracker.herokuapp.com/api/v1';

export async function loginByUUID(uuid) {
    try {
        const response = await axios.post(serverUrl + '/auth/uuidLogin', { uuid });
        const responseData = response.data.response;
        return (responseData.token_type + " " + responseData.access_token);
    } catch(err) {
        console.log(err);
    }
} 