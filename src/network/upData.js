import {request} from "./request";

export function getUPDATA(uid) {
  return request({
    url: '/api/data/' + uid
  })
}
