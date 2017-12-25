(function() {

    var slideul = document.querySelector('#category .category-left >ul');

    var outWidth = document.querySelector('.category-left').offsetHeight;

    var ulWidth = document.querySelector('#category .category-left >ul').offsetHeight;

    var slideli = slideul.querySelectorAll('li');

    var liHeight = slideli[0].offsetHeight;


    //为所有的li都加上索引
    for(var i = 0; i < slideli.length ; i++) {
            slideli[i].dataset.index = i;
    }

    var startY = moveY = distanceY = currentY = 0;
    var maxSlide = 200;
    var minSlide = (outWidth - ulWidth)-200;


    // ul拖拽开始
    slideul.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    })

    // ul拖拽移动
    slideul.addEventListener('touchmove', function(e) {

        moveY = e.touches[0].clientY;

        distanceY = moveY - startY;
        
        // 判断是否在正常区域活动
        if((distanceY+currentY) < maxSlide && (distanceY+currentY) > minSlide) {
            slideul.style.transition = 'none';
            slideul.style.transform = 'translateY(' + (distanceY + currentY) + 'px)';
        }
    })

    // ul拖拽结束
    slideul.addEventListener('touchend', function(e) {
        currentY += distanceY;
        
        if ((distanceY + currentY) > 0) {
            currentY = 0;
            slideul.style.transform = 'translateY(' + 0 + 'px)';
            slideul.style.transition = 'all 200ms';
        }else if ((distanceY + currentY) < (outWidth - ulWidth)) {
            currentY = outWidth - ulWidth;
            slideul.style.transform = 'translateY(' + (outWidth - ulWidth) + 'px)';
            slideul.style.transition = 'all 200ms';
        }
    })


    // li点击事件
    slideul.addEventListener('click', function(e) {
        var li = e.target.parentNode;

        for(var i = 0 ; i < slideli.length ; i++) {
            slideli[i].classList.remove('active');
        }

        li.classList.add('active');

        var index = li.dataset['index'];

        if ((-index * liHeight) > minSlide) {
            currentY = (-index * liHeight);
        }

        slideul.style.transform = 'translateY(' + (currentY) + 'px)';

        slideul.style.transition = 'all 200ms';

    })
}());

window.onload = function() {
    var myScroll = new IScroll('.category-right');
}

