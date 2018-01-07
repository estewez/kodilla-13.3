var os = require('os');

var hours = 0,
    minutes = 0,
    count = 0;
var time = parseInt(os.uptime());

function calcTime() {
    parseInt(time)
    if ((time / 3600) > 1){
        count = 0;
        for (count; (time / 3600) > 1; count++) {
            time -= 3600;
        }
        hours = count;
    }
    if ((time / 60) > 1){
        count = 0;
        for (count; (time / 60) > 1; count++) {
            time -= 60;
        }
        minutes = count;
    }
    console.log('\nSystem up time is: ' + hours + ' hours, ' + minutes + ' minutes and ' + time + ' seconds.\n');
}

module.exports = {
    print: calcTime()
}