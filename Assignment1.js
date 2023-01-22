/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mojtaba Hashemi  Student ID: mhashemi20 Date: 21-01-2023
*
********************************************************************************/ 


var serverVerbs=["GET","GET","GET","POST","GET","POST"];
var serverPaths=["/","/about","/contact","/login","/panel","/logout"];
var serverResponses=["Welcome to WEB700 Assignment 1","This assignment was prepared by Mojtaba Hashemi",
"Mojtaba Hashemi: mhashemi20@myseneca.ca","User Logged In","Main Panel","Logout Complete"];

function httpRequest(httpVerb,path){
    
    var pIndex = serverPaths.indexOf(path)

    if (serverVerbs[pIndex]===httpVerb) {
        return ("200: "+ serverResponses[pIndex] )
    } else {
        return ("404: Unable to process "+ httpVerb + " request for "+ path );
    };
};

var randomV = function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

function automateTests(){      
    var testVerbs=["GET","POST"]
    var testPaths=["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"]
    function randomRequest(){
        var rVerb=testVerbs[randomV(2)];
        var rPath=testPaths[randomV(8)];
        console.log(httpRequest(rVerb,rPath));
    }
setInterval(randomRequest,1000);
}

automateTests()