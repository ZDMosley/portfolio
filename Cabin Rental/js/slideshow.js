//canoe gallery

var myImageList = document.getElementById('myImageList');

var slideshow = function(imageList) {
  var count = imageList.children.length;
  var current = 0;
  var ONE_SECOND = 5000;
  var i;
  var nextSlide;
  
  for (i = 1; i < count; i++) {
    imageList.children[i].style.display = 'none';
  }
  
  nextSlide = function() {
    var next;
    
    if (current + 1 > count - 1) {
      next = 0;
    } else {
      next = current + 1;
    }
    
    imageList.children[current].style.display = 'none';
    imageList.children[next].style.display = 'block';
    
    current = next;
  }
  
  window.setInterval(nextSlide, ONE_SECOND);
}

slideshow(myImageList);