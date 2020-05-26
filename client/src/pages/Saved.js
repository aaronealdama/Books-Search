import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Results from '../components/Results';
import NavBar from '../components/NavBar';

function Saved() {
    const [saved, setSaved] = useState(null);
    useEffect(() => {
        axios.get("api/books")
        .then(res => {
            console.log(res);
            setSaved(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    // functions
    function handleClick(data) {
        setSaved(data);
    }
    console.log(saved);
    //render
    return (
        <div>
            <NavBar/>
            {saved !== null ? <Results data={saved} search={false} delete={handleClick}/> : ""}
        </div>
    )
}

export default Saved;