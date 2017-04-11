'use strict'

const log = require('fancy-log')
const { WebClient } = require('@slack/client')

class Slack {
  constructor({ token, channel, botUser }) {
    this.client = new WebClient(token)
    this.channel = channel
    this.botuser = botUser
  }

  async post(reviews) {
  }
}

module.exports = Slack
