import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Gap from '../../component/atoms/Gap';
import {CindelarasDummy} from '../../assets/Dummy';
import {fonts} from '../../utils/fonts';
import {IcBackDetail} from '../../assets/Icon';

const DetailDongeng1 = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <ImageBackground source={CindelarasDummy} style={styles.cover}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate('MainApp')}>
            <IcBackDetail />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <Gap height={20} />
      <View style={styles.contrinerCerita}>
        <Text style={styles.cerita}>
          Pada Zaman Dahulu, Di Sebuah Kerajaan Jenggala. Hiduplah Seorang Raja
          Yang Bernama Raden Putra. Ia Mempunyai Seorang Permaisuri Yang Sangat
          Baik Hati, Dan Seorang Selir Yang Cantik. Namun, Kecantikan Selir
          Tidak Sama Seperti Hatinya. Selir Mempunyai Sifat Yang Sangat Iri Pada
          Permaiuri .
        </Text>
        <Text style={styles.cerita}>
          Kedua Istri Raja Tinggal Di Istana Yang Sangat Megah. Selir Mulai
          Merencanakan Kejahatan Untuk Menggantikan Posisi Permaisuri. Ia
          Bekerja Sama Dengan Seorang Tabib Istana, Untuk Melaksanakan
          Rencananya.
        </Text>
        <Text style={styles.cerita}>
          Suatu Hari, Selir Raja Pura-Pura Sakit. Raja Segera Memanggil Tabib.
          Setelah Memeriksa Keadaan Selir, Raja Pun Menanyakan Apa Yang Terjadi.
        </Text>
        <Text style={styles.cerita}>
          ‘’ Paduka, Ada Seseorang Yang Sudah Menaruh Racun Pada Minuman
          Selir.’’ Jawab Tabib.
        </Text>
        <Text style={styles.cerita}>
          ‘’ Siapa Yang Berani Melakukan Ini Kepada Selirku?’’ Tanya Sanga Raja.
        </Text>
        <Text style={styles.cerita}>
          ‘’ Yang , Melakukan Ini Pada Ku Adalah Permaisuri Mu Sendiri.
          Sepertinya Permaisuri Ingin Membunuhku, Agar Kasih Sayang Baginda
          Hanya Kepadanya, Dan Kekuasaan Kerajaan Jatuh Ke Tangannya.’’ Jawab
          Selir Raja.
        </Text>
        <Text style={styles.cerita}>
          Mendengar Yang Di Katakana Selir, Raja Sangat Marah Dan Langsung
          Memerintahkan Patih Untuk Mengusir Permaisuri Yang Sedang Mengandung
          Dan Membunuhnya Di Hutan. Patih Pun Langsung Membawa Permaisuri Pergi
          Ke Hutan Belntara. Namun, Patih Yang Sangat Bijak Itu Tidak Membunuh
          Permaisuri. Ia Tahu Ini Rencana Jahat Selir Tersebut. Patih Pun
          Menangkap Seekor Kelinci.
        </Text>
        <Text style={styles.cerita}>
          ‘’ Permaisuri, Aku Tidak Akan Membunuhmu. Namun, Hamba Akan
          Memberitahukan Kepada Raja, Bahwa Anda Sudah Hamba Bunuh, Dan Untuk
          Membuat Raja Dan Selir Tuan Putri Sudah Mati. Hamba Akan Membunuh
          Seekor Kelinci Ini, Dan Melumuri Darahnya Pada Selendang Milik
          Permaisuri Dan Pedang Hamba.’’ Ujar Sang Patih.
        </Text>
        <Text style={styles.cerita}>
          ‘’ Aku Sangat Berterima Kasih Patih, Karena Kau Tidak Membunuhku Dan
          Membiarkan Aku Hidup.’’ Jawab Permaisuri.
        </Text>
        <Text style={styles.cerita}>
          Setelah Beberapa Bulan Permaisuri Tinggal Di Dalam Hutan, Ia Pun
          Melahirkan Seorang Anak Laki-Laki. Anak Itu Di Beri Nama Cindelaras.
          Cindelaras Tumbuh Menjadi Anak Yang Cerdas Dan Tampan. Sejak Kecil Ia
          Sudah Terbiasa Berteman Dengan Binatang.
        </Text>
        <Text style={styles.cerita}>
          Suatu Hari, Cindelaras Sedang Asik Bermain. Tiba-Tiba, Seekor Rajawali
          Menjatuhan Sebutir Telur Tepat Di Sebelah Cindelaras. Cindelaras
          Langsung Mengambil Telur Itu Dan Menetaskannya. Tiga Minggu Kemudian,
          Menetaslah Telur Tersebut Menjadi Seekor Anak Ayam Yang
          Lucu.Cindelaras Merawat Ayam Tersebut Dengan Sangat Baik. Tubuh Ayam
          Itu Terlihat Kuat Dan Kekar, Paruhnya Kokoh Dan Runcing Seperti Paruh
          Burung Rajawali. Kedua Kakinya Kekar Berotot Dan Memiliki Kuku Yang
          Runcing Tajam Seperti Kuku Rajawali. Namun, Suara Kokoknya Sangat
          Berbeda Dengan Ayam-Ayam Lainnya. Suara Kokoknya Sangat Aneh, ‘’
          Kukuruyuk, Tuanku Cindelaras, Rumahnya Di Dalam Hutan Belantara, Atap
          Rumahnya Terbuat Dari Daun Kelapa, Ayahnya Raden Putra Raja Jenggala.”
          Bunyi Kokok Ayam Cendelaras.
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailDongeng1;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 230, paddingTop: 26, paddingLeft: 22},
  back: {width: 30, height: 30, justifyContent: 'center', alignItems: 'center'},
  contrinerCerita: {marginLeft: 15, marginRight: 15},
  cerita: {fontSize: 14, fontFamily: fonts.primary[400], marginBottom: 10},
});
