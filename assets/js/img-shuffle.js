console.log("This test went okay. I had the bootstrap setup but the cdn wasn't working or something with my setup was wrong. I was able to fix it but took a bit longer than the 45 minutes.I didn't have to change the bootstrap classes but did have to change the bootstrap versions to match what I used on the Dig245 final. I ended up using two bootstrap calls  so it was a bit odd. I still have some issues with the margin of things like the refresh button so its something i'll need to work on.")

var files = ["cat1.jpg","cat2.jpg","cat3.jpg","cat4.jpg","cat5.jpg","cat6.jpg","cat7.jpg","cat8.jpg"]

$("#shuffle").bind("click", function () {
    let tempFiles = Array.from(files);
    let count = 1;
    while( tempFiles.length ) {
        var index = Math.floor( Math.random()*tempFiles.length );
        var imgToShow = tempFiles[index]; 
        tempFiles.splice( index, 1 ); 

        $("#img-"+count).attr("src",  './assets/images/' + imgToShow);
    
        count++;
        
    }
});