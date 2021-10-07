import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//Páginas
import HomePage from './pages/HomePage/homePage';
import LoginPage from './pages/LoginPage/loginPage';
import CartPage from './pages/CartPage/cartPage';

//CSS
import './index.css';

ReactDOM.render(
  <Router>
    <div className="body">

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/"><i className="material-icons">home</i><span
              className="tooltip">Início</span></Link>
          </li>
          <li>
            <Link to="/#loja"><i className="material-icons">store</i><span
              className="tooltip">Loja</span></Link>
          </li>
          <li>
            <Link to="/cart"><i className="material-icons">shopping_cart</i><span
              className="tooltip">Carrinho</span></Link>
          </li>
          <label className='bottom'>
            <li>
              <Link to='/login'><i className='material-icons'>login</i><span
                className='tooltip'>Entrar</span></Link>
            </li>
          </label>
        </ul>
      </nav>
      {/* Fim da Navbar */}

      {/* SPA - Conteúdo referente às rotas */}
      <div className="content">
        <Switch>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/#loja">
            <HomePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      {/* Fim SPA */}

    </div>
  </Router>,
  document.getElementById('root')
);
