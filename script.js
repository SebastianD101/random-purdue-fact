const facts = [
    "The Tank Scrap was a tradition in the 1890s to the early 1900s where sophomores had to defend a water tank from the freshman. It ended after a student was killed after having his neck broken. The tank still stands today.", 
    "President Stone died in office after falling off a cliff.",
    "President Owen died after drinking embalming fluid.",
    "President Hansen was the only alum to become president. He was here during the war and lived in Cary.", 
    "President Hansen met his wife here who was living in Cary East at the time.",
    "Both Cary East and Northeast housed women briefly in the later years of the war.",
    "Former US president Benjamin Harrison was a trustee for a few years before his death.",
    "Two of the three crewmen on the Apollo 1 disaster were Purdue alums. Gus Grissom (class of 1950) and Roger Chaffee (class of 1957)", 
    "Orville Redenbacher worked for either the Exponent or Debris",
    "The debris was our yearbook for over a century. They are all digitally archived and free to view.",
    "There is a piece of sidewalk outside the parking garage which is across from Haas Hall that was laid in the 1890s by NB Moore.",
    "Former Indiana Governor, Harry G. Leslie survived the 1903 train wreck even though he was thought dead on the scene.", 
    "Two boilermakers were killed in the late 1930s after they caught fire in Lambert. They used gasoline to melt the adhesive from the athletic tape and were essentially burned alive trying to escape the fire in the showers.",
    "Freshman used to wear green pot hats to indicate that they were green to the college experience. They were usually ceremoniously burned at St. Patricks Day.",
    "Miss IU was a mannequin we used to dress up in IU clothes and put in a coffin before cremating before the Bucket Game.",
    "Purdue has been represented in more moon landings than NCAA tournament finals.", 
    "ROTC used to be mandatory for men until the 60s",
    "Schulmann Hall used to be the Pharmacy building and used to say Pharmacy on the east side.",
    "Haas Hall was once an actual gym used by men's basketball before Lambert. It was then the ladies gym after that.",
    "Haas Hall was originally the memorial gymnasium built in honor for those who were killed in the 1903 train accident. The 17 steps leading up to it are for the 17 lives lost.", 
    "We don't have the original Purdue Pete head as it was destroyed. We have all others though.",
    "Purdue Pete made his debut in the 1944 Debris as Boilermaker Pete.",
    "John Purdue was a bachelor",
    "There has always been a flag pole on the memorial mall. This current one isn't original.", 
    "The All American dining court is the oldest place to get food from as it was originally the dining room back when all dorms had their own dining service and everyone ate at a set time.",
    "Ladies Hall was one of the orhoni buildings and sat roughly were Stone Hall is now. It was demolished on the late 1920s. Fowler Hall was a theatre which was demolished in for Stewart center in the mid 50s",
    "The old university library was incorporated into Stewart and can still be partially seen.",
    "The math building is technically a bridge, which they did to get around zoning laws", 
    "Eliot hall is the 5th largest concert hall in the US.",
    "Multiple trees on campus were germinated in space",
    "Purdue bought Amelia Earhart the plane she disappeared in.",
    "Purdue maintains the only operating nuclear reactor in the state", 
    "Our agriculture department is ranked higher than our engineering",
    "WBAA is Indiana’s oldest radio station",
    "The inventor of the chicken nugget got his PhD from Purdue.",
    "Purdue has the 2nd busiest airport in the state of Indiana", 
    "Purdue has 2 Nobel Laureates in Chemistry",
    " The original Heavilon Hall, completed in 1894, was destroyed in a fire just four days after its completion",
    "John Purdue’s final resting place can be found by the fountain east of University Hall, marked by a blank headstone",
    "Cary Quad has a 5th floor that is primarily used as storage", 
    "There used to be a reflecting pool outside of the Union, directly in front of the current “Purdue” hedges. It was replaced with the current grass area in 2004",
    "Purdue seniors began decorating and wearing yellow corduroy pants with their organizational and club involvement. This tradition largely ended in 1970, with Mortar Board and Reamer Club being the only two organizations to carry on the tradition to this day",
    "Iron Key is a secret society at Purdue and was founded in 1910 to serve Purdue. Membership is anonymous, and the society is composed of all seniors",
    "In the '60s, students uprooted the Ross-Ade uprights after home victories and toss them in the Wabash. As a result, uprights were specially designed to prevent this."];

var temp = [];

function random() {
    var randomNumber = Math.floor(Math.random() * facts.length);
    var randomFact = facts[randomNumber];
    temp.push(randomNumber);
    document.getElementById("fact").innerHTML = randomFact;
    document.getElementById("hint").style.display = "none";
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        var randomFact = facts[temp[temp.length - 2]];
        document.getElementById("fact").innerHTML = randomFact;
    }

}