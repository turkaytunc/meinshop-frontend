import './app.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/products/:id" component={ProductDetails} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
