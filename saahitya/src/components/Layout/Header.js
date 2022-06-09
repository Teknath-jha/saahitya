import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import {Ionicons} from '@expo/vector-icons';

var {width} = Dimensions.get('window');

const Header = ({navigation}) => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={40} color="#FF8C00" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#FF8C00"
          style={styles.searchBox}
        />
        <TouchableOpacity>
          <Ionicons
            name="search-outline"
            size={30}
            color="#FF8C00"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 5,
    backgroundColor: '#fff',
    elevation: 8,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    width: width - 80,
    height: width / 7 - 15,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 10,
    borderRadius: 25,
    fontSize: 15,
    color: '#333',
    paddingHorizontal: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: -15,
    right: 15,
  },
});
