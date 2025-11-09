import browser from 'webextension-polyfill'

browser.runtime.onMessage.addListener((message) => {
  console.info('Received message in content script: ', message)
})
