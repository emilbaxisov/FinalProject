
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer';
import Header from './layouts/header';
import Add from './pages/add';
import Courses from './pages/courses';
import Home from './pages/home';
import Programs from './pages/programs';
import Teachers from './pages/teachers';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
