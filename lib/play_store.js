'use strict'

const cheerio = require('cheerio')
const log = require('fancy-log')
const got = require('got')

class PlayStore {
  constructor({ appId, locale }) {
    this.endpoint =
      `https://play.google.com/store/apps/details?id=${appId}&hl=${locale}`
  }
}

module.exports = PlayStore
