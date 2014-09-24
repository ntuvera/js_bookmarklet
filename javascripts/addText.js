// function test to replace content_box information IF jquery loaded
function replaceText(){
  if (window.jQuery === undefined || window.jQuery.fn.jquery === undefined){
    alert('this function requires you to load jQuery')
  } else{
    $('#content_box').html('new text loaded with javascript')
  }

}
