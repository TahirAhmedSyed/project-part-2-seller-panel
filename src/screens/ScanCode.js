import {View,Text,StyleSheet,TouchableOpacity,Alert,Image,FlatList,Button} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BarCodeScanner } from "expo-barcode-scanner";

import {Picker} from '@react-native-picker/picker';


const ScanCode = ({navigation}) => {
  const [hasPermission,setHasPermission]=useState(null);
  const[scanned,setScanned]=useState(null);
  const[text,setText]=useState(null);

  const AskForCameraPermission = ()=>{
    (async() => {
      const {status}=await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted')
    })()
  }

   useEffect( () => {
     AskForCameraPermission();
   },[]);

   const handleBarCodeScanned=({type,data}) =>{
     setScanned(true);
     setText(data);

   }

   if(hasPermission === null)
   {
     return(
       <View>
         <Text>Rquesting For Camera Permissio0n</Text>
       </View>
     )
   }


   if(hasPermission === false)
   {
     return(
       <View>
         <Text style={{margin:10}}> NO Accerss To Camera</Text>
         <Button title={"allow camera"} onPress={() => AskForCameraPermission()} />
       </View>
     )
   }

   
      return(
        <View style={styles.container}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }} />
        </View>
        <Text style={styles.maintext}>{text}</Text>
      
        {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='#800080' />}
      </View>
      );
   
   
   };

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maintext: {
      fontSize: 16,
      margin: 20,
    },
    barcodebox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30,
      backgroundColor: '#800080'
    }
  });

export default ScanCode;