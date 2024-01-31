const urlAddress = 'https://example.com:8080/path/name?query=123#hash'

const parseUrl = function (url) {
  const parsedUrl = new URL(url || window.location.href)
  return {
    href: parsedUrl.href,
    origin: parsedUrl.origin,
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    pathname: parsedUrl.pathname,
    search: parsedUrl.search,
    hash: parsedUrl.hash,
  }
}

console.log(parseUrl(urlAddress))

const parseUrlWithWindowLocation = function () {
  return {
    href: window.location.href,
    protocol: window.location.protocol,
    host: window.location.host,
    hostname: window.location.hostname,
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    origin: window.location.origin,
  }
}

console.log(parseUrlWithWindowLocation())
