import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const AppRouter = () =>{
    return(
        <Router>
         <Routes>
            <Route path='/' Component={LoginPage}/>
            <Route path='dashboard' Component={Dashboard} />
         </Routes>
        </Router>
    )
}

export default AppRouter;