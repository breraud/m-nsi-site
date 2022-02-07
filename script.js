function changeData(newURL) {

    if(window.screen.width > 991){
        document.getElementById("pdf-window").setAttribute('data', newURL);
    }  
    else{
        openURL(newURL)
    }
}

function openURL(URL){
    window.open(URL, '_blank');
}