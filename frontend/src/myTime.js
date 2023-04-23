
class MyTime{

    const_dayTime(){
        return 24*3600*1000;
    }

    const_weekTime() {
        return 7 * this.const_dayTime();
    }

    getShortDate(d) {
        return d.getDate().toString().padStart(2, "0") + '.' + (d.getMonth() + 1).toString().padStart(2, "0");
    }

    getShortTime(d) {
        return (d.getHours()).toString().padStart(2, "0") + ':' +  (d.getMinutes()).toString().padStart(2, "0")
    }
    getDate(d) {
        return this.getShortDate(d) + '.' + d.getFullYear()
    }
    getTime(d) {
        return this.getShortTime(d) + ':' + (d.getSeconds()).toString().padStart(2, "0")
    }
    getFullDate(d) {
        return this.getDate(d) + ' ' + this.getTime(d)
    }
    getWeekDay(d) {
        return (d.getDay() + 6)%7 + 1;
    }
}

module.exports = new MyTime();