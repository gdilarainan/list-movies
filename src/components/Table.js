import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DataGrid } from '@mui/x-data-grid';
import './../assets/styles/global.scss';
var Table = function (_a) {
    var movies = _a.movies, totalResults = _a.totalResults, currentPage = _a.currentPage, onPageChange = _a.onPageChange, columns = _a.columns, loading = _a.loading, onFilterChange = _a.onFilterChange, filters = _a.filters;
    var handleFilterChange = function (field, value) {
        onFilterChange(field, value);
        var column = columns.find(function (col) { return col.field === field; });
        if (column && column.filter) {
            column.filter(value); // Call the column's filter function
        }
    };
    var handlePaginationModelChange = function (paginationModel) {
        var page = paginationModel.page;
        onPageChange({ page: page }); // Trigger the onPageChange to update the current page
    };
    return (_jsxs("div", { className: "movie-table", children: [_jsx("div", { className: "search-section", children: columns.map(function (col) {
                    return col.filter ? (_jsx("input", { type: 'text', value: filters[col.field.toLowerCase()] || '', onChange: function (e) {
                            handleFilterChange(col.field, e.target.value);
                            console.log(e.target.value);
                        }, placeholder: "Filter by ".concat(col.headerName) }, col.field)) : null;
                }) }), _jsx("div", { children: _jsx(DataGrid, { rows: movies, columns: columns, paginationMode: "server", paginationModel: { pageSize: 10, page: currentPage - 1 }, rowCount: totalResults, onPaginationModelChange: handlePaginationModelChange, getRowId: function (row) { return row.imdbID; }, autoHeight: true, loading: loading, className: "custom-datagrid" }) })] }));
};
export default Table;
