import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import EmailVerification from './src/screens/EmailVerification';
import UpdateProfile from './src/screens/UpdateProfile';
import ScanCode from './src/screens/ScanCode';
import OrderRequest from './src/screens/OrderRequest';
import PickupRequest from './src/screens/PickupRequest';
import ProductList from './src/screens/ProductList';
import AddProduct from './src/screens/AddProduct';
import Customization from './src/screens/Customization';
import ImageUploading from './src/screens/ImageUploading';
import PickupOrderApprove from './src/screens/PickupOrderApprove';
import OnlineOrderApprove from './src/screens/OnlineOrderApprove';
import OrderHistory from './src/screens/OrderHistory';
import EditProduct from './src/screens/EditProduct';


export default function App() {
  const Stack=createNativeStackNavigator();
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">

         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
         <Stack.Screen name="ScanCode" component={ScanCode} />
         <Stack.Screen name="OrderRequest" component={OrderRequest} />
         <Stack.Screen name="PickupRequest" component={PickupRequest} />
         <Stack.Screen name="ProductList" component={ProductList} />
         <Stack.Screen name="AddProduct" component={AddProduct} />
         <Stack.Screen name="Customization" component={Customization} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="EmailVerifcation" component={EmailVerification} />
         <Stack.Screen name="ImageUploading" component={ImageUploading} />
         <Stack.Screen name="PickupOrderApprove" component={PickupOrderApprove} />
         <Stack.Screen name="OnlineOrderApprove" component={OnlineOrderApprove} />
         <Stack.Screen name="OrderHistory" component={OrderHistory} />
         <Stack.Screen name="EditProduct" component={EditProduct} />
        


       </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
