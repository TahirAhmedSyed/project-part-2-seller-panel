import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,FlatList} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ProductList = ({route,navigation}) => {
  const myEmail=route.params.myEmail; 
  const [productdata,setproductdata] = useState("");
  var fetchInsertApi="https://cucina.com.pk/api/fetch_product.php?uemail="+myEmail;
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
        

//   const getUserDate = async () =>{

//     try {
//         const response = await fetch("https://cucina.com.pk/api/fetch_product.php?uemail="+myEmail);
//        const MyData=await response.json();
//        setproductdata(await response.json());
//        alert(MyData);
//         // setmyUserData(MyData);
        
//           // setcompanySlogan(MyData[0].company_slogan);
//           // setfooterText(MyData[0].footer_text);
//           // setheaderColor(MyData[0].header_color);
//           // setfooterColor(MyData[0].footer_color);
         
       
    
//         console.log(MyData);

//     } catch (error) {
//         console.log(error);
//     }
// };

// useEffect( () => {
//   getUserDate();
// }),[];

   const items=[
    {
       id:"1",
       image:"https://cdn-icons-png.flaticon.com/512/3528/3528201.png",
       name:"Milk Pack 1 Litre",
       Price:"Rs 180",
       
    },
    {
     id:"2",
     image:"https://cdn-icons.flaticon.com/png/512/628/premium/628166.png?token=exp=1649597496~hmac=980325744d0dd6aee03782e8cee95057",
     name:"Cow Meat 1KG",
     Price:"Rs 780",

     },
    
];

    return (
      <View > 
        <View >
      <Text style={{marginTop:10,fontSize:20,color:"#800080",alignContent:'center',justifyContent:'center',textAlign:'center'}}>Product List</Text>
       
      </View>
      <View >
      
         <TouchableOpacity style={{backgroundColor:"#800080",marginTop:15}} 
          onPress={() => navigation.navigate("AddProduct",{myEmail : `${myEmail}`})}>
             <Text style={{color:"white",textAlign:"center",padding:10}}>+ Add Product</Text>
         </TouchableOpacity>
      
       
      </View>
      
             <FlatList 
              keyExtractor={(key) =>{
         return key.product_id;
             }}
             showsHorizontalScrollIndicator={false}
       
     data={productdata}
     renderItem={(element)=>{
         return (
          <View style={styles.container}> 
        
    
          
          <View style={styles.item1}>
           <Image style={styles.imagestyle}  source={{uri:"https://cucina.com.pk/api/"+element.item.product_image}} />
           
          </View>
          
          <View style={styles.item2}>
          <TouchableOpacity
          onPress={() => navigation.navigate("EditProduct",{product_id : element.item.product_id,myEmail:myEmail})}>
          
           <Text> Product Name  : {element.item.product_name}</Text>
           <Text> Price  : {element.item.product_price}</Text>
           <Text> Available Stock  : {element.item.stock_qty}</Text>
           <Text style={{color:'#800080',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Edit Stock</Text>
    
           
          </TouchableOpacity>
           <View
             style={{
               borderBottomColor: '#800080',
               borderBottomWidth: 2,
             }}
           />
           
          </View>
          
          
          </View>


         );
     }}
     />
       

       
</View>


        
     );    
};



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
        width: '77%', // is 50% of container width
        marginTop:22
      },
      item3: {
        width: '65%', // is 50% of container width
        
      },
      item4: {
        width: '35%', // is 50% of container width
        
      },

      imagestyle:{
          marginTop:10,
          marginStart:10,
          height:70,
          width:70
      },
    
  });


export default ProductList;