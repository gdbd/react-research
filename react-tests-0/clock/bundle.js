(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//const _ = require("lodash")

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const civilHours = clockTime => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
})

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? "PM" : "AM"
})

const display = target => time => target(time)

const formatClock = format => 
    time => format.replace("hh", time.hours)
                  .replace("mm", time.minutes)
                  .replace("ss", time.seconds)
                  .replace("tt", time.ampm)

//log(formatClock("hh-mm-ss tt")(civilHours(appendAMPM(serializeClockTime(getCurrentTime())))))

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: _.padStart(clockTime[key],2,'0')
})

//log(formatClock("hh-mm-ss tt")(prependZero("hours")( civilHours(appendAMPM(serializeClockTime(getCurrentTime()))))))

const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg)

const doubleDigits = compose(prependZero("hours"), prependZero("minutes"),prependZero("seconds"))

const convertToCivil = clockTime => compose(serializeClockTime, appendAMPM, civilHours, 
    doubleDigits,
    formatClock("hh-mm-ss tt"))(clockTime)


//compose(convertToCivil, display(log))(getCurrentTime())


const startClock = () =>
 setInterval(
     () => compose(clear, compose(convertToCivil, display(log))(getCurrentTime())),
     oneSecond())

startClock()






},{}]},{},[1]);
