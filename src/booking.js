'use sctrict'
const data = require('./data.json')
const isWeekend = require('date-fns/isWeekend')

module.exports = {
    buscarMaisBarato: (dates, userType) => {

        const {weekdays, weekends} = this.countWeekend(dates)

        return data
            .map(
                i => userType
                    ? ({ name: i.name, stars: i.stars, rate: (i.weekPromo * weekdays) + (i.weekendPromo * weekends) })
                    : ({ name: i.name, stars: i.stars, rate: (i.week * weekdays) + (i.weekend * weekends) })
            )
            .sort(
                (a, b) => a.rate - b.rate || b.stars - a.stars
            )
            .shift().name
    },
    countWeekend: dates => {

        let weekdays = 0
        let weekends = 0
        dates.map(date => {

            isWeekend(new Date(date)) ? weekends++ : weekdays++
        })
        return {weekdays, weekends}
    }
}