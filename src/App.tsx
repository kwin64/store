import React from 'react';
import {Header} from './UI/header/Header';
import {PageSlider} from "./UI/PageSlider/PageSlider";
import './App.scss'

function App() {

    //backend
    // const [users, setUsers] = useState<Array<any>>([])
    // const [newName, setNewName] = useState<string | null>(null)
    //
    // let getUser = () => {
    //     axios.get('http://localhost:7542/users')
    //         .then(res =>
    //             setUsers(res.data)
    //         )
    // }
    //
    // useEffect(() => {
    //     getUser()
    // }, [])
    //
    // let createUser = () => {
    //     axios.post('http://localhost:7542/users', {name: newName})
    //         .then(res =>
    //             getUser()
    //         )
    // }
    //
    // let deleteUser = () => {
    //     axios.delete('http://localhost:7542/users')
    //         .then(res =>
    //             getUser()
    //         )
    // }
    //
    // const newValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setNewName(e.currentTarget.value)
    // }

    return (
        <div className='container'>
            <Header/>
            <PageSlider/>
        </div>
    );
}

export default App;
