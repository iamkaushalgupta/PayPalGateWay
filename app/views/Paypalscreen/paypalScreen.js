import PayPal from 'react-native-paypal-gateway';
import React from 'react'; 
import { SafeAreaView,Text, TouchableOpacity   } from 'react-native';


const PayPalScreen=()=>{
PayPal.initialize(PayPal.NO_NETWORK, "Afm7WaK0k7xHyd7nJ491Enj3JEROeNnF4R_K7TwGj1ZlTw0_fN70zQlpclpj6a7UWUaE52QZuatH-hoq");

const Payment = ()=>{
  PayPal.pay({
    price: '40.70',
    currency: 'USD',
    description: 'Your description goes here',
  }).then(confirm => console.log(confirm))
    .catch(error => console.log(error));
  
}
return(

<SafeAreaView>
  <TouchableOpacity onPress={()=>Payment()}>
  <Text>Hello</Text></TouchableOpacity>
  </SafeAreaView>

  )

}


export default PayPalScreen;