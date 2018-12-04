/**
 * @flow
 */
import React, { PureComponent } from 'react'
import {
  // StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity
} from 'react-native'

type Props = {
  visible: boolean,
  onRequestClose: Function
};

export class RNTipsModal extends PureComponent<Props> {
  render () {
    return (
      <Modal
        animationType='fade'
        transparent={false}
        visible={this.props.visible}
        onRequestClose={this.props.onRequestClose}>
        <View style={{ padding: 10, paddingBottom: -10 }}>
          <View>
            <View syle={{
              backgroundColor: '#dcdcdcd6',
              padding: 2,
              margin: 1
            }}>
              <Text >Open developer menu: Check your phone or CTRL+M (windows)</Text>
            </View>
            <TouchableOpacity
              onPress={this.props.onRequestClose}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

// const styles = StyleSheet.create({})
