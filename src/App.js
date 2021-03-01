import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar"
function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
    <Row title="NETFLIX ORIGINALS" 
     fetchURL= {requests.fetchNetflixOriginals}
     isLargeRow
     />
    <Row title="Trending Now" fetchURL= {requests.fetchtrending} />
    <Row title="Top Rated" fetchURL= {requests.fetchTopRated} />
    <Row title="Action Movies" fetchURL= {requests.fetchActionMOvies} />
    <Row title="Comedy Movies" fetchURL= {requests.fetchComedyMOvies} />
    <Row title="Horror Movies" fetchURL= {requests.fetchHorrorMOvies} />
    <Row title="Romantic Movies" fetchURL= {requests.fetchRomanceMOvies} />
    <Row title="Documentaries Movies" fetchURL= {requests.fetchDocumentaries} />
    
    </div>
  );
}

export default App;
