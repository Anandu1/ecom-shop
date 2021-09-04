
import './App.css';
import Form from './Components/Form/Form';
import ProductPage from './Components/ProductPage/ProductPage';
import {BrowserRouter as Router ,Switch,Link,Route} from 'react-router-dom'
import AdminLogin from './Components/AdminLogin/AdminLogin';
import SignUpPage from './Components/AdminLogin/SignUpPage';
import Header from './Components/Header/Header';
import ProductDetailsPage from './Components/ProductDetailsPage/ProductDetailsPage';
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
        <Switch>
        <Route exact path="/" component={AdminLogin}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/login" component={AdminLogin}/>
          <Route path="/addProduct" component={Form}/>
          <Route exact path="/products" component={ProductPage}/>
          <Route exact path="/products/:id" component={ProductDetailsPage}/>
        </Switch>
    </div>
  );
}

export default App;
