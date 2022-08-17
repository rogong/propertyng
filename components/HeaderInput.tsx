import { Platform, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../theme'
import Row from './Row'
import { Text } from '@ui-kitten/components'

const HeaderInput = () => {
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={() => console.log('navigate to input screen')}
  >
    <Row style={{ alignItems: 'center' }}>
      <MaterialCommunityIcons
        name="magnify"
        color={theme['color-primary-500']}
        size={28}
      />
      <Text style={{ marginLeft: 10 }}>Find a Location</Text>
    </Row>
  </TouchableOpacity>
  )
}

export default HeaderInput

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 50 : 50,
        borderWidth: 1,
        borderColor: theme['color-gray'],
        borderRadius: 30,
        padding: 10,
      }
})