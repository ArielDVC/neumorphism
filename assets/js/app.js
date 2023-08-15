const dimension       = window.matchMedia('screen and (min-width:768px)'),
    sidebarElement    = $('.sidebar'),
    sidenavElement    = $('.sidenav'),
    contentElement    = $('.content'),
    backgroundElement = $('.background');
let swSideBar = 0;
$(document).ready(function(){
    changeMenu();
    // DESPLAZAMIENTO DE MENU
    backgroundElement.click(function(){
        changeMenu()
    });
});
dimension.addListener(changeMenu);
function changeMenu(dimension = false){
    const state    = typeof dimension.type !== 'undefined',
        sizeScreen = state ? dimension.matches : window.matchMedia('(min-width:768px)').matches;
    if(sizeScreen){ // >768px
        $(sidebarElement.children()[0]).addClass('div-shadow');
        backgroundElement.addClass('hidden');
        if(state || !sidebarElement.hasClass('w-72')){
            sidebarElement.removeClass('w-0 hidden');
            sidebarElement.addClass('w-72');
            sidenavElement.removeClass('ml-0 w-full');
            sidenavElement.addClass('ml-72 width');
            contentElement.removeClass('ml-0 w-full');
            contentElement.addClass('ml-72 width');
        }else{
            sidebarElement.removeClass('w-72');
            sidebarElement.addClass('w-0 hidden');
            sidenavElement.removeClass('ml-72 width');
            sidenavElement.addClass('ml-0 w-full');
            contentElement.removeClass('ml-72 width');
            contentElement.addClass('ml-0 w-full');
        }
    }else{          // <768px
        $(sidebarElement.children()[0]).removeClass('div-shadow');
        sidenavElement.removeClass('ml-72 width');
        sidenavElement.addClass('ml-0 w-full');
        contentElement.removeClass('ml-72 width');
        contentElement.addClass('ml-0 w-full');
        if((state || sidebarElement.hasClass('w-72')) || swSideBar == 0){
            sidebarElement.removeClass('w-72');
            sidebarElement.addClass('w-0 hidden');
            backgroundElement.addClass('hidden');
        }else{
            sidebarElement.removeClass('w-0 hidden');
            sidebarElement.addClass('w-72');
            backgroundElement.removeClass('hidden');
        }
    }
    swSideBar = 1;
}
// DROP DOWN
function dropDown(){
    $('#dropDown').toggleClass('hidden');
}
// FULL SCREEN
function fullScreen(){
    const elem = document.documentElement;
    if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement){
        if(elem.requestFullscreen)
            elem.requestFullscreen();
        else if(elem.msRequestFullscreen)
            elem.msRequestFullscreen();
        else if(elem.mozRequestFullScreen)
            elem.mozRequestFullScreen();
        else if(elem.webkitRequestFullscreen)
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }else{
        if(document.exitFullscreen)
            document.exitFullscreen();
        else if(document.msExitFullscreen)
            document.msExitFullscreen();
        else if(document.mozCancelFullScreen)
            document.mozCancelFullScreen();
        else if(document.webkitExitFullscreen)
            document.webkitExitFullscreen();
    }
}