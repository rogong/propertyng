import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LISTMARGIN } from '../constants';
import { theme } from '../theme';
import Row from './Row';
import { Text } from '@ui-kitten/components';

const HeaderLogisticsButton = ({
  label,
  onPress,
  iconName,
  style,
}: {
  label: string;
  onPress: () => void;
  iconName?: any;
  style?: any;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={[styles.row, style]}>
        {iconName ? (
          <MaterialCommunityIcons
            name={iconName}
            color={theme['color-info-300']}
            size={18}
          />
        ) : null}
        <Text
          category={'c1'}
          style={[
            styles.btnText,
            {
              marginLeft: 10,
            },
          ]}
        >
          {label}
        </Text>
      </Row>
    </TouchableOpacity>
  );
};
const HeaderLogistics = ({
  setMapShown,
  mapShown,
}: {
  setMapShown: (bool: boolean) => void;
  mapShown: boolean;
}) => { 
  const handleMapPress = () =>{
    if(mapShown) return setMapShown(false);
    setMapShown(true)
  }
  return (
    <Row style={styles.container}>
      <Row>
        <MaterialCommunityIcons
          name="map-marker"
          size={18}
          color={theme['color-primary-500']}
        />
        <Text category={'c1'} appearance={'hint'}>
          12 Available
        </Text>
        <HeaderLogisticsButton
          label="Save"
          style={{ marginLeft: 10 }}
          onPress={() => console.log('save')}
        />
      </Row>
      <Row>
        <HeaderLogisticsButton
          label="Sort"
          iconName={'sort'}
          style={{ marginLeft: 10 }}
          onPress={() => console.log('sort')}
        />
       {mapShown ? 
        <HeaderLogisticsButton
        label="List"
        iconName={'format-list-bulleted'}
        style={{ marginLeft: 20 }}
        onPress={handleMapPress}
      /> : 
      <HeaderLogisticsButton
      label="Map"
      iconName={'map-outline'}
      style={{ marginLeft: 20 }}
      onPress={handleMapPress}
    />
      }
      </Row>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: LISTMARGIN,
    marginVertical: 5,
  },
  btnText: {
    color: theme['color-info-300'],
    fontWeight: 'bold',
  },
  row: { alignItems: 'center' },
});

export default HeaderLogistics;
