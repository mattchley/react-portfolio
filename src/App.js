import React, { useReducer, useRef, useState, useEffect } from "react";
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";
import API from "./API"
import Home from "./Home"
import Details from "./Details"

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
    <Router>
      <div className="container text-center">
        <div className="navbar">
          this is the navbar
          <NavLink to='/' exact activeStyle={{ fontWeight: "bold", color: "red" }}>GO HOME</NavLink>
          <NavLink to='/details' activeStyle={{ fontWeight: "bold", color: "red" }}>Details</NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={() => <Home searchTerm={searchTerm} results={results} />} />
          {/*<Route path="/" exact component={Home} /> or <Route path="/" exact component= { () => <Home searterm={searchTerm} />} />*/}
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    </Router>
  )

}

export default App