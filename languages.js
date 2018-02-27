title = chrome['i18n'].getMessage("extName");

function changeHtml(message, element) {
    document.getElementsByClassName(element)[0].innerHTML = message;
}

function changeCss(message, element) {
    $(element).css('margin', message);
}

function start() {
    var elements = ['hideRecomRight', 'hideRecomHome', 'hideComment', 'hidePlayList', 'hideTranding'];
    var css = ['.cntrRight', '.cntrHome', '.cntrComment', '.cntrPlayList', '.hideTranding'];
    for (var i = 0; i < elements.length; i++) {
        var message = chrome['i18n'].getMessage(elements[i]);
        changeHtml(message, elements[i]);
        message = chrome['i18n'].getMessage(elements[i] + 'css');
        changeCss(message, css[i]);
    }
}

start();