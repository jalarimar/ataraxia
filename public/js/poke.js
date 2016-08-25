//Remember to recompile typescript file from js folder using tsc poke.ts
$(document).ready(function () {
    $("#hid").hide();
    $("#pecha").click(function () {
        var berr = "pecha";
        greet(berr);
    });
    $("#aspear").click(function () {
        var berr = "aspear";
        greet(berr);
    });
    $("#oran").click(function () {
        var berr = "oran";
        greet(berr);
    });
    $("#razz").click(function () {
        var berr = "razz";
        greet(berr);
    });
    $("#chesto").click(function () {
        var berr = "chesto";
        greet(berr);
    });
    $("#leppa").click(function () {
        var berr = "leppa";
        greet(berr);
    });
    $("#rawst").click(function () {
        var berr = "rawst";
        greet(berr);
    });
    $("#sitrus").click(function () {
        var berr = "sitrus";
        greet(berr);
    });
    $("#persim").click(function () {
        var berr = "persim";
        greet(berr);
    });
    $("#pomeg").click(function () {
        var berr = "pomeg";
        greet(berr);
    });
    $("#cheri").click(function () {
        var berr = "cheri";
        greet(berr);
    });
    $("#pinap").click(function () {
        var berr = "pinap";
        greet(berr);
    });
});
function greet(berr) {
    //var xhr = new XMLHttpRequest();
    //xhr.open("GET", "http://pokeapi.co/api/v2/berry/pecha", false)
    //xhr.send();
    $.ajax({
        url: "http://pokeapi.co/api/v2/berry/" + berr,
        success: function (data) {
            var flav = "nothing";
            for (var i = 0; i < 5; i++) {
                if (data.flavors[i].potency > 0) {
                    flav = data.flavors[i].flavor.name;
                }
            }
            $("#hid").html(data.name + "\n" + "\nGrowth Time: " + data.growth_time + "\nMax-Harvest: " + data.max_harvest + "\nFlavour: " + flav + "\nSmoothness: " + data.smoothness + "\nSize: " + data.size + "\nFirmness: " + data.firmness.name).show();
            console.log(data);
        }
    });
    console.log("Old test passed");
}
