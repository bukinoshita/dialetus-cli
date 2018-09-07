# save-local [![Build Status](https://travis-ci.org/bukinoshita/save-local.svg?branch=master)](https://travis-ci.org/bukinoshita/save-local)

> Save stuff locally


## Install

```bash
$ yarn add save-local
```


## Usage

```js
const SaveLocal = require('save-local')

const saveLocal = new SaveLocal('store')

saveLocal.set({ name: 'token', value: 'my-token' })
saveLocal.get('token').then(value => console.log(value))
// => my-token
```


## API

### SaveLocal(input)

Returns a `constructor`

#### input

Type: `string`<br/>
Required

store name

### methods

#### .set([options])

Returns a `promise`

Save and [encrypt](https://github.com/bukinoshita/caesar-encrypt) an item on local store

##### options

Type: `object`<br/>
Required

###### name

Type: `string`<br/>
Required

name of the item to be saved

###### value

Type: `string`<br/>
Required

value of the item to be saved

#### .get(input)

Returns a `promise`

Get and [dencrypt](https://github.com/bukinoshita/caesar-encrypt) an item saved on local store

##### input

Type: `string`<br/>
Required

name of the item saved

#### .remove(input)

Returns a `promise`

Remove an item saved on local store

##### input

Type: `string`<br/>
Required

name of the item saved

#### .list()

Returns a `promise`

Get an array with all `names` and `values`


## Related

- [save-me](https://github.com/bukinoshita/save-me) — CLI for this module
- [git-labels](https://github.com/bukinoshita/git-labels) — Creating Github issue labels
- [git-labels-cli](https://github.com/bukinoshita/git-labels-cli) — Creating Github issue labels CLI


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
