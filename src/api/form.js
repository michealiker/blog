import request from '@/utils/request'

export function articlePublish(params) {
  return request({
    url: '/admin/article/publish',
    method: 'post',
    data: params
  })
}
