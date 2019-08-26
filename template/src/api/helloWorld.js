import fetch from '@/utils/fetch'

export function getData (data) {
  return fetch({
    url: 'url',
    method: 'get',
    data: data
  })
}
