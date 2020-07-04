$(document).ready(() => {

    var labelElement = document.querySelector("header label");
    var headerElement = document.querySelector("header");

    $(labelElement).click(() => {
        var number = $(headerElement).css("padding-bottom");

        if(number === "20px") {
            $(headerElement).css("padding-bottom", "0px");
        }else {
            $(headerElement).css("padding-bottom", "20px");
        }
    })

})