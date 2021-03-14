/* global AbortController, fetch, Request */

import queryString from 'query-string'
import { getNode } from '@core/utils'

const POST = (data) => ({
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})

export const api = {
  getAccountInfo({ address }) {
    const url = getNode()
    const data = {
      action: 'account_info',
      account: address,
      representative: true,
      pending: true
    }
    return { url, ...POST(data) }
  },

  getRepresentative({ address }) {
    const url = `https://mynano.ninja/api/accounts/${address}`
    return { url }
  },

  getMarkets() {
    const url =
      'https://http-api.livecoinwatch.com/markets?' +
      queryString.stringify({
        currency: 'USD',
        limit: 100,
        sort: 'volume',
        order: 'descending',
        coin: 'NANO'
      })
    return { url }
  },

  getNetwork() {
    const url = 'https://nanolooker.com/api/market-statistics'
    return { url }
  }
}

export const apiRequest = (apiFunction, opts /* , token */) => {
  const controller = new AbortController()
  const request = dispatchFetch.bind(null, {
    credentials: 'omit',
    referrer: 'no-referrer',
    mode: 'cors',
    signal: controller.signal,
    ...apiFunction(opts)
  })
  return { abort: controller.abort.bind(controller), request }
}

export const dispatchFetch = async (options) => {
  const request = new Request(options.url, options)
  const response = await fetch(request)
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else {
    const res = await response.json()
    const error = new Error(res.error || response.statusText)
    error.response = response
    throw error
  }
}
