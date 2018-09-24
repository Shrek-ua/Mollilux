$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/* 
documentation : http://fancyapps.com/fancybox/#docs 
*/
$(document).ready(function() {
    $('.flash').fancybox();
    $(".fancybox").fancybox({
      openEffect	: 'fade', /* none, fade, elastic */
      closeEffect	: 'fade',
      openSpeed :  1000, /* ms, "slow", "normal", "fast"*/
      closeSpeed : 1000,
      /* mouseWheel : false,*/
      helpers : {
        /*title : null */
        title : {
          type : 'inside' /* 'float', 'inside', 'outside', 'over', 'null' */
        }
      }
    });
    $(".fancybox-iframe").fancybox({
      scrolling : 'auto', /*  'auto', 'yes', 'no' or 'visible'	*/
      /* preload   : true*/
    });
  })