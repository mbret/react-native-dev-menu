# rn-dev-toolbox

[![Build Status](https://travis-ci.org/mbret/rn-dev-toolbox.svg?branch=master)](https://travis-ci.org/mbret/rn-dev-toolbox)
[![Coverage Status](https://coveralls.io/repos/github/mbret/rn-dev-toolbox/badge.svg?branch=master)](https://coveralls.io/github/mbret/rn-dev-toolbox?branch=master)
[![npm downloads](https://img.shields.io/npm/dt/rn-dev-toolbox.svg)](https://www.npmjs.com/package/rn-dev-toolbox)

**DISCLAIMER:** The documentation is still being written and is coming soon!

<p align="center">
  <img src="https://github.com/mbret/rn-dev-toolbox/raw/master/docs/demo.gif">
</p>

## API

### .open() / .close() / .toggle()
Open, close or toggle the toolbox
````javascript
this.rnToolbox.open()
this.rnToolbox.close()
this.rnToolbox.toggle()
````

### .registerAction(action: object|array) -> void
Register an action or an array of action.
````javascript
this.rnToolbox.registerAction({
    name: 'clearStorage',
    label: 'Clear storage', // optional
    task: () => AsyncStorage.clear()
})
````

### .processAction(name: string) -> void
Execute one of your actions
````javascript
this.rnToolbox.processAction('clearStorage')
````



