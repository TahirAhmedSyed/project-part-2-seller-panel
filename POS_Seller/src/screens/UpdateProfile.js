import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';

const UpdateProfile = ({route,navigation}) => {
    const [agree,setagree]=useState(false);
    const [userName,setuserName] = useState("");
    const [userEmail,setuserEmail] = useState("");
    const [password,setpassword] = useState("");
    const [shopName,setshopName] = useState("");
    const [phoneNo,setphoneNo] = useState("");
    const [shopAddress,setshopAddress] = useState("");
    const [shopType,setshopType] = useState("");
   
    const myEmail=route.params.myEmail; 
    const getUserDate = async () =>{

        try {
            const response = await fetch("https://cucina.com.pk/api/getSellerDetail.php?uemail="+myEmail);
            const MyData=await response.json();
            // setmyUserData(MyData);
            if(userName
                 == "")
            {
            setuserName(MyData[0].username);
            setshopName(MyData[0].shopname);
            setuserEmail(MyData[0].useremail);
            setshopType(MyData[0].shop_type);
            setpassword(MyData[0].s_password);
            setphoneNo(MyData[0].phone_no);
            setshopAddress(MyData[0].shop_address);
        }
            // console.log(MyData);
    
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect( () => {
      getUserDate();
    }),[];
   
    const submit= () =>{
        var fetchInsertApi="https://cucina.com.pk/api/update_seller.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_name:userName,
            s_email:myEmail,
            s_password:password,
            shop_name:shopName,
            phone_no:phoneNo,
            shop_address:shopAddress,
            shop_type:shopType
        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Update")
                 {
                    navigation.navigate("Home",{myEmail : `${myEmail}`});
                 }
                 else{
                  alert('Update UnSuccessfully');
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });


    };
   
      return(
        <ScrollView
      
        >
        <View style={styles.mainscreen}>
           
            <View>
            <Text style={styles.mainhaider}>Update Profile</Text>
            </View>

      
            <View>
             <Text style={styles.labels}>Your Name</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#800080"
              autoCorrect={false}
              value={userName}
              onChangeText={(actualdata) => setuserName(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Shop Name</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#800080"
              autoCorrect={false}
              value={shopName}
              onChangeText={(actualdata) => setshopName(actualdata)}
             />
         </View>

       
   
         <View>
             <Text style={styles.labels}>Your Password</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#800080"
              autoCorrect={false}
              secureTextEntry={true}
              value={password}
              onChangeText={(actualdata) => setpassword(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Phone No</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#800080"
              autoCorrect={false}
              value={phoneNo}
              onChangeText={(actualdata) => setphoneNo(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Shop Address</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#800080"
              autoCorrect={false}
              value={shopAddress}
              onChangeText={(actualdata) => setshopAddress(actualdata)}
             />
         </View>

         <View>
             <Text style={styles.labels}>Update Shop Type</Text>
             <Picker
        selectedValue={shopType}
        style={styles.textinput}
        onValueChange={(itemValue, itemIndex) => setshopType(itemValue)}
      >
          <Picker.Item label="Both" value="Both" />
        <Picker.Item label="Physical" value="Physical" />
        <Picker.Item label="Online" value="Online" />
        
      </Picker>

               
         </View>


       
       
   
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#800080",
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Update Profile</Text>
   
         </TouchableOpacity>
             
   
        </View>

        </ScrollView>
   
   
      );
   
   };
   const styles = StyleSheet.create({
       
      
    mainscreen:{
   
          padding:20,
          marginTop:15,

   
       },
       imagestyle:{
        flexDirection: 'row', justifyContent: 'space-between'
       },
       container: {
         flex: 1,
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center',
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
           fontWeight:"bold"
       },
       textinput:{
           borderWidth:1,
           borderColor:"grey",
           paddingHorizontal:15,
           paddingVertical:7,
           borderRadius:1,
           fontSize:18,
       },
       checkboxstyle:{
           marginTop:15,
   
       },
       checkboxtext:{
           marginLeft:30,
           marginTop:-20,
       },
       buttonstyle:{
           textAlign:"center",
           padding:8,
           color:"white",
       },
       touchopacity:{
           marginTop:15,
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
     });
   
   
   export default UpdateProfile;