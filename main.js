$('.filter-list a').on('click', function(){
    const filter = $(this).data('filter');
    $('.all').hide();
    $('.open').hide();
    $(filter).css('display', 'flex');
    $('.filter-list a').removeClass('selected ');
    $(this).addClass('selected');
    $(this).css("margin-top", "1px");  
})
let isScreenSizeSmall = true;
$('.contact-box')
function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.filter-list').hide();
        isScreenSizeSmall = true;
    } else {
        $('.filter-list').show();
        isScreenSizeSmall = false;
    }
  }
  
  var x = window.matchMedia("(max-width: 850px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  
    $('.group h2').on('click', function(){
        if(isScreenSizeSmall){
            console.log('its small');
            var filterGroup = $(this).data('filter');
            console.log(filterGroup);
            $('.filter-list').hide();
            $(filterGroup).show(); 
        }else{
            console.log('its big');
            $('.filter-list').show();
        }      
    })

    
    $('.condensed-about h2').on('click', function() {
        const filter = $(this).data('filter')
        $('.all').hide();
        $('.open').hide();
        $(filter).css('display', 'flex');
        $('.arrow').hide();
        $('.filter-list a').removeClass('selected ');
        $(this).addClass('selected');
        $(this).css("margin-top", "1px");        
    })





    $('.menu-toggle').on('click', function(){
        console.log('burger clicked!')
        $('.column-2').toggleClass('slide');
        // $('.qu').toggle();
    })
