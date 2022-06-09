import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;
import Swiper from 'react-native-swiper';
import {userLogin} from '../../../Redux/Actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';

export default function ProductDetails({route, navigation}) {
  const dispatch = useDispatch();

  const {user,error, isAuthenticated} = useSelector(state => state.user);
  
  const [click, setClick] = useState(false);

  

  return (
    <View
      style={{
        elevation: 8,
        backgroundColor: '#fff',
        width: width * 1,
      }}>
      <View style={styles.productDetailsTop}></View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.swiper}>
          <Swiper showButtons={true} autoplay={true} autoplayTimeout={4}>
            {route.params?.item.images.map(i => (
              <Image source={{uri: i.url}} style={styles.banner} key={i._id} />
            ))}
          </Swiper>
        </View>
        <View style={styles.details_box}>
          <View style={styles.details}>
            <View>
              <Text
                style={{
                  color: '#333',
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                {route.params?.item.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#555',
                  fontSize: 15,
                  fontWeight: '600',
                  textDecorationLine: 'line-through',
                  marginRight: 10,
                  marginBottom: 10,
                }}></Text>
              <Text
                style={{
                  color: '#333',
                  fontSize: 28,
                  fontWeight: '800',
                }}>
                {'\u20B9'}
                {route.params?.item.price}/-
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text
              style={{
                color: '#333',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Description
            </Text>
            <Text
              style={{
                color: '#555',
                fontSize: 15,
                fontWeight: '500',
                lineHeight: 20,
                paddingTop: 10,
              }}>
              {route.params?.item.description}
            </Text>
          </View>

          <View
            style={{
              width: width * 1 - 30,
              alignItems: 'center',
            }}>
            <View style={styles.button}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  fontWeight: '600',
                }}>
                Buy
              </Text>
            </View>
            <View style={styles.reviews}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#333',
                  fontWeight: '700',
                }}>
                Contact :
              </Text>

              <Text
                style={{
                  fontSize: 18,
                  color: '#555',
                  fontWeight: '600',
                  paddingRight: 15,
                  paddingBottom: 15,
                  paddingLeft: 75,
                }}>
                {user.phone}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#333',
                  fontWeight: '700',
                }}>
                Belongs to college :
              </Text>

              <View
                style={{
                  marginTop: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingRight: 15,
                  paddingBottom: 15,
                  paddingLeft: 75,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#555',
                    fontWeight: '600',
                    paddingRight: 10,
                  }}>
                  {user.college}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  height: 100,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#333',
                    fontWeight: '700',
                  }}>
                  Availability :
                </Text>
                <TextInput
                  keyboardType="default"
                  placeholder="When seller will be available for call and meet ..."
                  placeholderTextColor="#333"
                  textAlignVertical="top"
                  style={{
                    borderWidth: 1,
                    paddingLeft: 10,
                    color: '#333',
                    borderRadius: 5,
                    borderColor: '#0000002b',
                    height: '100%',
                    textAlign: 'center',
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text style={styles.submitButton}>Chat with owner</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: '#fff',
  },
  productDetailsTop: {
    width: width * 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: width / 6 - 20,
    paddingHorizontal: 10,
    paddingVertical: 40,
    elevation: 8,
    backgroundColor: '#fff',
  },
  banner: {
    width: width * 1,
    height: width / 2 - 20,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  swiper: {
    width: width * 1,
    height: width / 2,
    backgroundColor: '#fff',
    position: 'relative',
  },
  details_box: {
    backgroundColor: '#e5e5e5',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    marginTop: 20,
    marginBottom: height / 8 - 60,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    flexDirection: 'column',
    paddingVertical: 10,
  },
  quantity: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  quantityBox: {
    width: 40,
    height: 40,
    backgroundColor: '#FF8C00',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  button: {
    width: '70%',
    backgroundColor: '#FF8C00',
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  submitButton: {
    width: '70%',
    backgroundColor: '#FF8C00',
    marginTop: 20,
    borderRadius: 5,
    paddingVertical: 15,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  reviews: {
    marginTop: 10,
    width: width * 1,
    padding: 20,
  },
});
