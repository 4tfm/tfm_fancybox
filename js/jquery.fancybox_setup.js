$(document).ready(function() {
    $('.fancybox').fancybox();
    $('.fancy-images').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',

        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,

        helpers : {
            title : {
                type : 'inside'
            },
            buttons	: {},
            thumbs : {
                width  : 50,
                height : 50
            }
        }
    });


});