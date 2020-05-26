import React from 'react';
import Book from '../Book';


function Results(props) {
    return (
        <div>
            <h1 className="text-center">Results</h1>
            {props.data ? props.data.map(result => {
                return <Book info={result} search={props.search} delete={props.delete}/>
            }) : ''}
        </div>
    )
}

export default Results;