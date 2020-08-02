import axios from 'axios';

const serverUrl = 'https://jogtracker.herokuapp.com/api/v1';

export async function loginByUUID(uuid) {
    try {
        const response = await axios.post(serverUrl + '/auth/uuidLogin', { uuid });
        const responseData = response.data.response;
        return (responseData.access_token);
    } catch(err) {
        console.log(err);
    } 
} 

export async function getJogsForUser() {
    try {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        };
        const response = await axios.get(serverUrl + '/data/sync', config);
        const jogs = response.data.response.jogs;
        return jogs.slice(0, 100);
    } catch(err) {
        console.log(err);
        return [];
    }
}