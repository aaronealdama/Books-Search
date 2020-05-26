import React, {useState} from 'react';
import axios from 'axios';

function DeleteButton(props) {
    const info = props.info;
    const [clicked, setClicked] = useState(false);

    // functions
    function handleClickDelete() {
        axios({
            method: 'delete',
            url: `api/books/${info.id}`
        })
        .then(res => props.delete(res.data));
        setClicked(true);
    }

    // render
    return (
        <div>
            {!clicked ? <button className="btn btn-danger" onClick={handleClickDelete}>Delete</button> : ""}
        </div>
    )
}

export default DeleteButton;