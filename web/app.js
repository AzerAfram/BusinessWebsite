
window.onscroll = function() {scrollFunction()}


function scrollFunction() {

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("logo").style.width = "8.5%";
        document.getElementById("logo").style.height = "150px";
        document.getElementById("logo").style.padding = "50px";
        document.getElementById("logo").style.marginTop = "-50px";
        document.getElementById("inner_main_menu1").style.marginTop = "-110px";
        document.getElementById("logo").style.marginLeft = "818px";
    }
    else {
        document.getElementById("logo").style.width = "17%";
        document.getElementById("logo").style.marginTop = "0";
        document.getElementById("logo").style.padding= "0";
        document.getElementById("logo").style.height = "300px";
        document.getElementById("inner_main_menu1").style.marginTop = "-155px";
        document.getElementById("logo").style.marginLeft = "791px"

    }
}
