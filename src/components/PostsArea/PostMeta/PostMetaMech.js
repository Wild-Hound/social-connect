

export function likePost(e,likeCount,func){
    let x;
    e.target.classList.toggle("liked") ? x = likeCount + 1 : x = likeCount - 1
    func(x)
}
export function sharePost(e){
    e.target.classList.toggle("shared")
    console.log("share action will be implemented here sharePost")
}
export function commentPost(e){
    e.target.classList.toggle("commented")
    console.log("comment action will be implemented here commentPost")
}
export function singlePost(e){
    console.log("single post action will be implemented here singlePost")
}