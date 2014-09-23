/* for this purpose, jQuery already loaded, but for development/production
must add code to load jQuery reference: http://www.smashingmagazine.com/2010/05/23/make-your-own-bookmarklets-with-jquery/
*/

// grabInfo() grabs relevant data and appends to div with id='content_box'
function grabInfo(){
  var url = document.location.href
  var title = document.title
  $('#content_box').html(url + ' --- ' + title);
}

function jQueryCheck(){
    var v = '1.11.1';

  // check for inclusion and/or version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
     done = false;
     script = document.createElement('script');
     // ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/' + v + '/jquery.min.js';
    document.body.appendChild(script);
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")){
      var done = true
      alert('no jquery here');
      initMyBookmarklet();
      }
    }
  } else {
    initMyBookmarklet();
    alert('test for bookmarklet');
  }
}

function initMyBookmarklet() {
  alert('activate bookmarklet js code');
  // js code here
}
