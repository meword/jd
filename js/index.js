// 顶部导航栏
(function() {

    window.addEventListener('load',function() {

    })

    var slideH = document.querySelector('#slide').offsetHeight;
    var topbar = document.querySelector('#topbar');

    window.addEventListener('scroll', function() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var parent = (scrollTop / slideH)
        if(scrollTop <= slideH) {
            topbar.style.backgroundColor = 'rgba(255,0,0,'+parent+')'
        }else{
            topbar.style.backgroundColor = 'rgba(255,0,0,1)'
        }
    })

}());


// 秒杀倒计时
(function() {
    var timeId = setInterval(countdown,1000);

    var li = document.querySelectorAll('#seckill ul li');

    function countdown() {

        var future = new Date('2017-12-22 22:00:00').getTime()/1000;

        var nowTime = new Date().getTime()/1000;

        var differTime = future - nowTime;

        if(differTime <= 0) {
            clearInterval(timeId);
            differTime = 0;
        }

        var hour = Math.floor(differTime / 3600);

        var min = Math.floor(differTime / 60 % 60 );

        var sec = Math.floor(differTime % 60);

        li[0].innerHTML = Math.floor(hour / 10);
        li[1].innerHTML = Math.floor(hour % 10);
        li[3].innerHTML = Math.floor(min / 10);
        li[4].innerHTML = Math.floor(min % 10);
        li[6].innerHTML = Math.floor(sec / 10);
        li[7].innerHTML = Math.floor(sec % 10);
    }
}());


(function() {
    var input = document.querySelector('#topbar input');
    console.log(input);
    input.onfocus = function() {
        window.location.href = './category.html';
    }
}());
// 轮播图
// (function() {
//     var ul = document.querySelector('#slide ul');

//     var olLi = document.querySelectorAll('#slide ol li');

//     var ulWidth = document.querySelector('#slide').offsetWidth;

//     var timerId = setInterval(autoPlay,3000);

//     var index = 1;

//     var startX = moveX = distance = 0;

//     // 当transition结束时
//     ul.addEventListener('transitionend', function() {
//         changeIndex();
//         pointBg();
//     });

//     // 自动轮播
//     function autoPlay() {
//         index++;

//         ul.style.transition = 'all 200ms';

//         ul.style.transform = 'translateX('+(-index * ulWidth)+'px)';

//     };

//     // 当index到边界的时候
//     function changeIndex() {
//         if(index >= 9) {

//             index = 1;

//             ul.style.transition = 'none';

//             ul.style.transform = 'translateX('+(-index * ulWidth)+'px)';
//         }

//         if(index <= 0) {
//             index = 8;

//             ul.style.transition = 'none';

//             ul.style.transform = 'translateX('+ (-index * ulWidth) +')'
//         }
//     };

//     // 下方原点变色
//     function pointBg() {
//         for (var i = 0; i < olLi.length; i++) {
//             olLi[i].classList.remove('active');
//         }
//         olLi[index - 1].classList.add('active');
//     };

//     // ul拖拽开始
//     ul.addEventListener('touchstart', function(e) {
//         clearInterval(timerId);

//         startX = e.touches[0].clientX;
//     })

//     // ul拖拽移动 
//     ul.addEventListener('touchmove', function(e) {
//         moveX = e.touches[0].clientX;

//         distance = moveX - startX;

//         ul.style.transition = 'none';

//         ul.style.transform = 'translateX('+(-index * ulWidth +distance)+'px)'

//         console.log('12');
//     })

//     // ul拖拽结束
//     ul.addEventListener('touchend', function() {
//         if(Math.abs(distance) > (ulWidth / 3)) {
//             if(distance > 0) {
//                 index--;
//             }else {
//                 index++;
//             }
//             ul.style.transition = 'all 200ms';

//             ul.style.transform = 'translateX(' + (-index * ulWidth) + 'px)';

//         }else {
//             ul.style.transition = 'all 200ms';

//             ul.style.transform = 'translateX(' + (-index * ulWidth) + 'px)';
//         }

//         timerId = setInterval(autoPlay, 3000);

//     })
// }())