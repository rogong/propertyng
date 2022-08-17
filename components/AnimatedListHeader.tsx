import {
  Animated,
  FlatList,
  LayoutChangeEvent,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { HEADERHEIGHT, LISTMARGIN } from '../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Divider } from '@ui-kitten/components';
import { theme } from '../theme';
import Row from './Row';
import HeaderInput from './HeaderInput';
import HeaderFilterButtons from './HeaderFilterButtons';
import HeaderLogistics from './HeaderLogistics';

const AnimatedListHeader = ({
  scrollAnimation,
  setMapShown,
  mapShown,
}: {
  scrollAnimation: Animated.Value;
  setMapShown: (bool: boolean) => void;
  mapShown: boolean;
}) => {
  const [offsetAnimation] = useState(new Animated.Value(0));
  const [clampedScroll, setClampedScroll] = useState(
    Animated.diffClamp(
      Animated.add(
        scrollAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolateLeft: 'clamp',
        }),
        offsetAnimation
      ),
      0,
      1
    )
  );

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, HEADERHEIGHT],
    outputRange: [0, -HEADERHEIGHT],
    extrapolate: 'clamp',
  });

  const onLayout = (event: LayoutChangeEvent) => {
    let { height } = event.nativeEvent.layout;
    setClampedScroll(
      Animated.diffClamp(
        Animated.add(
          scrollAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          offsetAnimation
        ),
        0,
        height
      )
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: navbarTranslate }],
        },
      ]}
      onLayout={onLayout}
    >
      <View style={styles.defaultHorizontalMargin}>
        <HeaderInput />
        <HeaderFilterButtons />
      </View>
      <Divider style={styles.divider} />

      <HeaderLogistics setMapShown={setMapShown} mapShown={mapShown} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    height: HEADERHEIGHT,
    backgroundColor: '#fff',
  },
  divider: {
    backgroundColor: theme['color-gray'],
  },
  defaultHorizontalMargin: {
    marginHorizontal: LISTMARGIN,
  },
});

export default AnimatedListHeader;
