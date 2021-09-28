function openNav() {
    document.getElementById("mySidebar").style.width = "230px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(function() {

    $(".heart").on("click", function() {
        $(this).toggleClass("heart-blast");
    });
});

//Timing ..