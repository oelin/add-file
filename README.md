# add-file

Elegantly add files to `FormData` objects 📋.


## Installation

```sh
npm i add-file
```


## Usage

Create a "file adder".

```js
import addFile from 'add-file'

const addReadme = addFile('./README.md')
```


Use the adder to add `README.md` to one or more `FormData` objects.

```js
addReadme(formA) // Adds README.md to formA.

addReadme(formB) // Adds README.md to formB.

addReadme(formA, { type: 'text/markdown' }) // Adds README.md to formA with mime type `text/markdown`.

addReadme(formA, { name: 'README' }) // Adds README.md to formA with the field name `README`.
```


## API

### addFile(filename)

Returns a file adder which can be used to add the file one or more `FormData` objects.
