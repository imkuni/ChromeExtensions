chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({color: '#3aa757'}, function () {
        console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.commands.onCommand.addListener(function (command) {
    let term = "";
    chrome.tabs.executeScript(null, {
        code: "term = window.getSelection().toString();"
    });
	chrome.tabs.executeScript( null, {code:"term"},
    function(term){
		if(term != "" && term != " "){
			window.open('https://translate.google.com/#view=home&op=translate&sl=en&tl=tr&text='+term); 
		}else{
			alert("Empty select");
		}
	} );
});
