import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessSignup} from '../../assets';
import {Button, Gap} from '../../component/atoms';
import {colors, fonts} from '../../utils';

const SuccessRequest = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignup />
      {/* <IlSuccessRequest /> */}
      <Gap height={30} />
      <Text style={styles.title}>Terima Kasih</Text>
      <Text style={styles.subTitle}>Permintaan Anda </Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Segera kami proses</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Lanjut Baca"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessRequest;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[400],
    color: colors.fontNormal,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.fontTipis,
  },
  buttonContainer: {width: '100%', paddingHorizontal: 80},
});
