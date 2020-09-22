$('.filter-list a').on('click', function(){
    var filter = $(this).data('filter');
    console.log(filter);
    $('.all').hide();
    $('.open').hide();
    $(filter).show();
    $('.arrow').show();
    $('.filter-list a').removeClass('selected ');
    $(this).addClass('selected');
    $(this).css("margin-top", "1px");
    if($(this).hasClass("noarrow")){
        $('.arrow').hide();
    }
    
    return false
    
})

  
    $('.group h2').on('click', function(){
        if(screen.width < 850){
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
    function myFunction(x) {
        if (x.matches) { // If media query matches
            $('.filter-list').hide();
        } else {
            $('.filter-list').show();
        }
      }
      
      var x = window.matchMedia("(max-width: 850px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes




    $('.menu-toggle').on('click', function(){
        console.log('burger clicked!')
        $('.column-2').toggleClass('slide');
        // $('.qu').toggle();
    })
