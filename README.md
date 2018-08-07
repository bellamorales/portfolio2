<!DOCTYPE html>
<html>
<head>
  <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {box-sizing: border-box}

/* Set height of body and the document to 100% */
body, html {
    height: 100%;
    margin: 0;
    font-family: Sofia; font-size: 40px;
}

/* Style tab links */
.tablink {
    background-color: #555;
    color: white;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Sofia;
    padding: 14px 16x;
    font-size: 17px;
    width: 16.64%;
}

.tablink:hover {
    background-color: #777;
}

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
    color: white;
    display: none;
    padding: 100px 20px;
    height: 100%;
}

#Home {background-image: url("https://wallpapertag.com/wallpaper/full/5/b/3/833297-amazing-sunflower-backgrounds-1920x1080.jpg");}
#Account{background-image: url("https://i.pinimg.com/736x/ed/ef/dd/edefddc75fa35eb8a5e95c45fde6edb2.jpg");}
#Journal {background-image: url("https://78.media.tumblr.com/32ca9713c62c5319eb237629e80b527f/tumblr_nbhmwc7ELb1rxmkxeo1_500.jpg");}
#Prompts {background-image: url("https://cdn.pixabay.com/photo/2018/05/28/12/09/flowers-3435882_960_720.jpg");}
#Tips {background-image: url("https://data.whicdn.com/images/307385940/large.jpg");}
#Goals {background-image: url("https://78.media.tumblr.com/e8aae3dbbecfd8bad0ec6f31c75d35b3/tumblr_o5q5q5qWas1ump72zo1_1280.png");}
</style>
</head>
<body>

<button class="tablink" onclick="openPage('Home', this, 'orange')">Home</button>
<button class="tablink" onclick="openPage('Account', this, 'orange')">Account</button>
<button class="tablink" onclick="openPage('Journal', this, 'orange')">Journal</button>
<button class="tablink" onclick="openPage('Prompts', this, 'orange')">Prompt</button>
<button class="tablink" onclick="openPage('Tips', this, 'orange')">Tips</button>
<button class="tablink" onclick="openPage('Goals', this, 'orange')">Goals</button>

<div id="Home" class="tabcontent">
<center>
  <h1>Petal for Your Thoughts</h1>
  <h2>For all your journaling needs</h2>
</center>
</div>

<div id="Account" class="tabcontent">
  <h3>Account</h3>
  <p>Get in touch, or swing by for a cup of coffee.</p>
</div>

<div id="Journal" class="tabcontent">
  <center><h1><font size="30">Journal</font></h1></center>
  <p><font size="6">Title: </font></p>
  <p><font size="6">Date: </font></p>
</div>

<div id="Prompts" class="tabcontent">
  <h3>Prompts</h3>
  <p>Some news this fine day!</p>
</div>

<div id="Tips" class="tabcontent">
  <h3>Tips and Tricks</h3>
  <p>Get in touch, or swing by for a cup of coffee.</p>
</div>

<div id="Goals" class="tabcontent">
  <h3>Goals</h3>
  <p>Who we are and what we do.</p>
</div>

<script>
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>

</body>
</html>
