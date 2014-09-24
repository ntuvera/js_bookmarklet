// for this purpose, jQuery already loaded, but for development/production
// must add code to load jQuery reference: http://www.smashingmagazine.com/2010/05/23/make-your-own-bookmarklets-with-jquery/


  // minimm version of jQuery req'd
  var v = '1.11.2';

  // check for inclusion and/or version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement('script');
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/"+ v +"/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        var done = true;
        initMyBookmarklet();
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function initMyBookmarklet() {

      // run code here
      alert('addJquery.js run')
    };
  };


// grabInfo() grabs relevant data and appends to div with id='content_box'
function grabInfo(){
  var url = document.location.href;
  var title = document.title;
  $('#content_box').html(url + ' --- ' + title);
}


// simple function to determine if and what version of jQuery is loaded
function jQueryCheck(){
  // check for jQuery and/or version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
     alert('jquery not present')
  } else {
    alert('jquery already loaded version: ' + window.jQuery.fn.jquery);
  }
}

// function includes checker for jQuery and loads requestions version v
function jQueryLoad(){
  // check for jQuery at least version 1.11.1
  var v = '2.1.1';

  // check for jQuery load and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v){
     done = false;
     script = document.createElement('script');
    script.src = "http:/ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    // not sure about the onreadystatechange function, can't access readyState solo
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        var done = true;
        console.log('jQuery is loaded version: ' + jQuery.fn.jquery);
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }

}
function initMyBookmarklet() {
  alert('activated initMyBookmarklet js code');
  // js code here
}
