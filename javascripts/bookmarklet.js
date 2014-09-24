// simple function to determine if and what version of jQuery is loaded
function jQueryCheck(){
  // check for jQuery and/or version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
     alert('jquery not present')
  } else {
    alert('jquery already loaded version: ' + window.jQuery.fn.jquery);
  }
}

// function to create floating div over any current page
// will use javascript to pull title and url and place into form

  function initMyBookmarklet(){
    // (window.myBookmarklet = function(){
      url = document.location.href;
      title = document.title;
      // javaScript code goes here
      var $frame = $('<div>');
      $frame.attr('id','frame');
      var $frame_veil = $('<div>');
      $frame_veil.attr('id','frame_veil').text('Loading...');
      // $frame_veil.text('Enable iFrames.');
      var $iframe = $('<iframe>');
      $iframe.attr('style', '');
      $iframe.attr('onload', "$('#frame iframe').slideDown(500)");
      $iframe.text('Enable iFrame');
      var url = 'bookmarklet.html';
      // var url = 'http://localhost:3000/bookmarklet' + '&ouput=embed';
      // var url = 'http://localhost:3000/bookmarklet' +'?from=iframe';
      // $iframe.attr('src', url);
      $('body').append($frame);
      $frame.append($frame_veil);
      $frame_veil.append($iframe);
      $('#frame_veil').fadeIn(750);

}
    // })
  // }
// function includes checker for jQuery and loads requestions version v
function jQueryLoad(){
  // check for jQuery at least version 1.11.1
  var v = '2.1.1';

  // check for jQuery load and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v){
    var done = false;
    var script = document.createElement('script');
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    // not sure about the onreadystatechange function, can't access readyState solo
    // necessary with code since manually calling jQueryLoad()?
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        var done = true;
        console.log('jQuery is loaded version: ' + jQuery.fn.jquery);
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    console.log('jQuery is active already: ' + jQuery.fn.jquery);
    initMyBookmarklet();
  }
}




// grabInfo() grabs relevant data and appends to div with id='content_box'
function grabInfo(){
  var url = document.location.href;
  var title = document.title;
  $('#content_box').html(url + ' --- ' + title);
}

// run function to add jQuery when bookmarklet javascript added, create iframe next
jQueryLoad();
