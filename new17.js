var sekiller=['https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-Ultra-3up-hero-220907.jpg.landing-big_2x.jpg','https://149357759.v2.pressablecdn.com/wp-content/uploads/2022/01/Apple-Series-8-Renders-by-Ian.jpg','https://cdn.pocket-lint.com/r/s/1201x/assets/images/158726-smartwatches-news-feature-apple-watch-series-8-release-date-specs-rumours-and-news-image6-9odseec2l7.jpg','https://cdn.mos.cms.futurecdn.net/AxfXqyG53ZRj3EQhfTwu5S-1200-80.jpg'];
var littleDiv=document.querySelector('.little-div');

var mdl=document.querySelector('.mdl');
var index=0;
for (let i = 0; i < sekiller.length; i++) {
    littleDiv.innerHTML+=`
    <img src="${sekiller[i]}" onclick="tik(this)">
    `
}

function tik(x) {
    mdl.src=x.src
}
function sag() {
    if(index==sekiller.length-1){
        index=0
    }
    else{
        index++;
    }
    mdl.src=sekiller[index]

}
function sol() {
    if(index==0){
        index=sekiller.length-1;
    }
    else{
        index--;
    }
    mdl.src=sekiller[index]
    
}
setInterval(sag,2000);

var mood=document.querySelector('.mood');
var imge=document.querySelector('.imge');

var littleDivimg=document.querySelectorAll('.little-div img');
// littleDivimg.forEach(sekil=>{
//     sekil.addEventListener('click',function(){
//         // mood.style.display='block';
//         imge.src=sekil;
//         console.log(moodimg);
//     })
// })