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
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth < 850) {
    $('.group h2').on('click', function(){
        console.log('its small');
    })
}

    $('.group h2').on('click', function(){
        var filterGroup = $(this).data('filter');
        console.log(filterGroup);
        $('.filter-list').hide();
        // if(filterGroup === ".about-page") {
        //     $('.all').hide();
        //     console.log('yup its the about page');
        // }
        $(filterGroup).show();       
    })

    $('.menu-toggle').on('click', function(){
        console.log('burger clicked!')
        $('.column-2').toggleClass('slide');
        // $('.qu').toggle();
    })
