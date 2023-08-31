window.onscroll = headShrink();

function headShrink() {
    if (document.body.scrollTop > 50 || document.documentElement.scrolltop > 50) {
        document.getElementById("header").style.fontSize = "0.67em";
    } else {
        document.getElementById("header").style.fontSize = "1em";
      }
}