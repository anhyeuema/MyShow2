
const register = (name, email, password) => (
    fetch('http://192.168.0.102:81/api/register.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            name: name, email: email, password: password
        })
    })
    .then(res => res.text())
)

module.exports = register;