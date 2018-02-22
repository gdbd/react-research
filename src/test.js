import {join} from 'lodash'
import {log} from './inc.js'

const arr = ["hello","webpack", "!"]


log("hello webpack!")

log(_(["hello","webpack", "!"]).join(' '))

log(arr.reduce((p, c) => p += c, ""))

//[...arr].map((x) => a(x))

log("new string!")