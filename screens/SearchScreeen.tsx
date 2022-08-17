import { useState } from 'react';
import {
  Animated,
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import AnimatedListHeader from '../components/AnimatedListHeader';
import Card from '../components/Card';
import Screen from '../components/Screen';
import { HEADERHEIGHT } from '../constants';

const LISTMARGIN = 10;

const SearchScreeen = () => {
  const properties = [
    {
      id: 1,
      images: [
        'https://lagoslonglets.com/images/stories/longlets/long-let-properties-algarve.jpg',
        'https://www.resortrentalsalgarve.com/images/stories/rr/holiday-rentals-lagos-algarve.jpg',
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: 'The Hamilton',
      street: 'GRA',
      city: 'Lekki',
      state: 'Lagos',
      zip: 33137,
      tags: ['Parking'],
    },
    {
      id: 2,
      images: [
        'https://www.resortrentalsalgarve.com/images/stories/rr/holiday-rentals-lagos-algarve.jpg',
        'https://lagoslonglets.com/images/stories/longlets/long-let-properties-algarve.jpg',
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: 'The Hamilton',
      street: 'GRA',
      city: 'Lekki',
      state: 'Lagos',
      zip: 33137,
      tags: ['Parking'],
    },
    {
      id: 3,
      images: [
        'https://www.resortrentalsalgarve.com/images/stories/rr/holiday-rentals-lagos-algarve.jpg',
        'https://lagoslonglets.com/images/stories/longlets/long-let-properties-algarve.jpg',
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: 'The Hamilton',
      street: 'GRA',
      city: 'Lekki',
      state: 'Lagos',
      zip: 33137,
      tags: ['Parking'],
    },
    {
      id: 4,
      images: [
        'https://www.resortrentalsalgarve.com/images/stories/rr/holiday-rentals-lagos-algarve.jpg',
        'https://lagoslonglets.com/images/stories/longlets/long-let-properties-algarve.jpg',
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: 'The Hamilton',
      street: 'GRA',
      city: 'Lekki',
      state: 'Lagos',
      zip: 33137,
      tags: ['Parking'],
    },
  ];

  const [scrollAnimation] = useState(new Animated.Value(0));
  const [mapShowwn, setMapShown] = useState(false);

  return (
    <Screen>
      <AnimatedListHeader scrollAnimation={scrollAnimation}
      setMapShown={setMapShown}
      mapShown={mapShowwn} />
      {mapShowwn ? (
        <View style={{ flex: 1, overflow: 'hidden' }}>
          <MapView style={{ height: '100%', width: '100%' }} />
        </View>
      ) : (
        <Animated.FlatList
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollAnimation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          contentContainerStyle={{ paddingTop: HEADERHEIGHT - 20 }}
          bounces={false}
          scrollEventThrottle={16}
          data={properties}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={{ marginHorizontal: LISTMARGIN }}
          renderItem={({ item }) => (
            <Card property={item} style={styles.cardMargin} />
          )}
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  cardMargin: {
    marginVertical: 10,
  },
});

export default SearchScreeen;
