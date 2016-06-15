var progress_load = false;

//HTML5
var bar = new ProgressBar.Circle(container, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1600,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f00', width: 1 },
  to: { color: '#a9be01', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('0%');
    } else {
      circle.setText(value + "%");
    }

  }
});
bar.text.style.fontFamily = '"Open Sans", sans-serif';
bar.text.style.fontSize = '2rem';
bar.text.style.fontWeight = "600";

//CSS3
var bar1 = new ProgressBar.Circle(container1, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1900,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f00', width: 1 },
  to: { color: '#a9be01', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('0%');
    } else {
      circle.setText(value + "%");
    }

  }
});
bar1.text.style.fontFamily = '"Open Sans", sans-serif';
bar1.text.style.fontSize = '2rem';
bar1.text.style.fontWeight = "600";

//JavaScript
var bar2 = new ProgressBar.Circle(container2, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f00', width: 1 },
  to: { color: '#a9be01', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('0%');
    } else {
      circle.setText(value + "%");
    }

  }
});
bar2.text.style.fontFamily = '"Open Sans", sans-serif';
bar2.text.style.fontSize = '2rem';
bar2.text.style.fontWeight = "600";




var element = document.getElementById('progress');
var pos = element.offsetTop;
var alturaTela = window.innerHeight;
var hasScrollY = 'scrollY' in window;

window.onscroll = function(e) {
  var y = hasScrollY ? window.scrollY : document.documentElement.scrollTop;
  var ativar = pos < y + (alturaTela/2);

  if(ativar) {
    bar.animate(0.8);  // Number from 0.0 to 1.0
    bar1.animate(0.75);  // Number from 0.0 to 1.0
    bar2.animate(0.4);  // Number from 0.0 to 1.0
  } else {
    bar.animate(0.0);  // Number from 0.0 to 1.0
    bar1.animate(0.0);  // Number from 0.0 to 1.0
    bar2.animate(0.0);  // Number from 0.0 to 1.0    
  }


}
