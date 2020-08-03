import axios from 'axios';

const serverUrl = 'https://jogtracker.herokuapp.com/api/v1';
const getConfigForAuthoizedUser = () => {
    return ({
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    })
}
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
        const config = getConfigForAuthoizedUser();
        const response = await axios.get(serverUrl + '/data/sync', config);
        const jogs = response.data.response.jogs;
        const sortFn = (jog1, jog2) => jog2.id - jog1.id;
        return jogs.sort(sortFn).slice(0, 100);
    } catch(err) {
        console.log(err);
        return [];
    }
}

export async function createJog({ time, distance, date }) {
    try {
        const config = getConfigForAuthoizedUser();
        const data = { distance, time, date };
        const response = await axios.post(serverUrl + '/data/jog', data, config);
        return response.data.response;
    } catch(err) {
        console.log(err);
    }
}