import { View, ViewStyle } from 'react-native';
import { Property } from '../types/property';
import CardView from './CardView';
import ImageCarousel from './ImageCarousel';

export const Card = ({
  property,
  style,
}: {
  property: Property;
  style?: ViewStyle;
}) => {
  return (
    <View style={style}>
      <ImageCarousel images={property.images} />
      <CardView property={property} />
    </View>
  );
};

export default Card;


