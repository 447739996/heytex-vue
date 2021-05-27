import request from "./request";

const imgurl = '/apiheytex/basic/accessoryinfo/image?rowguid='
const menuurl = '/apiheytex/manage/cataloginfo/tree?rowguid=top'
const contacturl = '/apiheytex/manage/messageinfo/sumbit'
const jobinfourl = '/apiheytex/manage/jobinfo/all'
const searchurl = '/apiheytex//manage/cataloginfo/search?limit=10&page=1'
const homenewsurl = '/apiheytex/manage/newsinfo/recommend?rowguid=1'
const homegoodproducturl = '/apiheytex/manage/cataloginfo/excellent'
const homearticleurl = '/apiheytex/manage/articleinfo/recommend?rowguid=1'
const newsurl = '/apiheytex/manage/newsinfo/pagination?limit=10&page='
const newsdetailurl = '/apiheytex/manage/newsinfo/rowguid?rowguid='
const articleurl = '/apiheytex/manage/articleinfo/rowguid?rowguid='
const childrenarticleurl = '/apiheytex/manage/articleinfo/children?rowguid='



export function childrenarticleapi(e) {
    return request.get(childrenarticleurl + e)
}
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
        url: '/apiheytex/manage/cataloginfo/homerecommend',
        method: 'get',
    })
}
