import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
var {width} = Dimensions.get('window');
import {Ionicons} from '@expo/vector-icons';
import {createProduct} from '../../../Redux/Actions/ProductAction';
import {useDispatch, useSelector} from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import {FontAwesome5} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

export default function AddProduct({navigation}) {
  //   const {error, loading, isAuthenticated} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const [name, setName] = useState('Product name');
  const [description, setDescription] = useState('Description of product');
  const [price, setPrice] = useState(10);
  const [stock, setStock] = useState(1);
  const [category, setCategory] = useState('Book');
  const [images, setImages] = useState(
    'https://www.linkpicture.com/q/5_439.jpg',
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    console.log(result);

    if (!result.cancelled) {
      setImages(result.uri);
    }
  };

  const uploadProduct = () => {
    console.log(name, description, price, images, category, stock);
    dispatch(createProduct(name, description, price, images, category, stock));
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.LoginHeader}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            fontFamily: 'sans-serif',
            color: '#333',
          }}>
          Upload your saahitya details,
        </Text>
      </View>

      <View style={styles.LoginBox}>
        <View style={styles.relative}>
          <MaterialIcons
            name="drive-file-rename-outline"
            size={25}
            style={styles.icon}
          />
          <TextInput
            placeholder="product name..."
            placeholderTextColor="#837777"
            style={styles.inputBox}
            value={name}
            onChangeText={text => setName(text)}
            textContentType="name"
          />
        </View>
        <View style={styles.relative}>
          <MaterialIcons name="category" size={25} style={styles.icon} />
          <TextInput
            placeholder="category..."
            placeholderTextColor="#837777"
            style={styles.inputBox}
            value={category}
            onChangeText={text => setCategory(text)}
            textContentType="name"
          />
        </View>
        <View style={styles.relative}>
          <FontAwesome5 name="rupee-sign" size={25} style={styles.icon} />
          <TextInput
            placeholder="price..."
            placeholderTextColor="#837777"
            style={styles.inputBox}
            value={price.toString()}
            onChangeText={text => setPrice(text)}
            textContentType="name"
          />
        </View>
        <View style={styles.relative}>
          <Fontisto name="question" size={25} style={styles.icon} />
          <TextInput
            placeholder="quantity..."
            placeholderTextColor="#837777"
            style={styles.inputBox}
            value={stock.toString()}
            onChangeText={text => setStock(text)}
            textContentType="name"
          />
        </View>
        <View style={styles.relative}>
          <MaterialIcons name="description" size={25} style={styles.icon} />
          <TextInput
            placeholder="category..."
            placeholderTextColor="#837777"
            style={styles.inputBox}
            value={description}
            onChangeText={text => setDescription(text)}
            textContentType="name"
          />
        </View>

        <View style={styles.relative}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {images && (
              <Image
                source={{uri: images}}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 80,
                  resizeMode: 'contain',
                  borderWidth: 1,
                  borderColor: '#999',
                }}
              />
            )}
            <TouchableOpacity onPress={pickImage}>
              <View
                style={{
                  marginLeft: 10,
                  height: 50,
                  width: width * 1 - 100,
                  backgroundColor: '#f5f5f5',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#837777',
                    fontSize: 18,
                  }}>
                  Choose Product Image/s
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={uploadProduct}>
            <View style={styles.Button}>
              <Text style={{color: '#fff', fontSize: 18}}>Upload</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    padding: 20,
    backgroundColor: '#e5e5e5',
    height: width * 2,
  },
  LoginHeader: {
    width: width * 1,
    paddingTop: width / 5,
    paddingLeft: 10,
  },
  inputBox: {
    width: width * 1 - 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FF8C00',
    paddingLeft: 45,
    fontSize: 15,
    color: '#837777',
    marginVertical: 10,
  },
  relative: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
    color: '#FF8C00',
  },
  img: {
    width: width * 1 - 50,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  LoginBox: {
    marginTop: width / 40,
  },
  Button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FF8C00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
