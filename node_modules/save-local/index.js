'use strict'

const { join } = require('path')
const { homedir } = require('os')
const storage = require('node-persist')
const { encrypt, decrypt } = require('caesar-encrypt')

class SaveLocal {
  constructor(store) {
    const s = `.${store}`

    storage.initSync({
      dir: join(homedir(), s)
    })
  }

  get(item) {
    return storage.getItem(item).then(res => {
      if (res) {
        return decrypt(res, 20)
      }

      return false
    })
  }

  set({ name, value }) {
    return storage.setItem(name, encrypt(value, 20))
  }

  remove(name) {
    return storage.removeItem(name)
  }

  list() {
    return new Promise(resolve => {
      const packages = storage.keys()
      const list = []
      packages.forEach(async name => {
        const value = await this.get(name)
        list.push({ name, value })
        resolve(list)
      })
    })
  }
}

module.exports = SaveLocal
