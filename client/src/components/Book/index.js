import React from 'react';
import SaveButton from '../SaveButton';
import DeleteButton from '../DeleteButton';
import "./index.css";

function Book(props) {
    const info = props.info;

    //functions
    function handleViewClick() {
        const win = window.open(`${info.link}`, '_blank');
        win.focus();
    }

    //render
    return (
        <div className="Book">
            <div className="Book-row">
                <div className="Book-col">
                    <h1>{info.title}</h1>
                    <p>{info.authors}</p>
                </div>
                <div className="Book-btnGroup">
                    <div className="Book-row">
                        <button onClick={handleViewClick} className="btn btn-info">View</button>
                        {props.search ? <SaveButton info={info}/> : <DeleteButton info={info} delete={props.delete}/>}
                    </div>
                </div>
            </div>
            <div className="Book-content">
                <div className="Book-row">
                    <img src={info.image} alt={`${info.title}`} class="Book-img"/>
                    <p className="Book-para">{info.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Book;