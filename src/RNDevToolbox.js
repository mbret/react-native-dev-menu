/**
 * @flow
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { warn } from './utils/console'
import { isError } from './utils/is-error'
import { RNTipsModal } from './RNTipsModal'
import { PERSISTENCE_KEY } from './constants'
import { colors } from './style'

type Props = {
  persistenceProvider: {
    getItem: Function,
    setItem: Function
  }
}

export const RNDevToolboxContext = React.createContext({})

class RNDevToolboxBase extends Component<Props> {
  componentDidMount () {
    if (this.props.onRef) {
      this.props.onRef(this)
    }
  }

  registerAction = () => {}

  processAction = () => {}

  debug = () => {}

  open = () => {}

  close = () => {}

  toggle = () => {}

  render () {
    return (
      <RNDevToolboxContext.Provider value={this}>
        {this.props.children}
      </RNDevToolboxContext.Provider>
    )
  }
}

class ProductionPolyfill extends RNDevToolboxBase {}

class RNDevToolbox extends RNDevToolboxBase {
  constructor (props) {
    super(props)
    this.state = {
      opened: false,
      useDev: __DEV__,
      debug: 'Ready!',
      tipsModalVisible: false,
      actions: [
        {
          name: 'Tips',
          task: this._toggleTipsModalVisible
        }
      ].concat(props.actions || []),
      indicators: {
        '__DEV__': __DEV__ ? 'true' : 'false',
        'NODE_ENV': process.env.NODE_ENV
      }
    }
  }

  componentDidMount () {
    super.componentDidMount()
    this._restore()
  }

  componentDidUpdate (prevProps, prevState) {
    this._persist(prevState)
  }

  /**
   * {@inheritDoc}
   */
  debug = (debug) => {
    this.setState({
      debug
    })
  }

  /**
   * {@inheritDoc}
   */
  open = () => {
    this.setState({
      opened: true
    })
  }

  /**
   * {@inheritDoc}
   */
  close = () => {
    this.setState({
      opened: false
    })
  }

  /**
   * {@inheritDoc}
   */
  toggle = () => this.state.opened ? this.close() : this.open()

  /**
   * {@inheritDoc}
   */
  registerAction = (action) => {
    this.setState(state => ({
      actions: state.actions.concat(Array.isArray(action) ? action : [action])
    }))
  }

  /**
   * {@inheritDoc}
   */
  processAction = (name) => {
    const actionOver = () => this.debug(`Action ${name} done!`)
    this.state.actions.forEach(action => {
      if (action.name === name) {
        this.debug(`Process action ${name}`)
        const done = action.task()
        // nothing
        if (done === undefined) {
          return actionOver()
        }
        // promise
        if (typeof done.then === 'function') {
          return done.then(actionOver)
        }

        // we don't know
        return actionOver()
      }
    })
  }

  _persist = (prevState) => {
    // should we persist ?
    if (this.state.opened !== prevState.opened) {
      if (this.props.persistenceProvider) {
        this.props.persistenceProvider
          .setItem(PERSISTENCE_KEY, JSON.stringify({
            opened: this.state.opened
          }))
          .catch(warn)
      }
    }
  }

  _restore = () => {
    if (this.props.persistenceProvider) {
      this.props.persistenceProvider
        .getItem(PERSISTENCE_KEY)
        .then(data => {
          if (data) {
            this.setState(JSON.parse(data))
          }
        })
        .catch(warn)
    }
  }

  _toggleTipsModalVisible = () => {
    this.setState(state => ({tipsModalVisible: !state.tipsModalVisible}))
  }

  _formatIndicator = (indicators, key) => {
    const value = indicators[key]
    return (
      <Text>
        {key}: <Text style={{
          color: Array.isArray(value)
            ? value[1]
            : undefined
        }}>{Array.isArray(value) ? value[0] : value}</Text>
      </Text>
    )
  }

  render () {
    const indicators = {...this.state.indicators, ...(this.props.indicators || {})}

    const Debug = (
      <Text style={{color: isError(this.state.debug) ? colors.colorError : colors.colorValid}}>
        {isError(this.state.debug) ? this.state.debug.toString() : this.state.debug}
      </Text>
    )

    const Toolbox = (
      <View style={styles.toolboxContainer}>
        {Debug}
        <View style={styles.indicatorsContainer}>
          {Object.keys(indicators).map((key, i) => (
            <View key={i} style={styles.indicatorContainer}>
              <Text>{this._formatIndicator(indicators, key)}</Text>
            </View>
          ))}
        </View>
        <View style={styles.actionButtonsContainer}>
          {this.state.actions.map((action, i) => (
            <TouchableOpacity
              key={i}
              style={styles.actionButton}
              onPress={() => this.processAction(action.name)}
            >
              <Text style={styles.actionButtonText}>{action.label || action.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )

    const Button = (
      <TouchableOpacity style={styles.triggerButton} onPress={this.toggle} underlayColor='#ff7043'>
        <Text style={{color: 'white'}}>{this.state.opened ? '-' : '+'}</Text>
      </TouchableOpacity>
    )

    return (
      <RNDevToolboxContext.Provider value={this}>
        <RNTipsModal visible={this.state.tipsModalVisible} onRequestClose={this._toggleTipsModalVisible} />
        <View style={styles.container}>
          {this.state.opened && Toolbox}
          {this.props.children}
          {Button}
        </View>
      </RNDevToolboxContext.Provider>
    )
  }
}

class Wrapper extends React.Component<Props> {
  static VALID = colors.colorValid
  static DANGER = colors.colorError

  render () {
    return (
      <View style={styles.masterContainer}>
        {(this.props.enable === false || (!__DEV__ && this.props.enable === false)) ? (
          <ProductionPolyfill {...this.props} />
        ) : (
          <RNDevToolbox {...this.props} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  masterContainer: {
    // not sure if I should use flexGrow or flex
    flexGrow: 1
  },
  container: {
    flex: 1
  },
  triggerButton: {
    backgroundColor: colors.bgDark,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    right: 5
  },
  toolboxContainer: {
    backgroundColor: colors.bgLight,
    borderBottomColor: '#828282d6',
    borderBottomWidth: 1,
    padding: 5
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  indicatorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: -1,
    marginBottom: 2
  },
  indicatorContainer: {
    backgroundColor: '#dcdcdcd6',
    padding: 2,
    margin: 1
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: -1
  },
  actionButton: {
    backgroundColor: colors.bgDark,
    paddingLeft: 2,
    paddingRight: 2,
    margin: 1
  },
  actionButtonText: {
    color: 'white'
  }
})

export {
  Wrapper as RNDevToolbox
}
