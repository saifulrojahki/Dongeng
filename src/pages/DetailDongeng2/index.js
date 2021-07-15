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
import {JokoKendilDummy} from '../../assets/Dummy';
import {fonts} from '../../utils/fonts';
import {IcBackDetail} from '../../assets/Icon';

const DetailDongeng1 = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <ImageBackground source={JokoKendilDummy} style={styles.cover}>
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
          Pada Zaman Dahulu. Di Sebuah Desa Di Jawa Tengah, Hiduplah Seorang
          Janda Tua. Ia Hidup Sebatang Kara. Suaminya Sudah Meninggal Beberapa
          Tahun Lalu. Ia Tinggal Di Sebuah Rumah Tua Seorang Diri. Untuk
          Memenuhi Kebutuhannya Sehari-Hari, Ia Berjualan Kayu Bakar Di Pasar.
          Perjalanan Yang Harus Di Tempuh Ke Pasar Sangat Jauh. Uang Yang Ia
          Perolehdari Berjualan Pun Sangat Sedikit. Meskipun Begitu, Ia Tetap
          Giat Bekerja Dan Tidak Menyerah.
        </Text>
        <Text style={styles.cerita}>
          Sebenarnya Janda Itu Sangat Menginginkan Kehadiran Seorang Anak.
          Namun, Untuk Mengangkat Anak Sudah Pasti Ia Tidak Mampu. Untuk
          Memenuhi Kebutuhan Dirinya Sendiri Saja Masih Kekurangan. Namun, Pada
          Suatu Malam, Ia Bermimpi Kejatuhan Bulan Di Siang Hari. Mimpi Yang
          Aneh Itu Membuatnya Sangat Gelisah. Bagaimana Mungkin Ada Bulan Pada
          Siang Hari? Ada Apa Dengan Mimpi Tersebut. Pikirnya.
        </Text>
        <Text style={styles.cerita}>
          Paginya, Janda Itu Bangun Dengan Hati Yang Resah Karena Berpikir
          Tentang Mimpinya. Ia Bergegas Pergi Ke Pasar Sebelum Matahari Terbit.
          Setelah Menjual Semua Dagangannya Dan Membeli Beberapa Barang
          Kebutuhannya, Ia Segera Pulang.
        </Text>
        <Text style={styles.cerita}>
          Ketika Melewati Pintu Pasar. Ia Melihat Segerombolan Orang Berkerumun
          Mengelilingi Seorang Laki-Laki. Karena Penasaran, Janda Itu Mendekati
          Kerumunan Tersebut. Ternyata, Laki-Laki Itu Adalah Seorang Peramal. Ia
          Sedang Meramal Seorang Wanita.
        </Text>
        <Text style={styles.cerita}>
          ‘’ Pak Peramal, Saya Ingin Tahu Apa Maksud Mimpi Saya Semalam.’’ Ujar
          Wanita Tua Itu.
        </Text>
        <Text style={styles.cerita}>
          Peramal Itu Berkata, ‘’ Ceritakanlah Mimpimu Itu?’’
        </Text>
        <Text style={styles.cerita}>
          ‘’ Semalam Saya Bermimpi Kejatuhan Bulan. Apakah Itu Pertanda Buruk?’’
          Ujar Si Wanita. Dengan Wajah Sumringah. Peramal Itu Berkata. ‘’ Wah,
          Justru Itu Pertanda Yang Baik. Mimpi Kejatuhan Bulan Artinya Engkau
          Akan Mendapatkan Keturunan. Engkau Kan Mendapat Seorang Anak.
          Selamat!’’
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
