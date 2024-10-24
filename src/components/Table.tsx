import React, {  useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './../assets/styles/global.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type FilterableGridColDef = GridColDef & {
    filter?: (value: string) => void;
};

interface TableProps {
    movies: any[];
    totalResults: number;
    currentPage: number;
    onPageChange: (params: any) => void;
    columns: FilterableGridColDef[];
    loading: boolean;
    filters: { [key: string]: string | undefined };
    onFilterChange: (field: string, value: string) => void;
}

const Table: React.FC<TableProps> = ({
                                         movies,
                                         totalResults,
                                         currentPage,
                                         onPageChange,
                                         columns,
                                         loading,
                                         onFilterChange,
                                         filters
                                     }) => {


    const handleFilterChange = (field: string, value: string) => {
        onFilterChange(field, value);

        const column = columns.find((col) => col.field === field);
        if (column && column.filter) {
            column.filter(value);  // Call the column's filter function
        }
    };

    const handlePaginationModelChange = (paginationModel: any) => {
        const { page } = paginationModel;
        onPageChange({ page }); // Trigger the onPageChange to update the current page
    };

    return (

        <div className="movie-table">
            <div className="search-section">
                {columns.map((col) =>
                    col.filter ? (
                        <input
                            key={col.field}
                            type={'text'}
                            value={filters[col.field.toLowerCase()] || ''}
                            onChange={(e) => {
                                handleFilterChange(col.field, e.target.value)
                                console.log(e.target.value)
                            }}
                            placeholder={`Filter by ${col.headerName}`}
                        />
                    ) : null
                )}
            </div>

            <div >
                <DataGrid
                    rows={movies}
                    columns={columns}
                    paginationMode="server"
                    paginationModel={{ pageSize: 10, page: currentPage - 1 }}
                    rowCount={totalResults}
                    onPaginationModelChange={handlePaginationModelChange}
                    getRowId={(row) => row.imdbID}
                    autoHeight
                    loading={loading}
                    className="custom-datagrid"
                />
            </div>
        </div>
    );
};

export default Table;
