import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact/Contact';
import Departments from './pages/Departments/Departments/Departments';
import Home from './pages/Home/Home/Home';
import SingleService from './pages/Home/SingleService/SingleService';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import SignIn from './pages/SignIn/SignIn';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route exact path='/services'>
            <Services></Services>
        </Route>
        <Route path='/services/:serviceId'>
            <SingleService></SingleService>
        </Route>
        <Route path='/departments'>
            <Departments></Departments>
        </Route>
        <Route path='/contact'>
            <Contact></Contact>
        </Route>
        <Route path='/signin'>
            <SignIn></SignIn>
        </Route>
        <Route path='*'>
            <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
