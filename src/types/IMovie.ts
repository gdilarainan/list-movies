
export interface MovieResponse {
    Search?: any[];
    totalResults?: string;
    Response?: string;
}

export interface MovieDetailResponse {
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