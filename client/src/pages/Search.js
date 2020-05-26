import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import Google from '../components/GoogleSearch';
import Jumbotron from '../components/Jumbotron';
import Results from '../components/Results';

function Search() {
    const [search, setSearch] = useState(null);
    function handleResults(data) {
        setSearch(data);
    }
    console.log(search);
    return (
        <div>
            <NavBar/>
            <Jumbotron/>
            <Google search={handleResults}/>
            {search !== null ? <Results data={search} search={true}/> : ""}
        </div>
    )
}

export default Search;