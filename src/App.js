import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Routes ,Route } from 'react-router-dom';

import Menubar from "./components/Menubar";
import Home from './components/Home'
import About from './components/About'
import Studentlist from './components/Studentlist';
import CreateEducation from './components/CreateEducation';
import EditStudent from './components/EditStudent';
import Footer from './components/Footer';
import Contact from './components/Contact';
class App extends Component {
  render(){
    return (
      <>
      <Menubar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/student-list' element={<Studentlist />}></Route>
          <Route path='/create-student' element={<CreateEducation />}></Route>
          <Route path='/edit-student/:id' element={<EditStudent />}></Route>
        </Routes>
      </div>
     <Footer />
      </>
    );
  }
 
}

export default App;
