$(document).ready(function(){
    $('.ft-zoom').on('mouseenter', function(){
        let Iurl = $(this).children('img').attr('src');

        $(".ft-zoom").izoomify({
          magnify: 2,
          duration: 450,
          url: Iurl,
        });
    })

    $(".ft-thumbnail > li > img").on('click', function(){
        let img_url = $(this).attr("src");
        let main_img_url = $(this).parent('li').parent('.ft-thumbnail').siblings('.ft-zoom').children('img').attr('src');
        $(this).parent('li').parent('.ft-thumbnail').siblings('.ft-zoom').children('img').attr('src', img_url);
        $(this).attr("src", main_img_url);
    });
})