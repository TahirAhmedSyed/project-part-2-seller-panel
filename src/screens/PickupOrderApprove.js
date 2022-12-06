import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import {Picker} from '@react-native-picker/picker';

const PickupOrderApprove = ({route,navigation})=>{
    const myEmail=route.params.myEmail; 
    const detail_id=route.params.detail_id; 
    const getUserDate = async () =>{
        
        var fetchInsertApi="https://cucina.com.pk/api/pickup_order_approval.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            detail_id:detail_id,
            
        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Order Approved")
                 {
              
                    navigation.navigate("PickupRequest",{myEmail : `${myEmail}`});
                 }
                 else{
                  alert('Order Can Not be Approved Please Go Back & Try Again');
                 }
             }
            ).catch((error) =>
            {
                console.log(error);
                alert("Error"+error);
            });

       
    };
    
    useEffect( () => {
      getUserDate();
    }),[];

    




    return(
        <View style={{marginTop:150}}>
          <Text style={{textAlign:'center',color:'#800080',fontSize:20,fontWeight:'bold'}}>Order Approval Process  {'\n'}  Please Wait.....</Text>
        </View>
    );
}

export default PickupOrderApprove;