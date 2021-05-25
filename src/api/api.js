import request from "./request";

const imgurl = '/apiproxy/basic/accessoryinfo/image?rowguid='
const menuurl = '/apiproxy/manage/cataloginfo/tree?rowguid=top'
const contacturl = '/apiproxy/manage/messageinfo/sumbit'
const jobinfourl = '/apiproxy/manage/jobinfo/all'
const searchurl = '/apiproxy//manage/cataloginfo/search?limit=10&page=1'
const homenewsurl = '/apiproxy/manage/newsinfo/recommend?rowguid=1'
const homegoodproducturl = '/apiproxy/manage/cataloginfo/excellent'
const homearticleurl = '/apiproxy/manage/articleinfo/recommend?rowguid=1'
const newsurl = '/apiproxy/manage/newsinfo/pagination?limit=10&page='
const newsdetailurl = '/apiproxy/manage/newsinfo/rowguid?rowguid='
const articleurl = '/apiproxy/manage/articleinfo/rowguid?rowguid='



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