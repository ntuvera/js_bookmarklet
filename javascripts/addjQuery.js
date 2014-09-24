(function(){

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
  }else {
     initMyBookmarklet();
   }
}

  function initMyBookmarklet() {
    (window.myBookmartlet.function(){
      // run code here
      alert('addJquery.js run')
    })();
  }
})();
