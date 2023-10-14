
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import './App.css';
import ReactLearningTopics from './ReactLearningTopics';
import Home from './ReactRouter6.0/Home';
import About from './ReactRouter6.0/About';
import Page404 from './ReactRouter6.0/Page404';
import Contact from './ReactRouter6.0/Contact';
import Params from './ReactRouter6.0/Param';
import FormData from './ReactLearningTopics/FormData';
import Login from './ReactLearningTopics/BasicFormValidation';
import LOGIN from './ReactRouter6.0/Login';
import Protected from './ReactRouter6.0/Protected';
import API from './ReactRouter6.0/API';
import Navbarr from './Navbar';

function App ()
{
  return <div className='App'>
    <BrowserRouter>
      <Navbarr />
      <Routes>
        <Route path='/reactLearningTopics' element={ <Protected Components={ ReactLearningTopics } /> } />
        
        <Route path='/home' element={ <Protected Components={ Home } /> } />
        

        <Route path='/about' element={ <Protected Components={ About} />} />
        {/* <Route path='/*' element={ <Page404/>} /> */}
        <Route path='/*' element={ <Navigate to='/'/>} />
        <Route path='/param/:name' element={ <Params /> } />
        <Route path='/contact' element={ <Contact/>}>
          <Route path='/contact/ReactLearningTopics/BasicFormValidation' element={ <Login /> } />
          
          <Route path='/contact/ReactLearningTopics/FormData' element={ <FormData/>} />
        </Route>
        <Route path='/login' element={ <LOGIN /> } />
        <Route path='/api' element={ <API/>} />
        
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
