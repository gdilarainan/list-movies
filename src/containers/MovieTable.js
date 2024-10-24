import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from './../components/Table';
import './../assets/styles/MovieTable.scss';
import { useMovieTable } from './useMovieTable';
export var movieTable = function () {
    var _a = useMovieTable(), movies = _a.movies, totalResults = _a.totalResults, currentPage = _a.currentPage, loading = _a.loading, handlePageChange = _a.handlePageChange, columns = _a.columns, filters = _a.filters, handleFilterChange = _a.handleFilterChange;
    return (_jsxs("div", { className: "movie-table", children: [_jsx("h1", { className: "movie-table-header", children: "Movie List" }), _jsx(Table, { movies: movies, totalResults: totalResults, currentPage: currentPage, onPageChange: handlePageChange, columns: columns, loading: loading, filters: filters, onFilterChange: handleFilterChange })] }));
};
export { movieTable as MovieTable };
