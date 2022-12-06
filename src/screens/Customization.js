import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,FlatList,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ColorPicker} from 'react-native-color-picker';
import {Picker} from '@react-native-picker/picker';

const Customization = ({route,navigation}) => {
    const [companySlogan,setcompanySlogan] = useState("");
    const [footerText,setfooterText] = useState("");
    const [headerColor,setheaderColor] = useState("");
    const [footerColor,setfooterColor] = useState("");

    const myEmail=route.params.myEmail; 
    const getUserDate = async () =>{

        try {
            const response = await fetch("https://cucina.com.pk/api/getCustomDetail.php?uemail="+myEmail);
            const MyData=await response.json();
            // setmyUserData(MyData);
            if(companySlogan
                 == "")
            {
              setcompanySlogan(MyData[0].company_slogan);
              setfooterText(MyData[0].footer_text);
              setheaderColor(MyData[0].header_color);
              setfooterColor(MyData[0].footer_color);
           
        }
            console.log(MyData);
    
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect( () => {
      getUserDate();
    }),[];
   
    const submit= () =>{
      var fetchInsertApi="https://cucina.com.pk/api/update_customization.php";
      var headers={
          'Accept':'application/json',
          'Content-Type':'application.json'
      };

      var Data={
          slogan:companySlogan,
          ftext:footerText,
          hcolor:headerColor,
          fcolor:footerColor,
          s_email:myEmail
         
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
  
 
     return (
        <ScrollView
      
        >
        <View style={styles.mainscreen}>
           
            <View>
            <Text style={styles.mainhaider}>Customization</Text>
            </View>

      
            <View>
             <Text style={styles.labels}>Company Slogan</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#800080"
              autoCorrect={false}
              value={companySlogan}
              onChangeText={(actualdata) => setcompanySlogan(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Footer Text</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#800080"
              autoCorrect={false}
              value={footerText}
              onChangeText={(actualdata) => setfooterText(actualdata)}
             />
         </View>

       
   
         <View style={{height:170}}>
             <Text style={styles.labels}>Header Color</Text>
             <ColorPicker
             onColorSelected={color => setheaderColor(color)}
             style={{flex:1}}
             />
             {/* <Picker
        selectedValue={headerColor}
        style={styles.textinput}
        onValueChange={(itemValue, itemIndex) => setheaderColor(itemValue)}
      >
          <Picker.Item label="Purple" value="purple" />
          <Picker.Item label="Yellow" value="yellow" />
        <Picker.Item label="Red" value="red" />
        <Picker.Item label="Blue" value="blue" />
        <Picker.Item label="Black" value="black" />
        
      </Picker> */}
         </View>
         <View style={{height:170}}>
             <Text style={styles.labels}>Footer Color</Text>
             <ColorPicker
             onColorSelected={colors => setfooterColor(colors)}
             style={{flex:1}}
             />
           
         </View>
        

       
       
   
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#800080",
             
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Update Customization</Text>
   
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
         textAlign:"center"
 
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
 
 
 export default Customization;