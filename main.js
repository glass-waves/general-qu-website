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
//vanilla javascript
// const all = document.getElementById('.all');

// document.querySelectorAll('.cycle-slideshow').forEach(item => {
//     item.addEventListener('click', event => {
//     console.log(item);
//     const selected = document.getElementById(item);
//     all.style.display = 'none';
//     selected.style.display = 'block';




//     })
//   })