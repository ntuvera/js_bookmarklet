/* for this purpose, jQuery already loaded, but for development/production
must add code to load jQuery reference: http://www.smashingmagazine.com/2010/05/23/make-your-own-bookmarklets-with-jquery/
*/

// grabInfo() grabs relevant data and appends to div with id='content_box'
function grabInfo(){
  var url = document.location.href
  var title = document.title
  $('#content_box').html(url + ' --- ' + title);
}
