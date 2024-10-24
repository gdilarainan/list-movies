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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './../assets/styles/MovieDetail.scss';
import { getMovieDetail } from '../services/movieService';
import Back from './../assets/icons/back.svg';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../redux/movieSlice';
export var movieDetail = function () {
    var imdbID = useParams().imdbID; // Get the IMDb ID from the route
    var _a = useState(null), movie = _a[0], setMovie = _a[1];
    var navigate = useNavigate();
    var dispatch = useDispatch();
    var fetchMovieDetail = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            getMovieDetail(imdbID !== null && imdbID !== void 0 ? imdbID : "").then(function (response) {
                setMovie(response);
                dispatch(setMovieDetail(response));
            })
                .catch(function (error) {
                console.error('Error fetching movie details:', error);
            });
            return [2 /*return*/];
        });
    }); };
    useEffect(function () {
        fetchMovieDetail();
    }, [imdbID]);
    if (!movie)
        return _jsx("div", { children: "Loading..." });
    return (_jsxs("div", { className: "movie-detail", children: [_jsx("div", { className: "back-container", children: _jsxs("button", { onClick: function () { return navigate(-1); }, className: "back-button", children: [_jsx("img", { src: Back, alt: "Back" }), "Back"] }) }), _jsx("div", { className: "movie-detail-container", children: _jsxs("div", { className: "movie-info-container", children: [_jsx("img", { src: movie.Poster, alt: movie.Title }), _jsxs("div", { className: "movie-info", children: [_jsx("h1", { children: movie.Title }), _jsxs("p", { children: [_jsx("strong", { children: "Year:" }), " ", movie.Year] }), _jsxs("p", { children: [_jsx("strong", { children: "Rated:" }), " ", movie.Rated] }), _jsxs("p", { children: [_jsx("strong", { children: "Released:" }), " ", movie.Released] }), _jsxs("p", { children: [_jsx("strong", { children: "Runtime:" }), " ", movie.Runtime] }), _jsxs("p", { children: [_jsx("strong", { children: "Genre:" }), " ", movie.Genre] }), _jsxs("p", { children: [_jsx("strong", { children: "Director:" }), " ", movie.Director] }), _jsxs("p", { children: [_jsx("strong", { children: "Actors:" }), " ", movie.Actors] }), _jsxs("p", { children: [_jsx("strong", { children: "IMDb Rating:" }), " ", movie.imdbRating] }), _jsxs("p", { children: [_jsx("strong", { children: "Plot:" }), " ", movie.Plot] })] })] }) })] }));
};
export { movieDetail as MovieDetail };
