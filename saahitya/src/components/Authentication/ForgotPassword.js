import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {forgotPassword} from '../../../Redux/Actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';

var {width} = Dimensions.get('window');

export default function ForgotPassword({navigation}) {
  const {loading, error, message} = useSelector(state => state.forgotPassword);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");


  const forGotPassword = () => {
    dispatch(forgotPassword(email));
  };
  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (message) {
      alert(message);
    }
  }, [alert, error, message]);

  return (
    <>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <View style={styles.container}>
          <View>
        <Image
          source={require('../../Assets/splash/splash.png')}
          style={styles.img}
        />
      </View>
          <TextInput
            placeholder="Enter your registered email..."
            placeholderTextColor="#837777"
            style={styles.forgot}
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity onPress={forGotPassword} style={styles.button}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: '600',
                  fontFamily: 'sans-serif',
                }}>
                Submit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: width * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width * 1 - 50,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  forgot: {
    width: width * 1 - 80,
    height: 50,
    borderColor: '#FF8C00',
    borderWidth: 1,
    color: '#333',
    borderRadius: 10,
    paddingLeft: 15,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FF8C00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
