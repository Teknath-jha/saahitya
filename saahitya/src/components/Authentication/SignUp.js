import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
var {width} = Dimensions.get('window');
import {Ionicons, FontAwesome5} from '@expo/vector-icons';
import {register} from '../../../Redux/Actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

export default function SignUp({navigation}) {
  const {error, loading, isAuthenticated} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [avatar, setAvatar] = useState(
    'https://mern-nest-ecommerce.herokuapp.com/profile.png',
  );

  console.log(name, email, college, phone, password, avatar);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    console.log(result);

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  const registerUser = () => {
    dispatch(register(name, email, college, phone, password, avatar));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({type: 'clearErrors'});
    }

    if (isAuthenticated) {
      alert('User create Done!');
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.LoginHeader}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '700',
              fontFamily: 'Roboto',
              color: '#333',
            }}>
            Welcome,
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              fontFamily: 'sans-serif',
              color: '#555',
            }}>
            Crate an account to continue!
          </Text>
        </View>
        <View>
          <Image
            source={require('../../Assets/splash/Bookstore_logo.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.LoginBox}>
          <View style={styles.relative}>
            <Ionicons
              name="person-circle-outline"
              size={25}
              style={styles.icon}
            />
            <TextInput
              placeholder=" name..."
              placeholderTextColor="#837777"
              style={styles.inputBox}
              value={name}
              onChangeText={text => setName(text)}
              textContentType="name"
            />
          </View>
          <View style={styles.relative}>
            <Ionicons name="mail-open-outline" size={25} style={styles.icon} />
            <TextInput
              placeholder=" email..."
              placeholderTextColor="#837777"
              style={styles.inputBox}
              value={email}
              onChangeText={text => setEmail(text)}
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.relative}>
            <FontAwesome5 name="phone-alt" size={25} style={styles.icon} />
            <TextInput
              placeholder=" phone no. ..."
              placeholderTextColor="#837777"
              style={styles.inputBox}
              value={phone}
              onChangeText={text => setPhone(text)}
              textContentType="name"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.relative}>
            <FontAwesome5 name="school" size={25} style={styles.icon} />
            <TextInput
              placeholder=" college name..."
              placeholderTextColor="#837777"
              style={styles.inputBox}
              value={college}
              onChangeText={text => setCollege(text)}
              textContentType="name"
            />
          </View>
          <View style={styles.relative}>
            <Ionicons
              name="lock-closed-outline"
              size={25}
              style={styles.icon}
            />
            <TextInput
              placeholder=" password..."
              placeholderTextColor="#837777"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.inputBox}
              textContentType="password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.relative}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {avatar && (
                <Image
                  source={{uri: avatar}}
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
                    Choose Photo
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={registerUser}>
              <View style={styles.Button}>
                <Text style={{color: '#fff', fontSize: 18}}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: width / 6 - 20,
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              color: '#837777',
              fontSize: 15,
            }}>
            Already have a account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                fontSize: 15,
                color: '#FF8C00',
                paddingRight: 15,
              }}>
              {' '}
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    padding: 20,
    backgroundColor: '#e5e5e5',
    height: width * 2,
    flex: 1,
    paddingBottom: 60,
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
