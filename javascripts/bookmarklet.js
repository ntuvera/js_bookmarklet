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
    // open and close bookmarklet window coniditional
    // need to code styles into bookmarklet.js
    if (!document.getElementById('view_port')){
      var $frame = $('<div>');
      var $frame_veil = $('<div>');
      var $iframe = $('<iframe>');
      var url = 'http://html5demos.com/postmessage2';

      $frame.attr('id','frame');
      $frame_veil.attr('id','frame_veil');
      $iframe.attr('id', 'view_port');
      $iframe.attr('sandbox', 'allow-same-origin allow-scripts');
      $iframe.attr('src', url);

      $iframe.css('position', 'absolute').css('height', '250px').css('width', '400px')
            .css('border', '1px solid black').css('right', '0.5em').css('top', '0.5em');
      $frame_veil.css('position', 'absolute').css('display', 'none').css('width', '100%')
            .css('height', '100%').css('margin-right', '0%').css('top', '0').css('right', '0')
            .css('background-color', 'rgba(125, 125, 125, .90').css('cursor', 'pointer')
            .css('z-index', '900');

      $('body').append($frame);
      $frame.append($frame_veil);
      $frame_veil.append($iframe);

      $('#frame_veil').fadeIn(250);
      $('#view_port').hide()
      $('#view_port').slideDown(500);

    } else {

        $('#frame_veil').fadeOut(750);
        $('#frame iframe').slideUp(500);
        setTimeout("$('#frame').remove()", 750);
    }
    // manual close by clicking anywhere outside frame_veil
    $('#frame_veil').on('click', function(event){
      if (!$(event.target).closest('#view_port').length){
        $('#frame_veil').fadeOut(750);
        $('#frame iframe').slideUp(500);
        setTimeout("$('#frame').remove()", 750);
      }
    })
}

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
        // console.log('jQuery is loaded version: ' + jQuery.fn.jquery);
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    // console.log('jQuery is active already: ' + jQuery.fn.jquery);
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
