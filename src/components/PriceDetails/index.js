import Card from '../../components/UI/Card'

const PriceDetails = props => (
  <Card headerleft='Price Details' style={{ maxWidth: 380 }}>
    <div style={{ padding: 20, boxSizing: 'border-box' }}>
      <div className='flexRow sb' style={{ margin: '10px 0' }}>
        <div>Price ({props.totalItem} items)</div>
        <div>{props.totalPrice}</div>
      </div>
      <div className='flexRow sb' style={{ margin: '10px 0' }}>
        <div>Delivery Charges</div>
        <div>FREE</div>
      </div>
      <div className='flexRow sb' style={{ margin: '10px 0' }}>
        <div>Total Amount</div>
        <div>{props.totalPrice}</div>
      </div>
    </div>
  </Card>
)
export default PriceDetails
