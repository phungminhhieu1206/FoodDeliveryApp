import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';
import {colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';
import {getStatusBarHeight} from '../global/getStatusBarHeight';

export default function Header({title, type, navigation}) {
  return (
    <View style={styles.headerContainer}>
      {/* Header Left */}
      <View style={styles.headerLeft}>
        <Icon
          type="material-community"
          name={type}
          color={colors.headerText}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      {/* Header Title */}
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height:
      Platform.OS === 'android'
        ? parameters.headerHeight
        : parameters.headerHeight + getStatusBarHeight(),
    paddingTop: Platform.OS === 'android' ? 0 : getStatusBarHeight(),
  },
  headerLeft: {
    marginLeft: 20,
  },
  headerTitle: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
