import request from "./request";

const imgurl = '/api/basic/accessoryinfo/image?rowguid='
const menuurl = '/api/manage/cataloginfo/tree?rowguid=top'
const contacturl = '/api/manage/messageinfo/sumbit'
const jobinfourl = '/api/manage/jobinfo/all'
const searchurl = '/api//manage/cataloginfo/search?limit=10&page=1'
const homenewsurl = '/api/manage/newsinfo/recommend?rowguid=1'
const homegoodproducturl = '/api/manage/cataloginfo/excellent'
const homearticleurl = '/api/manage/articleinfo/recommend?rowguid=1'
const newsurl = '/api/manage/newsinfo/pagination?limit=10&page='
const newsdetailurl = '/api/manage/newsinfo/rowguid?rowguid='
const articleurl = '/api/manage/articleinfo/rowguid?rowguid='



export function articleapi(e) {
    return request.get(articleurl + e)
}
export function newsdetailapi(e) {
    return request.get(newsdetailurl + e)
}
export function newsapi(e) {
    if (e == '' || e == undefined || e == null) {
        return request.get(newsurl + 1)

    } else {
        return request.get(newsurl + e)

    }
}
export function homearticleapi() {
    return request.get(homearticleurl)
}
export function homegoodproductapi() {
    return request.get(homegoodproducturl)
}
export function homenewsapi() {
    return request.get(homenewsurl)
}
export function searchapi(e) {
    return request.get(searchurl + '&text=' + e)
}
export function imgapi(e) {
    return request.get(imgurl + e)
}
export function menuapi() {
    return request.get(menuurl)
}
export function contactapi(e) {
    return request.post(contacturl, e)
}
export function jobinfoapi() {
    return request.get(jobinfourl)
}

export function homeRecommend() {
    return request({
        url: '/api/manage/cataloginfo/homerecommend',
        method: 'get',
    })
}
