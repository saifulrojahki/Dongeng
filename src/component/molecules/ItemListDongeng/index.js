import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemListDongeng = ({image, onPress, name, from, type}) => {
  // pencabangan berdasarkan type
  const renderContent = () => {
    switch (type) {
      case 'cerita1':
        // items list product seperti di home page
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.from}>{from}</Text>
            </View>
          </>
        );
      case 'cerita2':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.from}>{from}</Text>
            </View>
          </>
        );
      case 'cerita2':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.from}>{from}</Text>
            </View>
          </>
        );
      default:
        // items list product seperti di home page
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.from}>{from}</Text>
            </View>
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {/* panggil var renderContent */}
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListDongeng;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {flex: 1},
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  from: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  status: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#D9435E'},
});
