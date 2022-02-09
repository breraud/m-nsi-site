function isIpad(){
    const iPad = (navigator.userAgent.match(/(iPad)/) /* iOS pre 13 */ || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) /* iPad OS 13 */);
    const userAgent = navigator.userAgent.toLowerCase();
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
    if (iPad != false || isTablet == true){
        return true;
    }
    else{
        return false;
    }
}

function isLandscape(){
    lorientation = Math.abs(window.orientation) == 90 ? 'landscape' : 'portrait';
    if(lorientation === "landscape"){
        return true;
    }
    else{
        return false;
}
    }
    

function changeData(newURL, fileName) {
    
    if(window.screen.width > 991 || (isIpad() && isLandscape())){
        var adobeDCView = new AdobeDC.View({clientId: "5486c130612343e9a097b73035401f0f", divId: "viewer"});
        adobeDCView.previewFile({
          content:{ location:
            { url: newURL}},
          metaData:{fileName: fileName}
        },
        {
          embedMode: "SIZED_CONTAINER"
        });
    }  
    else{
        openURL(newURL)
    }
}

function openURL(URL){
    window.open(URL, '_blank');
}


document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;
var swiped = false

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */
            if(swiped === false){
                swiped = true
                document.getElementById("menu").style.width = '0px';
                document.getElementById("viewer").style.width = '100vw';
                document.getElementById("viewer").style.position = 'absolute';
                document.getElementById("viewer").style.left = '0px';
            }
        } else {
            /* left swipe */
            if(swiped === true){
                swiped = false
                document.getElementById("menu").style.width = '280px';
                document.getElementById("viewer").style.width = 'calc(100vw - 280px)';
                document.getElementById("viewer").style.position = 'relative';
                /*document.getElementById("viewer").style.left = '0px';*/
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
