import React, { Component } from 'react';
import Film from "./Film"



class FilmList extends Component{

    render(){



        const movies = this.props.data.map(movie =>{
            return (
                <Film name= {movie.name} key={movie.id} url={movie.url}></Film>
            )
        })



        return(
            <div className = "film-list">
            {movies}
            </div>   
        )
    }


}

export default FilmList;

