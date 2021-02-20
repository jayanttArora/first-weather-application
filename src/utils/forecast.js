const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=66d9f823e0d8c1c319b080a061697941&query=${latitude},${longitude}&units=f`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Network Unavailable !!', undefined)
        } else if (body.error) {
            callback('Unable to find weather for the given location. Try another search !!')
        } else {
            callback(undefined, `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast