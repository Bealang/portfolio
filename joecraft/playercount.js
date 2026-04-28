const SERVER_HOST = 'joecraft.pl';
class Counter {
    constructor(startDelay, endDelay) {
        this.startDelay = startDelay || 20;
        this.endDelay = endDelay || this.startDelay;
    }

    runCounter(objID, start, finish) {
        const obj = document.getElementsByClassName(objID)[0];
        let num = start;
        let delay = this.startDelay;
        let delayOffset = Math.floor((this.endDelay - this.startDelay) / (finish - start));
        let timerStep = function () {
            if (num <= finish) {
                obj.innerHTML = num;
                delay += delayOffset;
                num += 1;
                setTimeout(timerStep, delay);
            }
        };
        timerStep();
    }
}

let playersOnlineCounter = new Counter(1, 150);

window.addEventListener('load', () => {
    console.log("Kuchnia Ban");
    $.get('https://api.mcsrvstat.us/2/' + SERVER_HOST)
        .then((res) => {
            if (res && res.players && res.players.online !== undefined) {
                playersOnlineCounter.runCounter('online1', 0, res.players.online);
                playersOnlineCounter.runCounter('online2', 0, res.players.online);
            } else {
                $('#playersOnline').html('0');
            }
        })
        .catch(() => {
            $('#playersOnline').html('0');
        });
});
