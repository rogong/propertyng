import { FlatList } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';

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
  ];

  return (
    <Screen style={{ marginHorizontal: LISTMARGIN }}>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card property={item} />}
      />
    </Screen>
  );
};

export default SearchScreeen;
