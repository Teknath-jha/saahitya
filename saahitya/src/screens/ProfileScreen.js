import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Platform,
  Dimensions,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Card, Button} from 'react-native-paper';
import {Ionicons, FontAwesome5} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {logOutUser} from '../../Redux/Actions/UserAction';
var {width} = Dimensions.get('window');

export default function ProfileScreen({navigation}) {
  const dispatch = useDispatch();
  const {user, error} = useSelector(state => state.user);

  const logOut = () => {
    dispatch(logOutUser());
    if (error) {
      alert(error);
    }
    alert('Log out success');
  };

  const OpenDial = () => {
    if (Platform.OS === 'android') {
      Linking.openURL('tel:01025478993');
    } else {
      Linking.openURL('telprompt:01025478993');
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient colors={['#FF8C00', '#FF8C00']} style={{height: '20%'}}>
        <View style={{flexDirection: 'row', marginTop: '10%'}}>
          <View style={styles.divider} />
          <View style={styles.title}>
            <Text style={{fontSize: 38, color: '#2D3436'}}>
              {' '}
              Personal{' '}
              <Text style={{fontWeight: '300', color: 'white'}}>Profile</Text>
            </Text>
          </View>
          <View style={styles.divider} />
        </View>
      </LinearGradient>

      <View style={styles.imagestyle}>
        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 140 / 2,
            margin: -50,
          }}
          source={{
            uri: user.avatar.url,
          }}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 55, margin: 15}}>
        <Text> {user.name}</Text>
      </View>

      <Card
        style={styles.mycard}
        onPress={() => {
          Linking.openURL('mailto:jhateknath64@gmail.com');
        }}>
        <View style={styles.cardconent}>
          <Ionicons
            name="mail"
            style={{margin: 4}}
            size={32}
            color="#FF8C00"
          />
          <Text style={{marginTop: 12, fontSize: 15}}>{user.email}</Text>
        </View>
      </Card>

      <Card
        style={styles.mycard}
        onPress={() => {
          OpenDial();
        }}>
        <View style={styles.cardconent}>
          <FontAwesome5
            style={{margin: 4}}
            name="phone-alt"
            size={32}
            color="#FF8C00"
          />
          <Text style={{marginTop: 12, fontSize: 15}}>{user.phone}</Text>
        </View>
      </Card>

      <Card style={styles.mycard}>
        <View style={styles.cardconent}>
          <FontAwesome5
            name="home"
            style={{margin: 4}}
            size={24}
            color="#FF8C00"
          />
          <Text style={{marginTop: 12, fontSize: 15}}>
            {' '}
            {user.college}
          </Text>
        </View>
      </Card>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 45,
          color: '#FF8C00',
        }}>
        <Button
          color="#FF8C00"
          mode="contained"
          style={{
            width: '70%',
            backgroundColor: '#FF8C00',
            marginTop: 20,
            borderRadius: 5,
            paddingVertical: 15,
            textAlign: 'center',
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
          }}>
          Edit
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 25,
          color: '#FF8C00',
          width: width,
        }}>
        <Button
          color="#FF8C00"
          mode="contained"
          style={{
            width: '70%',
            backgroundColor: '#FF8C00',
            marginTop: 20,
            borderRadius: 5,
            paddingVertical: 15,
            textAlign: 'center',
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
          }}
          onPress={logOut}>
          Logout
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagestyle: {
    alignItems: 'center',
    marginTop: 30,
  },
  mycard: {
    margin: 3,
    marginTop: 10,
  },
  cardconent: {
    flexDirection: 'row',
    padding: 5,
  },
  divider: {
    backgroundColor: '#FF8C00',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
});
