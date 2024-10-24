
import React, { useEffect, useState } from 'react';
import Table from './../components/Table';
import './../assets/styles/MovieTable.scss';
import { useMovieTable } from './useMovieTable';

export const movieTable= () => {

    const {
        movies,
        totalResults,
        currentPage,
        loading,
        handlePageChange,
        columns,
        filters,
        handleFilterChange
    } = useMovieTable();


    return (
        <div className="movie-table">
            <h1 className={"movie-table-header"}>Movie List</h1>
                <Table
                    movies={movies}
                    totalResults={totalResults}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    columns={columns}
                    loading={loading}
                    filters={filters}
                    onFilterChange={handleFilterChange}
                />
        </div>
    );
};

export {movieTable as MovieTable};