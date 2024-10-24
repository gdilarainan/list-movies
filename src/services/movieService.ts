import axios from 'axios';
import {MovieDetailResponse, MovieResponse } from '../types/IMovie';


interface SearchParams {
    title?: string;
    year?: string;
    type?: string;
    currentPage: number;
    id?:string;
}

export const getMovies = async (params: SearchParams) => {
   const { currentPage} = params;

    return  axios.get<MovieResponse>('https://www.omdbapi.com/', {
            params: {
                s:params?.title,
                t:params.type,
                page:currentPage,
                apikey: 'd6498356',
                y:params?.year,
                i:params?.id
            },
        }).then(resp =>resp.data);

}

export const getMovieDetail = async ( imdbID: string ) => {
    return  axios.get<MovieDetailResponse>( `https://www.omdbapi.com/?i=${imdbID}&apikey=d6498356`)
        .then(resp => resp.data);
}