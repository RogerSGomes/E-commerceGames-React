import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

//Páginas
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Cart from './pages/Cart/index';

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
            <HashLink smooth to="/#store"><i className="material-icons">store</i><span
              className="tooltip">Loja</span></HashLink>
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
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      {/* Fim SPA */}

    </div>
  </Router>,
  document.getElementById('root')
);
