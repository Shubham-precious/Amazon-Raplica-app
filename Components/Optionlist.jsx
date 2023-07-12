import React from 'react'
import { ScrollView, View , Text, Image} from 'react-native'


export default function Optionlist() {
  return (
  
    <View
     style={{
        height:180,
        width:"100%",
        padding:5,
      
     }}
    
    
    >

    

    <ScrollView 
       style={{
        flexDirection:"row",
        direction:"ltr",
        
         
        padding:5,
   
        
        
       }}
      
      
     horizontal
    >

       <View 
         style={{
           width:150,
           height:"100%",
           backgroundColor:"#fff",
           position:"absolute",
           justifyContent:"space-evenly",
           flexDirection:"row",
           flexWrap:"wrap",
           alignItems:"center",
           padding:15,
           gap:10,
           borderRadius:10
         }}
      >
         {/* <Image source={require("../Imagesfolder/primeoffer.jpg")}
            style={{
                width:"100%",
                height:"100%"
             }}
         
         
         /> */}


         <View 
           style={{
            width:50,height:60
           }}
         
         
            >
             <Image source={require("../Imagesfolder/payicon.png")}
              style={{width:"100%",height:30,
              resizeMode:"contain"
            
            }}
             
             />
              
             <Text style={{fontSize:8,fontWeight:"bold"}}>Amazon Pay</Text>
         </View>



         <View 
           style={{
            width:50,height:60
           }}
         
         
            >
             <Image source={require("../Imagesfolder/sendmoney.png")}
              style={{width:"100%",height:30,
              resizeMode:"contain"
            
            }}
             
             />
              
             <Text style={{fontSize:8,fontWeight:"bold"}}>Send Money</Text>
         </View>


         <View 
           style={{
            width:50,height:90
           }}
         
         
            >
             <Image source={require("../Imagesfolder/scanqr.png")}
              style={{width:"100%",height:30,
              resizeMode:"contain",marginLeft:-10
            
            }}
             
             />
              
             <Text style={{fontSize:8,fontWeight:"bold"}}>Scan QR</Text>
         </View>


         <View 
           style={{
            width:50,height:90
           }}
         
         
            >
             <Image source={require("../Imagesfolder/paybills.jpg")}
              style={{width:"100%",height:30,
              resizeMode:"contain",marginLeft:-10
            
            }}
             
             />
              
             <Text style={{fontSize:8,fontWeight:"bold"}}>Pay Bills</Text>
         </View>

       </View>

       
       
       
       <View 
         style={{
           width:150,
           height:"100%",
           backgroundColor:"yellow",
           marginLeft:170,
           position:"absolute",
           borderRadius:10

         }}
      >
           <Image source={require("../Imagesfolder/Imagetv.jpg")}
            style={{
                width:"100%",
                height:"100%",
           borderRadius:10

             }} />

       </View>


       <View 
         style={{
           width:150,
           height:"100%",
           backgroundColor:"yellow",
           marginLeft:340,
           position:"absolute",
           borderRadius:10

         }}
      >
           <Image source={require("../Imagesfolder/primeoffer.jpg")}
            style={{
                width:"100%",
                height:"100%",
           borderRadius:10

             }} />



       </View>


       <View 
         style={{
           width:150,
           height:"100%",
           backgroundColor:"yellow",
           marginLeft:520,
        //    position:"absolute",
        borderRadius:10,
        marginEnd:20

         }}
      >
           <Image source={require("../Imagesfolder/Imagetv.jpg")}
            style={{
                width:"100%",
                height:"100%",
           borderRadius:10

             }} />

       </View>






    </ScrollView>

    </View>
  )
}
