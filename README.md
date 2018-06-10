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



