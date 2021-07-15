import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, TextInputRN} from '../../component/atoms';
import Gap from '../../component/atoms/Gap';
import Header from '../../component/molecules/Header';

const Request = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header title="Permintaan" subTitle="Isikan Judul yang dinginkan" />
      </View>

      <View style={styles.container}>
        <TextInputRN label="Nama" placeholder="Isikan nama anda" />
        <Gap height={12} />
        <TextInputRN label="Email" placeholder="Isikan email anda" />
        <Gap height={12} />
        <TextInputRN label="No HP" placeholder="Isikan No HP anda" />
        <Gap height={12} />
        <TextInputRN
          label="Permintaan Judul"
          placeholder="Isikan judul yang di inginkan"
        />
        <Gap height={20} />
        <Button
          text="Kirim"
          color="#7530FF"
          textColor="white"
          onPress={() => navigation.replace('SuccessRequest')}
        />
      </View>
    </ScrollView>
  );
};

export default Request;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 0,
  },
});
