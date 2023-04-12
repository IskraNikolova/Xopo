import axios from 'axios'

import { c } from './../utils'
import { _fromWei } from './network'
// const { network } = require('./config').default
const endpoint = 'https://api.avax.network:443/ext/bc/C/rpc'
let id = 1
axios.defaults.headers[c.contentTypeHeader] = c.contentTypeValue

const body = (method, params = {}) => {
  return {
    jsonrpc: c.jsonrpc,
    method,
    params,
    id: id++
  }
}

export const request = async (endpoint, body) => {
  try {
    const response = await axios.post(endpoint, body)
    return response
  } catch (err) {
    console.log(err)
    return {
      data: {
        error: err
      }
    }
  }
}

export const _getBalance = async ({ address }) => {
  try {
    const req = await request(endpoint,
      body(c.ethGetBalance, c.paramsForBalance(address)))

    if (!req.data) {
      throw new Error()
    }

    let balance = parseInt(req.data.result, 16)
    balance = _fromWei(balance.toString())
    return balance
  } catch (err) {
    console.error(err)
    return null
  }
}
