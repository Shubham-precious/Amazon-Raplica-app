import React, {useDeferredValue, useState} from 'react';
import {View, Text, Image, Button, FlatList,TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from '../Components/Cartslice/Cartslice';
import Header from './Header';

const Cart = ({navigation}) => {
  const items = useSelector(state => state.cart);


  const [count,setcount]=useState(1)

  const dispatch = useDispatch();

  const removeItem = index => {
    dispatch(removeItemFromCart(index));
    // console.log(index);
  };

  // console.log(items);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 30,
      }}>
        <Header/>
        <View
        style={{
          width: '100%',
          height: 50,
          // backgroundColor: 'grey',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingRight: 20,
        }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            backgroundColor: 'yellowgreen',
            borderRadius: 20,
            // justifyContent:"center",
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}
          onPress={() => {
            navigation.navigate('products');
          }}>
          <Image
            source={require('../backarrow.png')}
            style={{
              height: 20,
              width: 20,
              marginLeft: 10,
            }}
          />

          <Text style={{
            fontWeight:"bold"
           }}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{
          backgroundColor: 'white',
          height: '100%',
          paddingTop: 15,
          paddingBottom: 5,
        }}
        data={items}
        renderItem={({index, item}) => (
          <View
            style={{
              width: '95%',
              height: 450,
              backgroundColor: 'white',
              margin: 10,
              // justifyContent:"center",
              alignItems: 'flex-start',
              padding: 15,
              marginTop: 5,
              marginBottom: 5,
              shadowOffset: {height: 5, width: 5},
              shadowColor: 'black',
              shadowOpacity: 1,
              elevation: 105,
              borderRadius: 10,
            }}>
            <Image
              source={{uri: `${item.images}`}}
              style={{
                width: '100%',
                height: 210,
                backgroundColor: '#fff',

                resizeMode: 'cover',
              }}
            />

            <Text
              style={{
                fontWeight: 900,
                marginTop: 20,
              }}>
              {item.brand} {item.title} {item.category}
            </Text>

            <Text
              style={{
                fontWeight: 900,
                marginTop: 20,
              }}>
              {item.description}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                width: '100%',
                justifyContent: 'space-evenly',
              }}>
              {/* <Button
                title="Buy Now"
                color={'green'}
                style={{
                  width: 80,
                }}
              /> */}



              <View
                 style={{
                  flexDirection:"row",
                  gap:4,
                  alignItems:"center"
                 }}
              
              
              >



                 <TouchableOpacity
                 onPress={()=>{setcount(count+1)}}
                 style={{
                  backgroundColor:"cornflowerblue",
                  height:40,
                  width:30,
                  justifyContent:"center",
                  alignItems:"center"
                 }}
                 >
                    <Text
                     style={{
                      color:"white",
                      fontSize:15,
                      fontWeight:"bold"
                     }}
                    >+</Text>
                    
                </TouchableOpacity> 

                
               
               
               
               
               
               
               
                <Text style={{
                  fontWeight:"bold"
                }}>{count}</Text>

       {/* {console.warn(count)} */}

       <TouchableOpacity
                 
                 onPress={()=>{
                     
                  if(count<=1){
                      
                    removeItem(index)

                  } else{

                  setcount(count-1)
                
                }
                
                }}



                 style={{
                  backgroundColor:"cornflowerblue",
                  height:40,
                  width:30,
                  justifyContent:"center",
                  alignItems:"center"
                 }}
                 >
                    <Text
                     style={{
                      color:"white",
                      fontSize:15,
                      fontWeight:"bold"
                     }}
                    >-</Text>
                    
                </TouchableOpacity> 
                

              </View>

              <TouchableOpacity
                 onPress={() => {
                  removeItem(index);
                }}
                 style={{
                  backgroundColor:"red",
                  height:40,
                  // width:30,
                  padding:5,
                  justifyContent:"center",
                  alignItems:"center"
                 }}
                 >
                    <Text
                     style={{
                      color:"white",
                      fontSize:15,
                      fontWeight:"bold"
                     }}
                    >Remove Item</Text>
                    
                </TouchableOpacity> 


              



















              {/* <Button
                title="Remove Item"
                
                color={'red'}
                style={{
                  width: 80,
                }}
              /> */}
            </View>

             <TouchableOpacity
                style={{
                  marginTop:20,
                  backgroundColor:"green",
                  padding:10,
                  marginLeft:"30%"
                }}
             
             >
                  <Text
                  
                   style={{
                    color:"white",
                    fontWeight:"bold"
                   }}
                  
                  >Proceed To Buy</Text>
             </TouchableOpacity>

          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Cart;
