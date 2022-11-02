import logo from './logo.svg';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MyComponent from './example/MyComponent';
import ListTodo from './todoApp/ListTodo';
import Nav from './navigation/Nav';
import Home from './example/Home';
import ListUser from './users/ListUser';
import DetailUser from './users/DetailUser';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/todo" element={<ListTodo />} />
            <Route exact path="/about" element={<MyComponent />} />
            <Route exact path="/user" element={<ListUser />} />
            <Route exact path="/user/:id" element={<DetailUser />} />
          </Routes>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
