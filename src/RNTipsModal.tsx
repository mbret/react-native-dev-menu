/**
 *
 */
import React, { PureComponent } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import tips from '../resources/tips.json'

console.log(tips)
type Props = {
  visible: boolean,
  onRequestClose: () => void
};

export class RNTipsModal extends PureComponent<Props> {
  render() {
    return (
      <Modal
        animationType='fade'
        transparent={false}
        visible={this.props.visible}
        onRequestClose={this.props.onRequestClose}>
        <View style={{ padding: 10, paddingBottom: -10 }}>
          <View>
            <Text>{Object.keys(tips)}</Text>
            {Object.keys(tips).map(() => {(
              <View style={{
                backgroundColor: '#dcdcdcd6',
                padding: 2,
                margin: 1
              }}>
                <Text >Open developer menu: Check your phone or CTRL+M (windows)</Text>
              </View>
            )})}
            <TouchableOpacity
              style={styles.modal}
              onPress={this.props.onRequestClose}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#dcdcdcd6',
    padding: 5,
  }
})
