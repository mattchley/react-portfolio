import React, { useReducer, useRef, useState, useEffect } from "react";
import { Link, Router, Route, Switch } from 'react-router-dom'
import "./App.css";
import API from "./API"


const App = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        API.searchTerms('basketball')
            .then(data => setResults(data))
    }, [])

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = e => {
        API.SearchTerm(searchTerm)
            .then(res => setResults(res.data))
    }
    return (
        <div>
            <input onChange={handleChange}>
                <button onClick={handleSearch}>Search</button>
            </input>

            <ul>
                {
                    results.map(r => (
                        <li>{r}</li>
                    ))
                }

            </ul>
        </div>

    )

}

export default App