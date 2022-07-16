import React from 'react';
import {useState,useEffect} from'react';
import Axios from './axios';
import Request from './requests';


function Banner(){

const imageBaseURL="https://image.tmdb.org/t/p/original/";
const[movie,setMovie]=useState([]);

useEffect(()=>{
 Axios.get(Request.fetchTrending).then(response=>{
     const arr= response.data.results[Math.floor(Math.random()*response.data.results.length-1)];
     setMovie(arr);
     console.log(movie.backdrop_path)
    
 })
   
},[])

   const btn_Styles={
       color:"white",
       cursor:"pointer",
       outline:"none",
       border:"none",
       fontWeight:"600",
       borderRadius:"0.2vw",
       paddingLeft:"2rem",
       backgroundColor:"rgba(51,51,51,0.5)",
       height:"20px",
       paddingLeft:"30px",
       fontSize:"30px"
   }


    return(
        <div style={{color:"white",marginLeft:'30px',marginTop:"0px"}}>
             <header style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                             backgroundSize:"cover",
                             backgroundPosition:"top",
                             backgroundRepeat:'no-repeat',
                             height:'550px',
                             paddingTop:"0px",
                             width:"100%",
                             paddingLeft:"10px"
                             }}>

           
             <h1 style={{fontSize:"3rem",paddingBottom:'0.3rem',fontWeight:"800",paddingTop:"150px"}} >{movie?.title||movie?.original_name||movie?.name}</h1>
                 

                <div stye={{display:"flex"}}>
                    <button  style={btn_Styles}>PLAY</button>
                    <button  style={btn_Styles}>MY LIST</button>
                </div>

                <h1 style={{width:"45rem",lineHeight:"1.3",fontSize:"1.3rem",height:"80px",paddingTop:"70px"}}>{movie?.overview}</h1>

              <div style={{height:"7.5 rem",
                           backgroundImage:"linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)"    }}>

              </div>

             </header>        

        </div>
    )
}export default Banner;