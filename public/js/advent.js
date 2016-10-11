
function Node(id, image, title, description, north, south, east, west) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.description = description;
    this.north = north;
    this.south = south;
    this.east = east;
    this.west = west;
}

var st = new Node(0, "forest-1", "Start", "Not shown", 1, 1, 1, 1);
var kauri = new Node(1, "forest-1", "Kauri Tree", "A mighty Kauri tree stands proudly before you. Taller than \
most of the other trees in the forest, its branches reach high into the sky. To the north, a pile of boulders \
has fallen across the path. Fortunately there looks to be another path heading eastwards.", -1, 7, 2, 7);
var waterfall = new Node(2, "waterfall", "Waterfall", "Water thunders over a steep cliff, crashing upon the jagged \
rocks below and evaporating into a hazy mist. The air smells like fresh rainfall and you feel the wetness of it on your face. \
If you follow the stream perhaps it will lead you out of the forest.", 1, 3, 10, -1);
var pond = new Node(3, "pond", "Pond", "In the centre of the grassy clearing where you are standing is situated a shallow pond. \
Small fish dart to and fro just beneath the surface, their images blurred by ripples stirred up by the breeze. The stream which feeds \
the pond curves around from the west to the southeast, where the ground suddenly drops off. To the north, the trees become \
sparser.", 4, -1, -1, 2);
var meadow = new Node(4, "meadow", "Meadow", "This open landscape of rolling hills and meadows fills your heart with joy. \
You feel free amongst the fresh green grass and bright wildflowers. The scene is dotted with the occasional tree, and several \
cows lazily browse a short distance away. You can hear a steady roar somewhere off to your right.", 3, 3, 2, 8);
var chasm = new Node(5, "chasm", "Chasm", "The river rushes through a narrow chasm, flanked by walls so tall they cast you in \
shadow. In the western wall you notice some steps carved into the rock but they look slippery and dangerous. It would be difficult \
to make your way upstream too, but you think you might see something glistening in the distance...", 3, 8, -1, 6);
var orchard = new Node(6, "vineyard", "Golden Orchard", "You carefully climb the slick staircase, ignoring the \
protests of your legs as you clamber higher. Just as you are about to give up, you reach the top. In front of you, an orchard \
stretches as far as the eye can see - thousands upon thousands of beautiful trees laden with golden fruit. \
Congratulations! You have reached your destination and found the prized golden apple.", 6, 6, 6, 6);
var deep = new Node(7, "trees", "Deep Forest", "Straying off the path can't be that bad, right\? You wander between trees \
crowded with vines, straying further and further into the tangle of the deep forest. It seems to be getting darker... \
perhaps you should turn back, if you remember the way.", 1, 11, 1, 10);
var river = new Node(8, "river", "River", "A wide river flows along a meandering path through the meadow. It \
sparkles in the sunlight, enticing you to come closer and refresh yourself in the cool water. However, a small \
wooden sign on the bank says \'Caution\! Beware the Piranhas\'. Perhaps swimming here is not such a good idea.", 9, 5, 4, 4);
var shore = new Node(9, "beach", "Beach", "You follow the river downstream until you reach the coast. Palm trees \
sway in the gentle breeze, overlooking a white sand beach nestled in this secluded bay. It is very peaceful here but there is \
nothing much to do except sit and stare out across the ocean. The shoreline to either side looks too rocky to \
explore.", -1, 8, -1, -1);
var deep2 = new Node(10, "trees", "Deep Forest", "Straying off the path can't be that bad, right\? You wander between trees \
crowded with vines, straying further and further into the tangle of the deep forest. It seems to be getting darker... \
perhaps you should turn back, if you remember the way.", 7, 11, -1, 11);
var deep3 = new Node(11, "trees", "Deep Forest", "Straying off the path can't be that bad, right\? You wander between trees \
crowded with vines, straying further and further into the tangle of the deep forest. It seems to be getting darker... \
perhaps you should turn back, if you remember the way.", -1, 10, 4, 7);

var nodepool = [st, kauri, waterfall, pond, meadow, chasm, orchard, deep, river, shore, deep2, deep3];

var current_node = 0;

$(document).ready(function () {
    $("#footer").hide();
    $("#blocked").hide();
    $('#vegetable').hide();
    $("#northi").click(function () {
        update_desc("north");
    });
    $("#southi").click(function () {
        update_desc("south");
    });
    $("#easti").click(function () {
        update_desc("east");
    });
    $("#westi").click(function () {
        update_desc("west");
    });
});

function update_desc(direction) {
    $("#blocked").hide();
    var prev_current_node = current_node;
    var location = nodepool[current_node];
    if (direction == "north") {
        current_node = location.north;
    } else if (direction == "south") {
        current_node = location.south;
    } else if (direction == "east") {
        current_node = location.east;
    } else if (direction == "west") {
        current_node = location.west;
    }
    if (current_node == -1) {
        $("#blocked").show();
        current_node = prev_current_node;
    }
    if (current_node == 6) {
        $("#svg4416").hide();
        $("#vegetable").show();
    }
    location = nodepool[current_node];
    $("#title").html(location.title);
    $("#desc").html(location.description).show();
    var imglink = "/img/" + location.image + ".svg";
    document.getElementById("image").src=imglink;
}

/*
- can't go that way
- directional key images
- fix sign to bottom of page
- hide made by jessica and back to main page
- location images
- proper map 
- proper descriptions
TODO
- spawn vegetables / pokemon
*/