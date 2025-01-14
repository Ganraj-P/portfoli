var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


  function myfunciton(){
    var x = document.getElementById("menu");
    var ham = document.getElementById("ham");
    var close = document.getElementById("close")
    if(x.style.display == "none"){
      x.style.display = "block";
     ham.style.display = "none";
     close.style.display = "block";
     x.style.transition = ".5s";
     ham.style.transition = "ease in 1.5s"

    }
    else{
      x.style.display = "none";
      ham.style.display = "block";
      close.style.display = "none";
     
    }

}

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const navbar = document.querySelector('.navbar-container');
    navbar.classList.toggle('dark-mode');
    
     // Change the icon based on the current theme
     const sunIcon = `<i class="fas fa-sun"></i>`;
     const moonIcon = `<i class="fas fa-moon"></i>`;
    if (document.body.classList.contains('dark-mode')) {
      modeText.textContent = '☀️'; // Moon emoji for dark mode
  } else {
      modeText.textContent = '🌙'; // Sun emoji for light mode

  }
  }
);