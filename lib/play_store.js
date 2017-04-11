'use strict'

const cheerio = require('cheerio')
const log = require('fancy-log')
const fecha = require('fecha')
const got = require('got')
const v = require('voca')

class PlayStore {
  constructor({ appId, locale }) {
    this.endpoint =
      `https://play.google.com/store/apps/details?id=${appId}&hl=${locale}`
    this.ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
  }

  async fetch() {
    const headers = { 'User-Agent': this.ua }
    const res = await got(this.endpoint, { headers })
    const $ = cheerio.load(res.body)
    const reviews = $('.single-review').toArray()
      .map(el => {
        const author = v.trim($('.author-name', el).text())
        const date = fecha.parse(v.trim($('.review-date', el).text()), 'YYYY年M月D日')
        const rating = parseInt($('.current-rating', el).css('width'), 10) / 20
        const title = v.trim($('.review-title', el).text())
        const body = $('.review-body', el).contents().toArray()
          .filter(content => content.type == 'text')
          .map(content => v.trim(content.data))
          .join('')
        return { author, date, title, body, rating }
      })
    return reviews
  }
}

module.exports = PlayStore
