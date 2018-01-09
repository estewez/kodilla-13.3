exports.printTime = function calcTime(time) {
    var hours = 0,
        minutes = 0,
        count = 0;
    var seconds = parseInt(time);
    if ((seconds / 3600) > 1){
        for (count; (seconds / 3600) > 1; count++) {
            seconds -= 3600;
        }
        hours = count;
    }
    if ((seconds / 60) > 1){
        count = 0;
        for (count; (seconds / 60) > 1; count++) {
            seconds -= 60;
        }
        minutes = count;
    }
    console.log('Uptime: ' + hours + ' hours, ' + minutes + ' minutes and ' + seconds + ' seconds');
}