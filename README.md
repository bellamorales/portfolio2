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
    font-family: Sofia; font-size: 30px;
}
.sign{
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
  font-family: Sofia;
  font-size:60px;

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
.left-box
{
  position: absolute;
  color: blue;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 40px;
  width: 300px;
  height: 400px;
}
input[type="text"],
input[type="password"]
{
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px
  width: 220px;
  height: 32px
  border: none;
  outline: none;
  border-bottom: 1px solid #aaa;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
}
input[type="submit"]
{
  margin-bottom: 28px;
  width: 120px;
  height: 32px;
  background: #f44336
  border: none;
  border-radius: 2px;
  color: #fff;
  font-family: sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.2s ease;
  cursor: pointer;
}
input[type="submit"]:hover,
input[type="submit"]:focus
{
  background: #ff5722;
  transition: o.2s ease;
}



.tablink:hover {
    background-color: #777;
}

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
    color: white;
    display: none;
    padding: 100px 20px;
    height: 120%;
}
.centered {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:black;
    font-family: Sofia;
    font-size:100px;
}
.centeredx{
  position: absolute;
  top: 62%;
  left: 5%;
  transform: translate(-50%, -50%);
  color:black;
  font-family: Sofia;
  font-size:60px;

}
.centery{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
  font-family: Sofia;
  font-size:60px;

}
.centermail{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
  font-family: Sofia;
  font-size:60px;
}
.centerypass{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
  font-family: Sofia;
  font-size:60px;
}
.centerpass2{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
  font-family: Sofia;
  font-size:60px;
}
.centersign{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
  font-family: Sofia;
}

img {
    display: block;
    float:left;
    padding-top: 0px;

}
.title{
  color:white;
  background:transparent;
  border:none;
  font-size: 24px;
  font-family: Sofia;
  position: absolute;
  top:60%;
  left:7%;
  transform: translate(-60%, - 60%);
}
.write{
  color:white;
  background: transparent;
  border:none;
  font-size: 20px;
  font-family: Sofia;
  position: absolute;
  top:80%;
  left:2%;
  transform: translate(-60%, - 60%);

}
.date{
  color:white;
  background: transparent;
  border:none;
  font-size: 24px;
  font-family: Sofia;
  position: absolute;
  top:71%;
  left:7%;
  transform: translate(-60%, - 60%);

}

#Home {background-image: url("https://wallpapertag.com/wallpaper/full/5/b/3/833297-amazing-sunflower-backgrounds-1920x1080.jpg");}
#Account{background-image: url("account.jpg");
width:1350px; height:600px;}
#Journal {background-image: url("background2.jpg");
width:1350px; height:2000px;}
#Prompts {background-image: url("https://cdn.pixabay.com/photo/2018/05/28/12/09/flowers-3435882_960_720.jpg");}
#Tips {background-image: url("https://www.xmple.com/wallpaper/yellow-gradient-red-linear-1920x1080-c2-feeb10-fe4010-a-240-f-14.svg");}
#Goals {background-image: url("https://78.media.tumblr.com/e8aae3dbbecfd8bad0ec6f31c75d35b3/tumblr_o5q5q5qWas1ump72zo1_1280.png");}
#login-box
{
  position: absolute;
  top: 55%;
  left: 50%;
  width: 600px;
  height:400px;
  transform: translate(-50%, -50%);
  color:black;
  font-family: Sofia;
  background-image: url("https://i.pinimg.com/736x/ed/ef/dd/edefddc75fa35eb8a5e95c45fde6edb2.jpg");
  color:blue;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}
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
  <div id="login-box">
    <div id="left-box">
      <h1 class="sign">Sign Up</h1>
          <input class="centery"type="text" name="username" placeholder="username" align=centered></input>
          <input class="centermail" type="text" name="email" placeholder="Email"></input>
          <input class="centerypass" type="text" name="password" placeholder="password"></input>
          <input class="centerpass2" type="password" name="password2" placeholder="Retype password"></input>
          <input class="centersign" type="submit" name="signup-button" value="Sign Up"></input>
      </div>
    </div>
</div>



<div id="Journal" class="tabcontent"  >
  <img class="image" src="notebook2.jpg" width="1300"height="1800">
  <div class="centered"><center><h1><font size="50">Journal</font></h1></center></div>
  <div class="centeredx"><font size="6">Title: </font></div>
  <textarea class="title" rows="2" cols="50">
    title here
  </textarea>
  <p class="centeredx"><font size="6">Date: </font></p>
  <textarea class="date" rows="2" cols="25">
    date here
  </textarea>
  <div>
    <textarea class= "write" rows="40" cols="140" >
    Type here
    </textarea>
  <div>

  </div>
</div>
</div>

</div>

<div id="Prompts" class="tabcontent">
  <center>
  <h1>Prompts</h1>
  <p>Don't know what to write? Click on the button to get a prompt!</p
  </center>
 <div id="quoteDisplay"> </div>
 <button onclick ="Prompts()">New Prompt</button>
 <script src = "prompt.js"></script>
  </div>

<div id="Tips" class="tabcontent">
  <center>
  <h1>Tips and Tricks</h1>
  <p>1. Get to the point </p>
  <p>2. Read it outloud if you want to pick up on mistakes. </p>
  <p>3. When writing a fictional story, set up a clear plot.</p>
  <p>4. Can't seem to fall asleep? Write your thoughts out to clear your mind.</p>
  <p>5. Write everyday. Practice makes perfect.</p>
</div>
</center>

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
