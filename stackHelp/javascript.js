$(document).ready(function(){
  $('#myonoffswitch').on("click", function(){
    if($("#myonoffswitch").is(':checked') == false) {
        $('.container_slide_actu').animate({
        left : 0}, 700);
    }else{
        console.log("uncheck")
      $('.container_slide_actu').animate({
        left : '-100%'}, 700);
    }
  });
});