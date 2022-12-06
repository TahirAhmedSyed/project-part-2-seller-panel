import {View,Text,StyleSheet,TextInput,Button,TouchableOpacity,Alert,Image,FlatList,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { Constants } from "expo-constants";



const ImageUploading = ({route,navigation}) => {
    const myEmail=route.params.myEmail; 
    const [image,setimage] = useState("");
    let sources="";


	useEffect(async () => {

        if(Platform.OS !=='web')
        {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status !== 'granted')
            {
                alert('Permission Denied');
            }
        }
   },[]);
 
   const PickImage = async () =>{
       let result=await ImagePicker.launchImageLibraryAsync({

           mediaTypes:ImagePicker.MediaTypeOptions.All,
           allowsEditing:true,
           aspect:[4,3],
           quality:1
       });
       console.log(result);
       if(!result.cancelled)
       {
           setimage(result.uri);
          // uploadImage(result.uri);
           
       }
   }
    
   const submit= () =>{
       
      uploadImage(image);
    
    };

  const uploadImage=async(image_uri) =>{
     
      let base_url="https://cucina.com.pk/api/checking2.php?uemail="+myEmail;
      let uploadData=new FormData();
      uploadData.append('submit','ok');
      uploadData.append('file',{type:'image/jpg',uri:image_uri,name:'uploadimage.jpg'});
      
  
      fetch(base_url,{
        method:'POST',
        body:uploadData
      }).then((response) => response.json())
      .then((response) =>
       {
           if(response.status)
           {
               
              navigation.navigate("Home",{myEmail : myEmail});
           }
           else{
            alert(response.message);
           }
       }
      ).catch((error) =>
      {
          alert("Error"+error);
      });

   }

  
 
     return (
        <ScrollView
      
        >
        <View style={styles.mainscreen}>
           
            <View>
            <Text style={styles.mainhaider}>Profile Image Upload</Text>
            </View>

      

       

         <View>
         <Image source={{uri:image}} style={{width:100,height:100,justifyContent:'center',alignItems:'center',marginTop:8}}/>
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#800080",
          },
       ]}
        onPress={() => PickImage()}
       >
           <Text style={styles.buttonstyle2}>Choose Image</Text>
   
         </TouchableOpacity>
        
       
         </View>
        

       
       
   
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#800080",
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Update Image</Text>
   
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
     buttonstyle2:{
        textAlign:"center",
        padding:8,
        color:"white",
        marginTop:8
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
 
 
 export default ImageUploading;