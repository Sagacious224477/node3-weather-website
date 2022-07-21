const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=ff5438bf8b67106b6953c19bde6b7a75/' + latitude + ',' + longitude
  request({ url, json: true}, (error, {body}) => {
    if(error) {
      callback('Unable to connect to location services!', undefined)
    } else if(body.error) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, 'It is curreently ' + body + ' degrees out. There is a 0% chance of rain.')
    }

  })
}

module.exports = forecast