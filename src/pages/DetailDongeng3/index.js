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
import {LutungKasarungDummy} from '../../assets/Dummy';
import {fonts} from '../../utils/fonts';
import {IcBackDetail} from '../../assets/Icon';

const DetailDongeng1 = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <ImageBackground source={LutungKasarungDummy} style={styles.cover}>
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
          Pada zaman dahulu kala hiduplah seorang putri bernama Purbasari. Dia
          merupakan anak bungsu dari Prabu Tapa Agung yang merupakan raja
          kerajaan pasir batang. Purbasari memiliki enam orang kakak perempuan
          yaitu Purbararang, Purbadewata, Purbaendah, Purbakancana, Purbamanik
          dan Purbaleuih.
        </Text>
        <Text style={styles.cerita}>
          Purbasari sangat baik sifat dan kelakuannya. Dia lembut, manis budi,
          ddan suka menolong. Siapapun juga yang membutuhkan pertolongan dengan
          senang hati dibantunya. Selain hatinya yang elok, Purbasari juga
          memiliki paras yang cantik dan rupawan, setiap orang yang melihatnya
          pasti jatuh hati pada pandangan pertama. Sayangnya kecantikan dan
          kebaikan hati purbasari tidak menurun dari kakak sulungnya Purbararang
          yang berperangai sangat buruk. Walaupun cantik Purbararang sangat
          kasar, sombong, kejam dan iri hati terhadap siapapun juga.
        </Text>
        <Text style={styles.cerita}>
          Setelah bertahta dalam waktu yang cukup lama, Prabu Tapa Agung berniat
          turun tahta. Telah dipikirkan masak-masak, bahwa untuk melanjutkan
          kepemimpinannya dia akan menunjuk Purbasari. Sang Prabu telah
          mengamati selama puluhan tahun bahwa Purbasari adalah sosok yang
          paling pantas menggantikannya, bukan Purbararang walaupun Purbararang
          adalah anak sulungnya. Pemikirian dari sang Prabu yang bijaksana ini
          terutama karena sifat dan perilaku anak sulungnya yang buruk. Prabu
          Tapa agung khawatir, jika Purbararang menjadi Raja maka ketentraman
          dan kedamaian kehidupan rakyat akan terganggu dan bahkan menjadi rusak
          akibat kepemimpinan Purbararang yang memiliki sifat sangat buruk.
        </Text>
        <Text style={styles.cerita}>
          Dihadapan seluruh pembesar kerajaan dan juga ketujuh putrinya raja,
          Prabu Tapa Agung menyerahkan takhtanya kepada Purbasari. Prabu Tapa
          Agung lantas meninggalkan istana kerajaannya untuk memulai hidup
          barunya sebagai pertapa.
        </Text>
        <Text style={styles.cerita}>
          Purbararang sangat marah luar biasa mendapati takhta Kerajaan Pasir
          Batang diserahkan kepada adik bungsunya dan tidak kepada dirinya.
          Maka, berselang satu hari sejak penobatan Purbasari menjadi Ratu
          Kerajaan Pasir Batang, Purbararang menghubungi Indrajaya tunangannya.
          Keduanya kemudian meminta bantuan nenek sihir untuk mencelakai
          Purbasari.
        </Text>
        <Text style={styles.cerita}>
          Nenek sihir jahat memberikan boreh (zat berwarna hitam yang dibuat
          dari tumbuhan) kepada Purbararang. Nenek sihir itu berkata.” Semburkan
          boreh ini kewajah dan seluruh tubuh dari Purbasari.”
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
