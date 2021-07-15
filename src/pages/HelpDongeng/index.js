import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../component';
import Gap from '../../component/atoms/Gap';
import {colors, fonts} from '../../utils';

const HelpDongeng = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header title="Bantuan" subTitle="Cara Penggunaan aplikasi" />
        <Gap height={24} />
        <View style={styles.container}>
          <Text style={styles.title}>Baca Dongeng :</Text>
          <Text style={styles.subTitle}>1. Pilih Home</Text>
          <Text style={styles.subTitle}>
            2. Pilih Judul Cerita yang ingin di baca
          </Text>
          <Text style={styles.subTitle}>3. Tampil Halaman Detail Cerita </Text>
          <Text style={styles.title}>Permintaan Cerita Dongeng :</Text>
          <Text style={styles.subTitle}>1. Pilih Tombol Permintaan</Text>
          <Text style={styles.subTitle}>
            2. Isikan Nama, Email, No Hp dan Judul yang di inginkan{' '}
          </Text>
          <Text style={styles.subTitle}>3. Click tombol Kirim</Text>
          <Text style={styles.subTitle}>
            4. Tampil halaman permintaan sukses terkirim
          </Text>
          <Text style={styles.subTitle}>
            5. Proses selesai, tunggu proses upload judul yang di minta
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HelpDongeng;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {marginLeft: 15, marginRight: 15},
  title: {fontSize: 18, fontFamily: fonts.primary[500], marginBottom: 10},
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.fontTipis,
    marginBottom: 7,
    paddingLeft: 20,
  },
});
