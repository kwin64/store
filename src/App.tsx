import axios from 'axios';
import React, {ChangeEvent, useEffect, useState} from 'react';

function App() {

    const [users, setUsers] = useState<Array<any>>([])
    const [newName, setNewName] = useState<string | null>(null)

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
        axios.post('http://localhost:7542/users', {name: newName})
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

    const newValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={newValueHandler}/>
            </div>
            <button onClick={createUser}>user</button>
            <button onClick={deleteUser}>delete</button>
            {users.map(a => <div>{a.name}</div>)}
        </div>
    );
}

export default App;
