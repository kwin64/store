import axios from 'axios';
import React, {useEffect, useState} from 'react';

function App() {

    const [users, setUsers] = useState<Array<any>>([])

    let getUser = () => {
        axios.get('http://localhost:7542/users')
            .then(res =>
                setUsers(res.data)
            )
    }

    useEffect(() => {
        getUser()
    }, [])

    let createUser = () => {
        axios.post('http://localhost:7542/users')
            .then(res =>
                getUser()
            )
    }
    let deleteUser = () => {
        axios.delete('http://localhost:7542/users')
            .then(res =>
                getUser()
            )
    }

    console.log(users)

    return (
        <div>
            <button onClick={createUser}>user</button>
            <button onClick={deleteUser}>delete</button>
            {users.map(a => <div>{a.name}</div>)}
        </div>
    );
}

export default App;
