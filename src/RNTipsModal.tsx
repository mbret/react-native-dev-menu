/**
 *
 */
import React, { PureComponent } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import tips from '../resources/tips.json'
import { Tips } from './types.js';

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
        <View style={styles.container}>
          <View>
            {Object.keys(tips).map((key, i) => (
              <View key={i} style={styles.tipContainer}>
                <Text ><Text style={styles.label}>{key}:</Text> {(tips as Tips)[key]}</Text>
              </View>
            ))}
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
  },
  container: { padding: 10, paddingBottom: -10 },
  tipContainer: {
    backgroundColor: '#dcdcdcd6',
    padding: 2,
    margin: 1
  },
  label: {
    fontWeight: "bold"
  }
})
