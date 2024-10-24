import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
ReactDOM.render(_jsx(Provider, { store: store, children: _jsx(App, {}) }), document.getElementById('root'));
