import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { isUserLoggedIn, updateCart } from './actions'
import './App.css'
import CartPage from './containers/CartPage'
import HomePage from './containers/HomePage'
import ProductDetailsPage from './containers/ProductDetailsPage'
import ProductListPage from './containers/ProductListPage'
import CheckoutPage from './containers/CheckoutPage'
import OrderPage from './containers/OrderPage'
import OrderDetailsPage from './containers/OrderDetailsPage'

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) dispatch(isUserLoggedIn())
  }, [auth.authenticate])

  useEffect(() => {
    dispatch(updateCart())
  }, [auth.authenticate])

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='/account/orders' component={OrderPage} />
          <Route path='/order_details/:orderId' component={OrderDetailsPage} />
          <Route
            path='/:productSlug/:productId/p'
            component={ProductDetailsPage}
          />
          <Route path='/:slug' component={ProductListPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
