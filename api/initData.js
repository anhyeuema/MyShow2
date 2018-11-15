const initData = () => (
    fetch('http://192.168.0.101:81/api/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 

        })
    })
    .then(res => res.json())
);
module.exports = initData;