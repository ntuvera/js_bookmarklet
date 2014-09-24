// simple function to determine if and what version of jQuery is loaded
function jQueryCheck(){
  // check for jQuery and/or version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
     alert('jquery not present')
  } else {
    alert('jquery already loaded version: ' + window.jQuery.fn.jquery);
  }
}

  function initMyBookmarklet(){
    // (window.myBookmarklet = function(){
      url = document.location.href;
      title = document.title;
      // javaScript code goes here
       $frame = $('<div>');
      $frame.attr('id','wikiframe');
       $frame_viel = $('<div>');
      $frame_viel.attr('id','wikiframe_viel').text('Loading...');
       $iframe = $('<iframe>');
      var url = 'http://localhost:3000/bookmarklet';
      // var url = 'http://localhost:3000/bookmarklet' + '&ouput=embed';
      // var url = 'http://localhost:3000/bookmarklet' +'?from=iframe';
      $iframe.attr('src', url);
      $('body').append($frame);
      $frame.append($frame_viel);
      $frame_viel.append($iframe);
  //     $("body").append("\
  //     <div id='wikiframe'>
  //       <div id='wikiframe_veil' style=''>\
  //         <p>Loading...</p>\
  //       </div>\
  //       <iframe src='http://en.wikipedia.org/w/index.php?&search="+s+"' onload=\"$('#wikiframe iframe').slideDown(500);\">Enable iFrames.</iframe>\
  //       <style type='text/css'>\
  //         #wikiframe_veil { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(255,255,255,.25); cursor: pointer; z-index: 900; }\
  //         #wikiframe_veil p { color: black; font: normal normal bold 20px/20px Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; width: 10em; margin: -10px auto 0 -5em; text-align: center; }\
  //         #wikiframe iframe { display: none; position: fixed; top: 10%; left: 10%; width: 80%; height: 80%; z-index: 999; border: 10px solid rgba(0,0,0,.5); margin: -5px 0 0 -5px; }\
  //       </style>\
  //     </div>");
  // $("#wikiframe_veil").fadeIn(750);
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

// run function to add jQuery, create iframe next
jQueryLoad();
