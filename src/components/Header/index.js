import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = props => {
  const {cartDishes} = props

  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwtToken')

    history.replace('/login')
  }

  return (
    <div className="header-container">
      <div className="header-responsive-container">
        <Link to="/" className="nav-link">
          <h1 className="restaurent-heading"> UNI Resto Cafe </h1>
        </Link>
        <div className="cart-container">
          <p className="cart-heading"> My Orders</p>
          <Link to="/cart" className="nav-link-cart">
            <AiOutlineShoppingCart size={25} />
            <p className="cart-dishes"> 0 </p>
          </Link>
          <button type="button" className="logout-btn" onClick={onClickLogout}>
            {' '}
            Logout{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
