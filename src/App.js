import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieTable } from './containers/MovieTable';
import { MovieDetail } from './containers/MovieDetail';
var App = function () {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(MovieTable, {}) }), _jsx(Route, { path: "/movies/:imdbID", element: _jsx(MovieDetail, {}) })] }) }));
};
export default App;
