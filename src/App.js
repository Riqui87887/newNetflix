import React from 'react';
import Row from './Row';
import './App.css';
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
    return (
        <div className="App">
            <Nav/>

            <Banner/>
            <Row title="NETFLIX ORIGINALS1" fetchUrl={requests.fetchNetflixOriginals}
                 isLargeRow
            />
            <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries!" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}
export default App;
