const signIn = (email, password) => (
    fetch('http://192.168.0.101:81/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ 
            email: email, password: password 
        })
    })
    .then(res => res.text())
);
export default signIn;