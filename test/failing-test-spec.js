'use strict'

const chai = require('chai')
const expect = chai.expect
const Entrada = require('../src/booking.js')

describe('Lakewood', function () {
  it('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)', function () {
    const hotel = Entrada.buscarMaisBarato(['16Mar2009(mon)', '17Mar2009(tues)', '18Mar2009(wed)'])
    expect(hotel).to.equal("Lakewood");
  })
})

describe('Bridgewood', function () {
  it('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)', function () {
    const hotel = Entrada.buscarMaisBarato(['20Mar2009(fri)', '21Mar2009(sat)', '22Mar2009(sun)'])
    expect(hotel).to.equal("Bridgewood");
  })
})

describe('Ridgewood', function () {
  it('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)', function () {
    const hotel = Entrada.buscarMaisBarato(['26Mar2009(thur)', '27Mar2009(fri)', '28Mar2009(sat)'],'reward')
    expect(hotel).to.equal("Ridgewood");
  })
})

describe('datas', function() {
  it('ao receber uma lista de datas retornar dias da semana ou final de semana', function(){
    const valores = Entrada.countWeekend(['26Mar2009(thur)', '27Mar2009(fri)', '28Mar2009(sat)']) 
    expect(valores).to.equal({weekdays: 2, weekends: 1})
  })
})