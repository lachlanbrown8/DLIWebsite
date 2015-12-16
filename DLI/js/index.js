window.onscroll = function () {
  var el = document.getElementById('header')[0];
  var className = 'small';
  if (el.classList) {
    if (window.scrollY > 10)
      el.classList.add(className);
    else
      el.classList.remove(className);
  }
};

/* Got this script from "Campus Online/MDU119 Web Design/Resources/You can - sort of -copy this.zip" */