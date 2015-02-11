var a = document.getElementById("background_pageIntro");

        //it's important to add an load event listener to the object, as it will load the svg doc asynchronously
a.addEventListener("load",function(){
    var svgDoc = a.contentDocument; //get the inner DOM of alpha.svg
    
    TweenLite.to(svgDoc.getElementById("pins1"), 2, {top:"200px", ease:Bounce.easeOut});
    TweenLite.to(svgDoc.getElementById("pins2"), 2, {top:"150px", ease:Bounce.easeOut});
    TweenLite.to(svgDoc.getElementById("pins3"), 2, {top:"100px", ease:Bounce.easeOut});
    TweenLite.to(svgDoc.getElementById("pins4"), 2, {top:"120px", ease:Bounce.easeOut});
});