import React from "react";
import Row from './Row'
import Request from './requests'
import './row.css'
import Banner from './Banner'
import NavBar from './NavBar'

function App(){

  return(
    <div style={{backgroundColor:"#111",color:"white"}}>
         <NavBar style={{position:"static"}}/>
         <Banner style={{paddingTop:"0px"}}/>
         <Row title="NETFLIX TRENDING" request={Request.fetchTrending} class="row1"/>
         <Row title="NETFLIX ORIGINALS" request={Request.fetchNetflixOriginals}/>
         <Row title="NETFLIX TOP RATED" request={Request.fetchTopRated}/>
         <Row title="ACTION MOVIES" request={Request.fetchActionMovies}/>
         <Row title="NETFLIX COMEDY MOVIES" request={Request.fetchComedyMovies}/>
         <Row title="NETFLIX HORROR MOVIES" request={Request.fetchHorrorMovies}/>
         <Row title="NETFLIX ROMANTIC MOVIES" request={Request.fetchRomanceMovies}/>
         <Row title="NETFLIX DOCUMENTARIES" request={Request.fetchDocumantaries}/>


    </div>
  )
}export default App;