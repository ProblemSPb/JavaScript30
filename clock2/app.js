function moveHands() {
    with(new Date()) {
        var h = 30 * ((getHours() %12) + getMinutes()/60); // 30 degrees hour
        var m = 6 * getMinutes(); // 6 degrees every minute
        var s = 6 * getSeconds(); // 6 degrees every second
        
        // setting the rotate CSS attribute to those degree values -->
        document.getElementById("seconds").style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById("minutes").style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById("hours").style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveHands, 1000); // calling the function every second
    }
}

window.onload = moveHands; // make sure the function strats on the load of the webpage