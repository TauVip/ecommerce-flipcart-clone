import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../actions'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import { generatePublicUrl } from '../../urlConfig'
import { BiRupee } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Breed } from '../../components/MaterialUI'
import { Link } from 'react-router-dom'

import './style.css'

const OrderPage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  return (
    <Layout>
      <div style={{ maxWidth: '1160px', margin: '5px auto' }}>
        <Breed
          breed={[
            { name: 'Home', href: '/' },
            { name: 'My Account', href: '/account' },
            { name: 'My Orders', href: '/account/orders' }
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {user.orders.map(order => {
          return order.items.map((item, i) => (
            <Card style={{ display: 'block', margin: '5px 0' }} key={i}>
              <Link
                to={`/order_details/${order._id}`}
                className='orderItemContainer'>
                <div className='orderImgContainer'>
                  <img
                    className='orderImg'
                    src={generatePublicUrl(
                      item.productId.productPictures[0].img
                    )}
                  />
                </div>
                <div className='orderRow'>
                  <div className='orderName'>{item.productId.name}</div>
                  <div className='orderPrice'>
                    <BiRupee />
                    {item.payablePrice}
                  </div>
                  <div>{order.paymentStatus}</div>
                </div>
              </Link>
            </Card>
          ))
        })}
      </div>
    </Layout>
  )
}
export default OrderPage