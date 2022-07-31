// 注册function
window.onload = async function () {
    // 获取当前标签页
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // 在指定标签页执行function
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setSelectable,
    });
}

function setSelectable() {
    // // 获取style
    if (document.getElementsByTagName('style')[0].innerHTML.indexOf('user-select') > 0 ) {
        // 修改style
        document.getElementsByTagName('style')[0].innerHTML = ''
    }

    // 另一种设置可选的方式，需要遍历所有tag
    // var tags = document.getElementsByTagName('code')
    // for (var i = 0; i < tags.length; i++) {
    //     tags[i].style.userSelect = 'text'
    // }
    // tags = document.getElementsByTagName('pre')
    // for (var i = 0; i < tags.length; i++) {
    //     tags[i].style.userSelect = 'text'
    // }
}