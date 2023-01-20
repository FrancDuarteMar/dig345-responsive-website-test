
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