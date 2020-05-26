import React, {useState, useEffect} from 'react';
import axios from 'axios';

function GoogleSearch(props) {
    const [bookIDs, setBookIDs] = useState(null);
    const [called, setCalled] = useState(false);
    const [books, setBooks] = useState(null);
    const [input, setInput] = useState({
        title: '',
        author: ''
    })
    const key = "AIzaSyDjrVJnFj8tSwVu8u5G7Rbx7089Z2jIsNc";

    useEffect(() => {
        if (bookIDs !== null && !called) {
            setBooks(null);
            updateBooks(bookIDs);
        } else if (books !== null) {
            props.search(books);
            setBookIDs(null);
            setCalled(false);
        }
    }, [bookIDs, books])

    

    //functions
    function buttonClick() { 
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input.title}+inauthor:${input.author}&key=${key}`)
        .then(res => {
            console.log(res);
            setBookIDs(res.data.items);
            setInput({
                ...input,
                title: '',
                author: ''
            })
        });
    }
    
    function handleChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    async function updateBooks(ids) {
        const promises = ids.map(id => {
            return axios
            .get(`https://www.googleapis.com/books/v1/volumes/${id.id}?key=${key}`)
            .then(res => {
                console.log(res);
                const obj = {
                    title: res.data.volumeInfo.title,
                    authors: res.data.volumeInfo.authors,
                    description: res.data.volumeInfo.description,
                    image: res.data.volumeInfo.imageLinks.large,
                    link: res.data.volumeInfo.infoLink,
                    id: id.id
                }
                return obj;
            })
        })
        const books = await Promise.all(promises)
        .then(values => {
            return values;
        });
        setBooks(books.flat());
        setCalled(true);
    }
    
    // render
    return (
        <div>
            <div className="input-group mb-3 d-flex justify-content-center">
                <div className="GoogleSearch-row">
                    <input 
                        type="text" 
                        className="form-control"
                        name="title" 
                        placeholder="Book Title" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        className="form-control"
                        name="author" 
                        placeholder="Book Author" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group-append">
                    <span 
                        className="input-group-text" 
                        id="basic-addon2" 
                        onClick={buttonClick}
                    >
                        Search
                    </span>
                </div>
            </div>
        </div>
    )
}

export default GoogleSearch;