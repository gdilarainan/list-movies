import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './../assets/styles/MovieDetail.scss';
import { getMovieDetail } from '../services/movieService';
import Back from './../assets/icons/back.svg'
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../redux/movieSlice';
import { MovieDetailResponse } from '../types/IMovie';

interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
    imdbRating: string;
}

export const movieDetail = () => {
    const { imdbID } = useParams<{ imdbID: string }>();  // Get the IMDb ID from the route
    const [movie, setMovie] = useState<Movie | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchMovieDetail = async () => {
        getMovieDetail(imdbID ?? "").then((response: MovieDetailResponse) => {
                setMovie(response);
                dispatch(setMovieDetail(response));
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            })
    };

    useEffect(() => {
        fetchMovieDetail();
    }, [imdbID]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-detail">
            <div className="back-container">
                <button onClick={() => navigate(-1)} className="back-button">
                    <img src={Back} alt="Back" />
                    Back
                </button>
            </div>
            <div className={"movie-detail-container"}>
                <div className={"movie-info-container"}>
                    <img src={movie.Poster} alt={movie.Title}/>
                    <div className="movie-info">
                        <h1>{movie.Title}</h1>
                        <p><strong>Year:</strong> {movie.Year}</p>
                        <p><strong>Rated:</strong> {movie.Rated}</p>
                        <p><strong>Released:</strong> {movie.Released}</p>
                        <p><strong>Runtime:</strong> {movie.Runtime}</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Actors:</strong> {movie.Actors}</p>
                        <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
                        <p><strong>Plot:</strong> {movie.Plot}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export {movieDetail as MovieDetail};