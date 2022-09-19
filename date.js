//module with code that can be called in other parts of the application
module.exports = getDate;

function getDate() {

var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    return day;
};