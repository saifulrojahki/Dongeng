import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  IcHomeOff,
  IcHomeOn,
  IcOrderOff,
  IcOrderOn,
  IcProfileOff,
  IcProfileOn,
} from '../../../assets';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

// set icon bottom navigation on atau off
const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      // tenary opertator pengganti if jika hanya 2 kodisi
      return focus ? (
        <FontAwesome5Icon name="book-open" size={30} color="#7530FF" />
      ) : (
        <FontAwesome5Icon name="book-open" size={30} color="#E2E2E2" />
      );
    case 'Request':
      return focus ? (
        <FontAwesome5Icon name="bullhorn" size={30} color="#7530FF" />
      ) : (
        <FontAwesome5Icon name="bullhorn" size={30} color="#E2E2E2" />
      );
    case 'Help':
      return focus ? (
        <FontAwesome5Icon name="atlas" size={30} color="#7530FF" />
      ) : (
        <FontAwesome5Icon name="atlas" size={30} color="#E2E2E2" />
      );
    default:
      return <IcHomeOn />;
  }
};

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.page}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
  btnNav: {flex: 1},
});
