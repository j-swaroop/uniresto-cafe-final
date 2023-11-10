import Header from '../Header'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-page-container">
      <div className="cart-page-content-container">
        <h1 className="mycart-heading"> My Cart </h1>
        <button type="button" className="remove-all-btn">
          Remove All
        </button>
      </div>
    </div>
  </>
)

export default Cart
