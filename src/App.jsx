import './app.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
