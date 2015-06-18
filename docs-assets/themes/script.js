function bgColor(themeName) {
    if(themeName == 'lee-gargano-circle-white' ||
       themeName == 'lee-gargano-square-white')  {
        return '#7f8c8d';
    } else {
       return '#ecf0f1';
    }
}

function titleColor(themeName) {
    if(themeName == 'lee-gargano-circle-white' ||
       themeName == 'lee-gargano-square-white')  {
        return '#ecf0f1';
    } else {
        return '#7f8c8d';
    }
}
    
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function themeName(){
    return getParameterByName('name');
}

function sollistProfiles(themeName) {
    if(themeName == 'lee-gargano-circle-color' || 
       themeName == 'lee-gargano-circle-white' ||
       themeName == 'lee-gargano-square-white' ||
       themeName == 'lee-gargano-square-color')  {
    
        return {
            'facebook':'',
            'instagram':'',
            'twitter':'',
            'pinterest':'',
            'tumblr':'',
            'vine' :'',
            'googleplus':'',
            'behance':'',
            'dribbble':'',
            'github':'',
            'skype':'',
            'twitch':'',
            'youtube':'',
            'linkedin':'',
            'soundcloud':'',
            'deviantart':'',
            'digg':'',
            'flickr':'',
            'foursquare':'',
            'vimeo':'',
            'envato':'',
            'stackoverflow':'',
            'reddit':'',
            'kickstarter':'',
            'email':'',
            'medium':'',
            'quora':'',
            'soundcloud':'',
            'vimeo':''
        }
    }
    
    if (themeName == 'fuel') {
        return {
            'facebook':'',
            'instagram':'',
            'twitter':'',
            'pinterest':'',
            'tumblr':'',
            'googleplus':'',
            'dribbble':'',
            'skype':'',
            'youtube':'',
            'linkedin':'',
            'deviantart':'',
            'digg':'',
            'flickr':'',
            'vimeo':'',
            'email':'',
        }
    }
    
    if (themeName == 'handdrawn') {
        return {
            'facebook':'',
            'instagram':'',
            'twitter':'',
            'pinterest':'',
            'tumblr':'',
            'vine' :'',
            'googleplus':'',
            'behance':'',
            'dribbble':'',
            'github':'',
            'skype':'',
            'twitch':'',
            'youtube':'',
            'linkedin':'',
            'soundcloud':'',
            'livejournal':'',
            'bitbucket':'',
            'vk':'',
            'digg':'',
            'flickr':'',
            'foursquare':'',
            'vimeo':'',
            'reddit':'',
            'email':''
        }
    }
    
    if (themeName == 'light-circle') {
        return {
            'facebook':'',
            'twitter':'',
            'pinterest':'',
            'tumblr':'',
            'behance':'',
            'dribbble':'',
            'skype':'',
            'youtube':'',
            'linkedin':'',
            'deviantart':'',
            'digg':'',
            'vimeo':'',
        }
    }
    if (themeName == 'light-circle') {
        return {
            'facebook':'',
            'twitter':'',
            'pinterest':'',
            'tumblr':'',
            'behance':'',
            'dribbble':'',
            'skype':'',
            'youtube':'',
            'linkedin':'',
            'deviantart':'',
            'digg':'',
            'vimeo':'',
        }
    }
    if (themeName == 'mikymeg-color') {
        return {
            'facebook':'',
            'instagram':'',
            'twitter':'',
            'pinterest':'',
            'tumblr':'',
            'googleplus':'',
            'behance':'',
            'dribbble':'',
            'skype':'',
            'youtube':'',
            'linkedin':'',
            'deviantart':'',
            'flickr':'',
            'vimeo':''
        }
    }
    if (themeName == 'mikymeg-grey') {
        return {
            'facebook':'',
            'instagram':'',
            'twitter':'',
            'pinterest':'',
            'tumblr':'',
            'googleplus':'',
            'behance':'',
            'dribbble':'',
            'skype':'',
            'youtube':'',
            'linkedin':'',
            'deviantart':'',
            'flickr':'',
            'vimeo':''
        }
    }
    if (themeName == 'martz90-hex') {
        return {
            'facebook':'',
            'instagram':'',
            'pinterest':'',
            'tumblr':'',
            'googleplus':'',
            'behance':'',
            'dribbble':'',
            'skype':'',
            'youtube':'',
            'linkedin':'',
            'soundcloud':'',
            'deviantart':'',
            'digg':'',
            'foursquare':'',
            'steam':'',
            'vimeo':'',
        }
    }
     if (themeName == 'victor-bejar') {
        return {
            'facebook':'',
            'instagram':'',
            'twitter':'',
            'pinterest':'',
            'vine' :'',
            'googleplus':'',
            'behance':'',
            'dribbble':'',
            'github':'',
            'youtube':'',
            'linkedin':'',
            'soundcloud':'',
            'vimeo':'',
        }
    }
}

function sollistParams(themeName) {
    var profiles = sollistProfiles(themeName);
    if(!profiles){
        return;
    }

    return {
        profiles: profiles,
        theme: themeName,
        size: 64,
        hoverEffect: '',
        newTab: false,
        tooltips: false
    }
}



var vThemeName = themeName();
var vSollistParams = sollistParams(vThemeName);
if(vSollistParams) {
    $('h1').text(vThemeName);
    $('h1').css({color: titleColor(vThemeName)});
    $('.sollist').sollist(vSollistParams);
    $('body').css({backgroundColor: bgColor(vThemeName)});
}

