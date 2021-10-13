$(document).ready(function(){
    //image-slider
    $('.next').on('click',function(){
        let nowImage = $('.current')
        let nextImage = nowImage.next()

        if(nextImage.length){
            nowImage.removeClass('current').css('z-index',-100);
            nextImage.addClass('current').css('z-index', 100);
        }else{
            let firstImage = nowImage.prevAll().last();
            nowImage.removeClass('current').css('z-index',-100);
            firstImage.addClass('current').css('z-index', 100);
        }
    })

    $('.prev').on('click',function(){
        let nowImage = $('.current')
        let prevImage = nowImage.prev()

        if(prevImage.length){
            nowImage.removeClass('current').css('z-index',-100)
            prevImage.addClass('current').css('z-index', 100)
        }else{
            let lastImage = nowImage.nextAll().last()
            nowImage.removeClass('current').css('z-index',-100)
            lastImage.addClass('current').css('z-index', 100)
        }
    })
})




