'use strict';

const MANIFEST_URL = 'https://github-proxy.mealuet.com/https://raw.githubusercontent.com/kressety/Microsoft-Reward-Chrome-Ext/master/src/manifest.json';

document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.sendMessage({
        action: 'checkStatus',
    });
});

function checkUpdate() {
    fetch(MANIFEST_URL, {method: 'GET'}).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Fetch failed.');
    }).then((manifest) => {
        const currentVersion = chrome.runtime.getManifest().version;
        const latestVersion = manifest.version;
        if (currentVersion !== latestVersion) {
            document.getElementById('update-available').style.display = 'block';
        } else {
            document.getElementById('update-available').style.display = 'none';
        }
    });
}

checkUpdate();
