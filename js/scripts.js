function Toggler(selector) {

    var element = document.querySelector(selector);

    return {
        element: element,
        getElem: function() {
            return this.element;
        },
        show: function(){
            this.element.style.display = "inline-block";
        },
        hide: function(){
            this.element.style.display = "none";
        },
    }

}

var elem = new Toggler("#section");
var button = document.querySelector("#button");
 
button.addEventListener("click", function() {
 
    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }
 
}, false);