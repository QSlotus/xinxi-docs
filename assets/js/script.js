document.addEventListener("DOMContentLoaded", function() {
    // 获取HTML元素
    const ipElement = document.getElementById('ip');
    const portElement = document.getElementById('port');
    const motdRawElement = document.getElementById('motdRaw');
    const motdCleanElement = document.getElementById('motdClean');
    const playersOnlineElement = document.getElementById('playersOnline');
    const playersMaxElement = document.getElementById('playersMax');
    const versionElement = document.getElementById('version');
    const onlineElement = document.getElementById('online');
    const protocolVersionElement = document.getElementById('protocolVersion');
    const hostnameElement = document.getElementById('hostname');
    const softnameElement = document.getElementById('softname');
    const iconElement = document.getElementById('icon'); // 新增图标元素

    // API的URL
    const apiUrl = `https://api.mcsrvstat.us/3/play.nhdao.space:19035?timestamp=${Date.now()}`;

    // 使用fetch获取JSON数据，添加缓存控制
    fetch(apiUrl, { cache: 'no-store' })
        .then(response => response.json())
        .then(data => {
            // 更新 <span> 元素的内容
            ipElement.innerText = data.ip;
            portElement.innerText = data.port;
            
            // 检查是否存在 data.motd
            if (data.motd) {
                motdRawElement.innerText = data.motd.raw ? data.motd.raw.join(', ') : 'N/A';
                motdCleanElement.innerText = data.motd.clean ? data.motd.clean.join(', ') : 'N/A';
            } else {
                motdRawElement.innerText = 'N/A';
                motdCleanElement.innerText = 'N/A';
            }

            playersOnlineElement.innerText = data.players ? data.players.online : 'N/A';
            playersMaxElement.innerText = data.players ? data.players.max : 'N/A';
            versionElement.innerText = data.version ? data.version : 'N/A';
            onlineElement.innerText = data.online ? 'Yes' : 'No';
            protocolVersionElement.innerText = data.protocol ? data.protocol.version : 'N/A';
            hostnameElement.innerText = data.hostname ? data.hostname : 'N/A';
            softnameElement.innerText = data.software ? data.software : 'N/A';

            // 检查是否存在图标信息
            if (data.icon) {
                // 更新图标的src属性
                iconElement.src = data.icon;
            } else {
                // 如果没有图标信息，隐藏图标元素
                iconElement.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error fetching server information:', error);
        });
});