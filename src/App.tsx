import axios from 'axios';
import React, {useEffect, useState} from 'react';

function App() {

    const [state, setState] = useState<Array<any>>([])

    useEffect(() => {
        axios.get('http://localhost:7542/users')
            .then(res =>
                setState(res.data)
            )
    }, [])

    return (
        <div>
            {state.map(a => <div>{a.name}</div>)}
        </div>
    );
}

export default App;
