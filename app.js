AFRAME.registerComponent('berlin', {
  init: function() {
    var sphere = document.getElementById('Berlin');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/Berlin.jpg");
    });
  }
});

AFRAME.registerComponent('boston', {
  init: function() {
    var sphere = document.getElementById('Boston');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/Boston.jpg");
    });
  }
});

AFRAME.registerComponent('buenosaires', {
  init: function() {
    var sphere = document.getElementById('BuenosAires');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/BuenosAires.jpg");
    });
  }
});

AFRAME.registerComponent('delhi', {
  init: function() {
    var sphere = document.getElementById('Delhi');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/Delhi.jpg");
    });
  }
});

AFRAME.registerComponent('hongkong', {
  init: function() {
    var sphere = document.getElementById('HongKong');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/HongKong.jpg");
    });
  }
});

AFRAME.registerComponent('london', {
  init: function() {
    var sphere = document.getElementById('London');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/London.jpg");
    });
  }
});

AFRAME.registerComponent('ny', {
  init: function() {
    var sphere = document.getElementById('NY');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/NY.jpg");
    });
  }
});

AFRAME.registerComponent('paris', {
  init: function() {
    var sphere = document.getElementById('Paris');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/Paris.jpg");
    });
  }
});

AFRAME.registerComponent('sf', {
  init: function() {
    var sphere = document.getElementById('SF');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/SF.jpg");
    });
  }
});

AFRAME.registerComponent('sydney', {
  init: function() {
    var sphere = document.getElementById('Sydney');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/Sydney.jpg");
    });
  }
});

AFRAME.registerComponent('tokyo', {
  init: function() {
    var sphere = document.getElementById('Tokyo');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/Tokyo.jpg");
    });
  }
});

AFRAME.registerComponent('tunis', {
  init: function() {
    var sphere = document.getElementById('Tunis');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/Tunis.jpg");
    });
  }
});

AFRAME.registerComponent('vancouver', {
  init: function() {
    var sphere = document.getElementById('Vancouver');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/Vancouver.jpg");
    });
  }
});

AFRAME.registerComponent('bangkok', {
  init: function() {
    var sphere = document.getElementById('Bangkok');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/bangkok.jpg");
    });
  }
});

AFRAME.registerComponent('capetown', {
  init: function() {
    var sphere = document.getElementById('CapeTown');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/cape_town.jpg");
    });
  }
});

AFRAME.registerComponent('istanbul', {
  init: function() {
    var sphere = document.getElementById('Istanbul');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/istanbul.jpg");
    });
  }
});

AFRAME.registerComponent('venice', {
  init: function() {
    var sphere = document.getElementById('Venice');
    sphere.addEventListener('click', function(evt) {
      console.log('hi');
      document.getElementById('sky').setAttribute("src", "panos/venice.jpg");
    });
  }
});

AFRAME.registerComponent('vienna', {
  init: function() {
    var sphere = document.getElementById('Vienna');
    sphere.addEventListener('click', function(evt) {
      document.getElementById('sky').setAttribute("src", "panos/vienna.jpg");
    });
  }
});

function hideInstructions() {
  document.querySelector('.instructions').setAttribute('visible', 'false');
}

setTimeout(hideInstructions, 10000);

