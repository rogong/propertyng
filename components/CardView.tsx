import { StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import { Property } from '../types/property';
import Row from './Row';

const CardView = ({ property }: { property: Property }) => {
  return (
    <View style={styles.infoContainer}>
      <Row style={styles.rowJustification}>
        <Text>
          ₦ {property.rentLow.toLocaleString()} .{''}
          {property.rentHigh.toLocaleString()}
        </Text>
        <MaterialCommunityIcons
          name="heart-outline"
          color={theme['color-primary-500']}
          size={24}
        />
      </Row>
      <Text category={'c1'}>
        {property.bedroomLow} - {property.bedroomHigh} Beds
      </Text>
      <Text category={'c1'} style={{ marginTop: 5 }}>
        {property.name}
      </Text>
      <Text category={'c1'}>{property.street}</Text>
      <Text category={'c1'}>
        {property.city}, {property.state}, {property.zip}
      </Text>

      <Text style={styles.defaultMarginTop}>
        {property.tags.map((tag, index) =>
          index === property.tags.length - 1 ? tag : `${tag}, `
        )}
      </Text>

      <Row style={[styles.defaultMarginTop, styles.rowJustification]}>
        <Button
          appearance={'ghost'}
          style={[
            styles.button,
            {
              borderColor: theme['color-primary-500'],
            },
          ]}
          size="small"
          onPress={() => console.log('email the item manager')}
        >
          Email
        </Button>
        <Button
          style={[
            styles.button,
            {
              borderColor: theme['color-primary-500'],
            },
          ]}
          size="small"
          onPress={() => console.log('call the item manager')}
        >
          Call
        </Button>
      </Row>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  button: {
    width: '49%',
  },
  defaultMarginTop: {
    marginTop: 5,
  },
  infoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: theme["color-gray"],
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    
  },
  rowJustification: {
    justifyContent: 'space-between',
  },
});
