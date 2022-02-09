var lastURL = "https://findel2207.github.io/pdf/msec/rien.pdf";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkMenu(){
    let btn = document.getElementById("menu-btn");
    if(isIpad() && isLandscape()){
        btn.classList.remove("hidden");
    }
    else if(btn.classList.contains("hidden")){
        return;
    }
    else{
        btn.classList.add("hidden");
    }

}

window.onload = (event) => {
    checkMenu();
};

window.addEventListener("orientationchange", function() {
    sleep(2000);
    checkMenu();
});

document.addEventListener("adobe_dc_view_sdk.ready", function()
{
    var adobeDCView = new AdobeDC.View({clientId: "5486c130612343e9a097b73035401f0f", divId: "viewer"});
    adobeDCView.previewFile(
   {
      content:   {location: {url: "https://findel2207.github.io/pdf/msec/rien.pdf"}},
      metaData: {fileName: "Accueil"}
   },{
    embedMode: "SIZED_CONTAINER"
  });
});

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
    

function changeData(newURL, filename) {
    if(lastURL === newURL){
        openURL(newURL)
    }
    if(window.screen.width > 991 || (isIpad() && isLandscape())){
        lastURL = newURL;
        var adobeDCView = new AdobeDC.View({clientId: "5486c130612343e9a097b73035401f0f", divId: "viewer"});
        adobeDCView.previewFile({
          content:{ location:
            { url: newURL}},
          metaData:{fileName: filename}
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
