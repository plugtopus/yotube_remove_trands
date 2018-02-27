chrome.runtime.onMessage.addListener(function(request) {
    chrome['tabs'].query({}, function(tabs) {
        tabs.forEach(function(tab) {
            if (tab.url.search('https://www.youtube.com/') > -1) {
                chrome['tabs'].sendMessage(tab.id, request);
            }
        });
    });
});