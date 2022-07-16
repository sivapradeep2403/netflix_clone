import React from "react";
import {useEffect,useState} from "react"
import Axios from './axios'
import './row.css'

function Row(props){
 
  const[movies,setMovies]=useState([]);
  const imageBaseURL="https://image.tmdb.org/t/p/original/";

  useEffect(()=>{
    Axios.get(props.request).then(response=>{
     setMovies(response.data.results);
     //console.log(movies)
    })

  },[])


  return(
    <div >
         <h1>{props.title}</h1>
          <div class="row_Posters">
              {movies.map(i=>{
                return(<div>
                            <img src={`${imageBaseURL}${i.poster_path}`} style={{height:"150px"}} class="row_Poster"/>
                      
                      </div>)
              })}
          </div>  
          
    </div>
  )
}export default Row;