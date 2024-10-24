var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import { useNavigate } from 'react-router-dom';
export var useMovieTable = function () {
    var _a = useState([]), movies = _a[0], setMovies = _a[1];
    var _b = useState(0), totalResults = _b[0], setTotalResults = _b[1];
    var _c = useState(1), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    var navigate = useNavigate();
    var _e = useState({
        title: 'Pokemon',
        year: undefined,
        type: undefined,
    }), filters = _e[0], setFilters = _e[1];
    var handleFilterChange = function (field, value) {
        setFilters(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[field] = value || undefined, _a)));
        });
        setCurrentPage(1);
    };
    var fetchMovies = function () { return __awaiter(void 0, void 0, void 0, function () {
        var title, year, type;
        return __generator(this, function (_a) {
            setLoading(true);
            title = filters.title, year = filters.year, type = filters.type;
            getMovies({ currentPage: currentPage, title: title, year: year, type: type }).then(function (response) {
                setMovies(response.Search || []);
                setTotalResults(parseInt(response.totalResults || '0', 10));
            })
                .catch(function (error) {
                console.error('Error fetching movies:', error);
            })
                .finally(function () {
                setLoading(false);
            });
            return [2 /*return*/];
        });
    }); };
    useEffect(function () {
        fetchMovies();
    }, [filters, currentPage]);
    var columns = [
        {
            field: 'Title',
            headerName: 'Name',
            flex: 1,
            filter: function (value) { return handleFilterChange('title', value); },
        },
        {
            field: 'Year',
            headerName: 'Release Date',
            flex: 1,
            filter: function (value) { return handleFilterChange('year', value); },
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
            filter: function (value) { return handleFilterChange('type', value); },
        },
    ];
    var updatedColumns = columns.map(function (column) {
        if (column.field === 'Title') {
            return __assign(__assign({}, column), { renderCell: function (params) { return (_jsx("span", { className: "movie-table-column-name", onClick: function () { return navigate("/movies/".concat(params.row.imdbID)); }, children: params.value })); } });
        }
        return column;
    });
    var handlePageChange = function (params) {
        setCurrentPage(params.page + 1);
    };
    return {
        movies: movies,
        totalResults: totalResults,
        currentPage: currentPage,
        loading: loading,
        handlePageChange: handlePageChange,
        columns: updatedColumns,
        filters: filters,
        handleFilterChange: handleFilterChange
    };
};
