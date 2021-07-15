import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({title, subTitle}) => {
  // function keluar aplikasi
  const backAction = () => {
    Alert.alert('Keluar', 'Apakah anda yakin?', [
      {
        text: 'Tidak',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'Ya', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <TouchableOpacity onPress={backAction}>
        <FontAwesome5Icon name="times-circle" size={50} color="#7530FF" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  subTitle: {fontSize: 12, fontFamily: 'Poppins-Light', color: '#8D92A2'},
});
