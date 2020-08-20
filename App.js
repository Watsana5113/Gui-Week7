import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

export default function App(){ 
  return( 
    <View style={styles.container}>
        <Text style={styles.text}>
           Hello world
         </Text>
        <Image style={{width:400,height:200}}
          source={{uri:'https://pirun.ku.ac.th/~b5310300376/%E0%B9%81%E0%B8%A1%E0%B8%A7.files/image003.jpg'}}
        />
    </View>
  )
}
const styles=StyleSheet.create({
 container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
 },
 text:{
   fontSize:20,
   color:'red',
   backgroundColor:'blue',
   padding:20,
 }
})
//export default App;