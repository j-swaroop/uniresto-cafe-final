import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Cart from './components/Cart'
import LoginPage from './components/LoginPage'
import CartContext from './context/CartContext'
import './App.css'

// write your code here
const App = () => (
  <BrowserRouter>
    <CartContext.Provider>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" component={Cart} />
      </Switch>
    </CartContext.Provider>
  </BrowserRouter>
)

export default App
