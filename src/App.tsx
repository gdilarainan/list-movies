import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {MovieTable} from './containers/MovieTable';
import {MovieDetail} from './containers/MovieDetail';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieTable/>} />
                <Route path="/movies/:imdbID" element={<MovieDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
