import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import { useNavigate } from 'react-router-dom';
import { MovieResponse } from '../types/IMovie';

interface Movie {
    imdbID: string;
    title: string;
    year: string;
    Type: string;
}

export const useMovieTable = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const [filters, setFilters] = useState<{ [key: string]: string | undefined }>({
        title: 'Pokemon',
        year: undefined,
        type: undefined,
    });

    const handleFilterChange = (field: string, value: string) => {
        setFilters((prev) => (
            { ...prev, [field]: value || undefined }));
        setCurrentPage(1);
    };

    const fetchMovies = async () => {
        setLoading(true);
        const { title, year, type } = filters;

        getMovies({currentPage, title, year,type}).then((response: MovieResponse) => {
                setMovies(response.Search || []);
                setTotalResults(parseInt(response.totalResults || '0', 10));
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchMovies();
    }, [filters, currentPage]);


    const columns = [
        {
            field: 'Title',
            headerName: 'Name',
            flex: 1,
            filter: (value: string) => handleFilterChange('title', value),
        },
        {
            field: 'Year',
            headerName: 'Release Date',
            flex: 1,
            filter: (value: string) => handleFilterChange('year', value),
        },
        {
            field: 'imdbID',
            headerName: 'IMDb ID',
            flex: 1,
        },
        {
            field: 'Type',
            headerName: 'Type',
            flex: 1,
            filter: (value: string) => handleFilterChange('type', value),
        },
    ];

    const updatedColumns = columns.map((column) => {
        if (column.field === 'Title') {
            return {
                ...column,
                renderCell: (params: any) => (
                    <span
                        className={"movie-table-column-name"}
            onClick={() => navigate(`/movies/${params.row.imdbID}`)}
        >
            {params.value}
            </span>
        ),
        };
        }
        return column;
    });

    const handlePageChange = (params: any) => {
        setCurrentPage(params.page + 1);
    };

    return {
        movies,
        totalResults,
        currentPage,
        loading,
        handlePageChange,
        columns: updatedColumns,
        filters,
        handleFilterChange
    };
};
