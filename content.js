// window.onload=()=>{
//     const mutationObserver = new MutationObserver(function(mutations){
//         mutations.forEach(mutation => {
//             if(mutation.target && mutation.target.innerText && mutation.target.innerText.indexOf("Skip Ad" )!= -1) {
//                 mutation.target.click()
//                 console.log("ad skipped")
//             }
//         })
//     })
//     mutationObserver.observe(document.body,{attributes:true, subtree:true, childList:true, characterData:true})
// }
// 
window.onload= () =>{
    document.querySelectorAll("a").forEach(element => {
       if(element.href.includes('/direct/') === false){
        element.parentNode.parentNode.remove()
       }
    })

}

function gotoInbox(){
    function getCurrentURL () {
        return window.location.href
      }
      // Example
      const url = getCurrentURL()
      console.log(url)
    if(document.location.pathname.includes('/direct/') === false ) {
        window.location.replace("https://www.instagram.com/direct/inbox/");
    }
}
gotoInbox()
