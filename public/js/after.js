$(document).ready(function(){

  navigateTo();

})

function navigateTo() {
  $('nav a').click(function(evt){
    evt.preventDefault();

    $('nav a').each(function(){ $(this).removeClass('active') })
    $(this).addClass('active')
    
  });
}
