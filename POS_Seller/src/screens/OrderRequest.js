import {View,Text,StyleSheet,TouchableOpacity,Alert,Image,FlatList} from "react-native";
import React,{useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const OrderRequest = ({navigation,route}) => {
  const myEmail=route.params.myEmail; 
  const [productdata,setproductdata] = useState("");
  
  var fetchInsertApi="https://cucina.com.pk/api/fetch_online_request.php?uemail="+myEmail;
      var headers={
          'Accept':'application/json',
          'Content-Type':'application.json'
      };

     
      fetch(fetchInsertApi,
          {
             method:'GET',
             headers:headers, 
          }).then((response) => response.json())
          .then((response) =>
           {
               console.log(response);
               setproductdata(response);
           
           }
          ).catch((error) =>
          {
              alert("Error"+error);
          });
        
        
    const submit= () =>{
       navigation.navigate("Home");
   };

 
     return(
       <View style={styles.mainscreen}>
    

        <View>
            <Text style={{color:"#800080",fontWeight:"bold",fontSize:18,textAlign:"center",}}>Online Order Request Detail....!</Text>
        </View>


  <FlatList 
     keyExtractor={(key) =>{
      return key.detail_id;
          }}
          showsHorizontalScrollIndicator={false}
          data={productdata}
    style={styles.flatstyle}
    renderItem={(element) =>{
    return(
        <View>
          <TouchableOpacity
          onPress={() => navigation.navigate("OnlineOrderApprove",{detail_id : element.item.detail_id,myEmail:myEmail})}>
          
         <Text style={styles.textstyles}>Name : {element.item.user_name}</Text>

         <Text style={styles.textstyles2}>Phone : {element.item.user_phone}</Text>
         <Text style={styles.textstyles2}>Address : {element.item.caddress}</Text>
         <Text style={styles.textstyles2}>Note : {element.item.order_note}</Text>

        <Text style={styles.textstyles}>Product Name : {element.item.product_name}</Text>
        <Text style={styles.textstyles2}>Qty : {element.item.ord_qty} , Price : {element.item.p_price}</Text>
        <Text style={{color:'#800080',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Approve</Text>
        
        </TouchableOpacity>
        <View
       style={{
         borderBottomColor: '#800080',
         borderBottomWidth: 2,
       }}
     />
        </View>
    );

    }}
   
  
  />

     
 {/* <View style={styles.container}>
   <View style={styles.item1}>
     <Image style={styles.imagestyle}  source={require("../../assets/milk.png")} />
     
   </View>

   <View style={styles.items2}>
       
      <Text>afasfassad</Text>
   </View>

   </View> */}
  
        
      
      
      
      
  
      
            
  
       </View>
  
  
     );
  
  };
  const styles = StyleSheet.create({
      
   container: {
       flex: 1,
       flexDirection: 'row',
       flexWrap: 'wrap',
       alignItems: 'flex-start', // if you want to fill rows left to right
     },
     item: {
       width: '50%', // is 50% of container width
     },
     item1: {
         width: '23%', // is 50% of container width
       },
       items2: {
         width: '70%', // is 50% of container width
         marginTop:12
       },
       imagestyle:{
           marginTop:10,
           marginStart:10
       },
       flatstyle:{
              marginTop:10,

       },
   mainscreen:{
  
         padding:20,
         marginTop:25,

  
      },
    
      verifys:{
        marginTop:15,
      },
      mainhaider:{
          fontSize:20,
          marginTop:10,
          fontWeight:"bold",
          color:"#800080",
  
      },
      description:{
          color:"grey",
          marginTop:4,
      },
      labels:{
          color:"grey",
          marginTop:15,
          fontWeight:"bold",
          
      },
      
      buttonstyle:{
          textAlign:"center",
          padding:8,
          color:"white",
      },
      touchopacity:{
          marginTop:15,
          backgroundColor:"#800080",
      },
      registerbutton:{
        color:"#800080",
      
      },
      registerbutton2:{
       marginTop:8,
     },
     touchreg:{
        marginTop:25
     },
     textstyles:{
         marginTop:8
     }
    });

export default OrderRequest;