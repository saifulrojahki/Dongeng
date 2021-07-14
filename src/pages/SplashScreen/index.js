import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const SplashScreen = ({navigation}) => {
  // set pindahke halaman signin setelah 2 detik
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  }, []);
  return (
    <View style={styles.page}>
      <FontAwesome5Icon name="book-reader" color="#7530FF" size={50} />
      <Text style={styles.title}>Rumah Mural</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    marginTop: 20,
  },
});
