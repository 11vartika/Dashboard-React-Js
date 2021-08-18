import './App.css';
import  Topbar from './components/Topbar/index';
import Sidebar from './components/Sidebar/index';
import Home from './pages/Home';
import Footer from './components/Footer/index';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import Formtable from './pages/FormTable';
import Error from './pages/Error';                  
import Profile from './pages/Profile';
import {  BrowserRouter as Router,  Route, Switch } from "react-router-dom";

/*import Login from './pages/Login';*/

function App() {
  return (
    <Router>      
            
            <div className="container">
<Topbar/>
<Sidebar/>     
  <Switch>
  <Route  path='/dashboard' >
    <Home/>
  </Route>      
  <Route path='/post'>
    <Post/>
  </Route>
  <Route path='/newpost'>
    <NewPost/>
  </Route>  
  <Route path='/table'>
    <Formtable/>
  </Route>  
  <Route path='/error'>
    <Error/>
  </Route>               
  <Route path='/profile'>
    <Profile/>
  </Route>            
  </Switch>    
</div>
<Footer />
    </Router>
  );
}
export default App;
