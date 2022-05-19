import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Login from './Pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import SeeToDo from './Pages/SeeToDo';
import Header from './Pages/Header';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Pages/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/SeeToDo' element={<PrivateRoute>
          <SeeToDo></SeeToDo>
        </PrivateRoute>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
