slack-playstore-reviews
-----------------------

:star: Post Google Play reviews to Slack

![](ss.png)

## Requirements

- Node v7.6.0 ~
- Redis

## Getting Started

```
$ git clone https://github.com/pine/slack-playstore-reviews.git
$ cd slack-playstore-reviews
$ npm install
$ SLACK_API_TOKEN=XXX bin/slack-playstore-reviews
```

## Options
You can set any options uses environment variables.

- `APP_ID` Google Play Application ID **(required)**
- `SLACK_API_TOKEN` Slack API token **(required)**
- `SLACK_USERNAME` Slack username
  - Default: `'Google Play'`
- `SLACK_ICON_URL` Slack icon URL
  - Default: `''`
- `REDIS_PORT` Redis port number
  - Default: `6379`
- `REDIS_HOST` Redis host name
  - Default: `'127.0.0.1'`
- `REDIS_DATABASE` Redis database number
  - Default: `0`
- `REDIS_PREFIX` Redis key prefix
  - Default: `''`
- `AFTER_AT` Initial start date to search for a review
  - Default: `1970-01-01`

## License
Public Domain
