import React, {useEffect,useState} from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = ({route,navigation})=>{

  const [myUserData,setmyUserData] = useState();
  const [myusername,setmyusername] = useState();
  const [myuseremail,setmyuseremail] = useState();
  const [myshopname,setmyshopname] = useState();  
  const myEmail=route.params.myEmail; 
 const getUserDate = async () =>{

    try {
        const response = await fetch("https://cucina.com.pk/api/getSellerDetail.php?uemail="+myEmail);
        const MyData=await response.json();
        setmyUserData(MyData);
        setmyusername(MyData[0].username);
        setmyshopname(MyData[0].shopname);
        setmyuseremail(MyData[0].useremail);
        // console.log(MyData);

    } catch (error) {
        console.log(error);
    }
};

useEffect( () => {
  getUserDate();
}),[];


   return (
    <View style={styles.container}>
        

    <View style={styles.item1}>
      <Image style={styles.imagestyle}  source={require("../../assets/profile.png")} />
      
    </View>

    <View style={styles.item2}>
      <Text>Name  : {myusername}</Text>
      <Text>Email  : {myuseremail}</Text>
      <Text>Shop Name  : {myshopname}</Text>
   
      <View
        style={{
          borderBottomColor: '#800080',
          borderBottomWidth: 2,
        }}
      />
    </View>
     
  
       

    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("ProductList",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/inventory.png")} />
    <Text style={styles.linetext}>Inventory</Text>

    </TouchableOpacity>

    </View>
    
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("Customization",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/custom.png")} />
    <Text style={styles.linetext}>Customization</Text>

    </TouchableOpacity>

    </View>


    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("PickupRequest",{myEmail : `${myEmail}`})} >
    <Image style={styles.lineimage}  source={require("../../assets/pickup.png")} />
    <Text style={styles.linetext}>Pickup Request</Text>

    </TouchableOpacity>
    
    </View>

    <View style={styles.item}>
    <TouchableOpacity style={styles.column1}  onPress={() => navigation.navigate("OrderRequest",{myEmail : `${myEmail}`})} >
    <Image style={styles.lineimage}  source={require("../../assets/order.png")} />
    <Text style={styles.linetext}>Order Request</Text>

    </TouchableOpacity>
    
    </View>

    <View style={styles.item}>
    <TouchableOpacity style={styles.column1}  onPress={() => navigation.navigate("OrderHistory",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/parchment.png")} />
    <Text style={styles.linetext}>Order History</Text>

    </TouchableOpacity>

    </View>
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1}  onPress={() => navigation.navigate("UpdateProfile",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/update.png")} />
    <Text style={styles.linetext}>Update Profile</Text>

    </TouchableOpacity>

    </View>

    <View style={styles.item}>
    <TouchableOpacity style={styles.column1}  onPress={() => navigation.navigate("ScanCode")}>
    <Image style={styles.lineimage}  source={require("../../assets/scan.png")} />
    <Text style={styles.linetext}>Scan QrCode</Text>

    </TouchableOpacity>

    </View>
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("Login")}>
    <Image style={styles.lineimage}  source={require("../../assets/logout.png")} />
    <Text style={styles.linetext}>Logout</Text>

    </TouchableOpacity>

    </View>
     
    
  </View>

   );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
      width: '50%' // is 50% of container width
    },
    item1: {
        width: '23%' // is 50% of container width
      },
    item2: {
        width: '70%', // is 50% of container width
        marginTop:12
      },

      imagestyle:{
          marginTop:10,
          marginStart:10
      }  ,
      column1:{
         alignContent:"center",
         padding:20,
         justifyContent: 'center',
         alignItems: 'center',
      },
      linetext:{
         textAlign:"center",
         fontSize:16

      },
      lineimage:{
        justifyContent: 'center',
        alignItems: 'center',

      },
  });

export default Home;