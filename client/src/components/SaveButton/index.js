import React, {useState} from 'react';
import axios from 'axios';

function SaveButton(props) {
    const info = props.info;
    const [saved, setSaved] = useState(false);
    console.log(info);
    function handleClickSave() {
        axios({
            method: 'post',
            url: 'api/post',
            data: info
        });
        setSaved(true);
    }
    return (
        <div>
            {!saved ? <button className="btn btn-success" onClick={handleClickSave}>Save</button> : ""}
        </div>
    )
}

export default SaveButton;