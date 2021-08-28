function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + 99999 * 365 * 24 * 60 * 60);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

$(document).ready(function() {
    let cookie = getCookie("a");
    $(".counter.local").text(cookie + ` "A"`);
    $(".counter.world").text(`Ditmewibu  ` +cookie + ` lần`);
   
});

// var loopCounter = 1;
// //while (true) {
// setInterval(function() {
//     loopCounter++;
//     $.ajax({
//             type: "POST",
//             url: "/total",
//         })
//         .then(function(data) {
//             $(".counter.world").text(
//                 `total ` + data.data + ` "A" all over the world`
//             );
//         })
//         .catch(function(err) {
//             $(".counter.world").text(`Lost connection`);
//         });
// }, 5000);

$(".gura").on("touchstart mousedown", function(e) {
    e.preventDefault();
    const audio = new Audio("./sound.mp3");
    audio.play();
    $(".gura1").attr("style", "display:none;");
    $(".gura2").attr("style", "display:block;");
});

$(".gura").on("mouseup touchend", function(e) {
    e.preventDefault();
    $(".gura1").attr("style", "display:block;");
    $(".gura2").attr("style", "display:none;");
});

$(".gura").on("click touchend", function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/count",
    });
    let cookie = getCookie("a");
    parseInt(cookie);
    cookie++;
    setCookie("a", cookie);
    $(".counter.local").text(cookie + ` "A"`);
    let previousNumber =
        parseInt($(".counter.world").text().replace(/^\D+/g, "")) + 1;
    console.log(previousNumber);
    $(".counter.world").text(
        `Ditmewibu ` + cookie + ` lần`
    );
});