import './app.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <h1>MeinShop Home</h1>
            </Route>
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
