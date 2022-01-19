import React from 'react'
import {incrementByAmount,changeString,insertArr,insertObj,insertPrice} from './store/contactSlice'
import {useSelector,useDispatch} from 'react-redux'
import GooglePayButton from '@google-pay/button-react'
function Pay() {
    const price = useSelector((state) => state.counter.price)
    const dispatch=useDispatch();
    return (
        <div class="card">
  <div class="card-body">
  <div >
           <h1 >Total $ {price}</h1>
           <h1>Tickets</h1>
           <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: price+".00",
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }
  
  }
  onClick={()=>{
      dispatch(insertPrice(0))
  }}
/>
        </div>
  </div>
</div>
        
    )
}

export default Pay
