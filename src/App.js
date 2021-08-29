import './App.css';
import Header from './components/Header';
import Products from './pages/Products';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
