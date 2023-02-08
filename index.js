const fs = require('fs')
const path = require('path')


export default filename =>
        (form, name = 'file', type = 'text/plain') =>
                form.append(
                        name,
                        new Blob(fs.readFileSync(filename), { type }),
                        path.basename(filename),
                )
