# node-add-file

Elegantly add files to `FormData` objects 📋.


## Installation

```sh
npm i node-add-file
```


## Usage

Create a "file adder".

```js
import addFile from 'node-add-file'

const addReadme = addFile('./README.md')
```


Use the adder to add `README.md` to one or more `FormData` objects.

```js
addReadme(formA) // Adds README.md to formA.

addReadme(formB) // Adds README.md to formB.

addReadme(formA, name = 'README') // Adds README.md to formA with name `README`.

addReadme(formA, name = 'README', type = 'text/markdown') // Also sets the mime type to `text/markdown`
```

The default name is `file` and the default mime type is `text/plain`.


## API

### addFile(filename)

Returns a file adder which can be used to add the file one or more `FormData` objects.
