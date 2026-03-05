const serverAddress = '83.168.105.232:50056';
const MCstatusText = document.getElementById("MCstatus");
const DCstatusText = document.getElementById("DCstatus");
DCstatusText.textContent = 'Online';

function checkServerStatus() {
    $.ajax({
        url: `https://api.mcsrvstat.us/2/${serverAddress}`,
        type: 'GET',
        success: function(response) {
            if (response.online) {
                MCstatusText.textContent = `Online`;
            } else {
                MCstatusText.textContent = "Offline";
            }
        },
        error: function() {
            console.log(this.error)
            alert("Wystapil blad podczas pobierania danych. [Serwer minecraft]");
        }
    });
}

/* function checkBotStatus() {
    $.ajax({
        url: "http://87.98.150.247:40066/bot-server-status/",
        type: 'GET',
        success: function (response) {
            if (response.online === true) {
                DCstatusText.textContent = 'Online';
            } else {
                DCstatusText.textContent = 'Offline';
            }
        },
        error: function (error) {
            console.error('Error:', error);
            alert("An error occurred while fetching data. [Discord Bot]");
        }
    });
}
*/
// Check bot status when the page loads
$(document).ready(function() {
    //checkBotStatus();
    checkServerStatus();
});