$('.filter-list a').on('click', function(){
    var filter = $(this).data('filter')
    console.log(filter)
    $('.all').hide()
    $('.open').hide()
    
    $(filter).show()
    $('.arrow').show()
    $('.filter-list a').removeClass('selected ')
    $(this).addClass('selected')
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