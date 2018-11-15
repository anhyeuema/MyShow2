

const checkToken = (token) => (
    fetch('http://192.168.0.101:81/api/check_login', {
        method: 'POST',
        headers: {
            'Content-Type': 'applycation/json',
            'Accept': 'applyction/json'
        },
        body: JSON.stringify({ token: token })
    })
    .then(res => res.json())
)

module.exports = checkToken;