import getToken from './getToken';
import saveToken from './saveToken';

const getNewToken = (token) => (
    fetch('http://192.168.0.102:81/refresh_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'applycation/json',
            'Accept': 'applyction/json'
        },
        body: JSON.stringify({ token: token })
    })
        .then(res => res.json())
);

const refreshToken = async () => {
    try {
        const token = await getToken();
        if (token === '' || token === 'TOKEN_KHONG_HOP_LE') {
            console.log('KHONG_CO_TOKEN');
        } else {
            const newToken = await getNewToken(token);
            saveToken(newToken);
        }
    } catch (e) {
        console.log(e);
    }
};

module.exports = refreshToken;