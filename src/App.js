import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/User/Login';
import Registration from './pages/User/Registration';
import Hotels from './pages/Hotels/Hotels';
import error from './pages/NotFound/error';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddCart from './pages/AddCart/AddCart';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import AddHotel from './pages/Admin/AddHotel/AddHotel';
import ManageOrder from './pages/Admin/ManageOrder/ManageOrder';
import Manage from './pages/Admin/Manage/Manage';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/hotels'>
            <Hotels></Hotels>
            </Route>
            <PrivateRoute path='/addcart/:_id'>
              <AddCart></AddCart>
            </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path='/registration'>
            <Registration></Registration>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/add-hotel'>
              <AddHotel></AddHotel>
            </Route>
            <Route path='/order'>
              <ManageOrder></ManageOrder>
            </Route>
            <Route path='/manage'>
              <Manage></Manage>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
          <Route exact path='*'>
            <error></error>
          </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
