import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  CindelarasDummy,
  JokoKendilDummy,
  LutungKasarungDummy,
} from '../../assets/Dummy';
import Gap from '../../component/atoms/Gap';
import Header from '../../component/molecules/Header';
import ItemListDongeng from '../../component/molecules/ItemListDongeng';

const Home = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header title="Dongeng" subTitle="Kumpulan Cerita Dongeng Anak" />
        <Gap height={20} />
        <View style={styles.tabValue}>
          <View style={styles.itemContent}>
            <ItemListDongeng
              type="cerita1"
              name="Cindelaras"
              from="Jawa Timur"
              image={CindelarasDummy}
              onPress={() => navigation.navigate('DetailDongeng1')}
            />
          </View>
          <View style={styles.itemContent}>
            <ItemListDongeng
              type="cerita2"
              name="Joko Kendil"
              from="Jawa Tengah"
              image={JokoKendilDummy}
              onPress={() => navigation.navigate('DetailDongeng2')}
            />
          </View>
          <View style={styles.itemContent}>
            <ItemListDongeng
              type="cerita3"
              name="Lutung Kasarung"
              from="Jawa Barat"
              image={LutungKasarungDummy}
              onPress={() => navigation.navigate('DetailDongeng3')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  tabValue: {paddingTop: 10, paddingHorizontal: 24},
  itemContent: {
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 18,
  },
});
