import './app.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <h1>MeinShop</h1>
          </Route>
          <Route path="/cart" />
          <Route path="/login" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
