'use strict'

const log = require('fancy-log')
const fecha = require('fecha')
const sleep = require('promise.sleep')
const { WebClient } = require('@slack/client')

class Slack {
  constructor({ token, channel, botUser }) {
    this.client = new WebClient(token)
    this.channel = channel
    this.botUser = botUser
  }

  async post(reviews) {
    for (const review of reviews) {
      const attachments = [{
        fields: [
          {
            title: 'タイトル',
            value: review.title || '(無し)',
            short: true,
          },
          {
            title: '投稿日',
            value: fecha.format(review.date, 'YYYY年MM月DD日'),
            short: true,
          },
          {
            title: '評価',
            value: this.ratingToStar(review.rating, 5),
            short: true,
          },
          {
            title: '投稿者',
            value: review.author || '(匿名)',
            short: true,
          },
          {
            title: 'コメント',
            value: review.body,
            short: false,
          },
        ],
      }]
      const opts = Object.assign({}, this.botUser, { attachments })
      await this.client.chat.postMessage(this.channel, null, opts)
      await sleep(1000)
    }
  }

  ratingToStar(val, max) {
    let result = ''
    for (let i = 0; i < val; ++i) result += '★'
    for (let i = 0; i < max - val; ++i) result += '☆'
    return result
  }
}

module.exports = Slack
