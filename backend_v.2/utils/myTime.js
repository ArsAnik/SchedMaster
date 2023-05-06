
class MyTime{

    constructor() {
        this.semesterTime = this.todayBegin();
        this.semesterTime.setMonth(Math.floor(this.semesterTime.getMonth() / 6 )*8+1, 1);
        this.semesterTime = new Date(this.semesterTime.getTime() - this.const_DAY_TIME() * (this.getWeekDay(this.semesterTime) - 8));
    }
    const_DAY_TIME(){
        return 24*3600000;
    }

    const_WEEK_TIME() {
        return 7 * this.const_DAY_TIME();
    }
    const_SEMESTER_BEGIN() {
        return this.semesterTime;
    }
    now() {
        return new Date(Date.now());
    }
    getWeekDay(d) {
        let day = (d ? d.getDay() : this.now().getDay());
        return (day + 6)%7 + 1;
    }
    getMonthNum(d) {
        return d ? d.getMonth() + 1: this.now().getMonth() + 1;
    }
    getWeek(d) {
        let t =  ((d ? d.getTime() : Date.now()) - this.const_SEMESTER_BEGIN().getTime())/ this.const_WEEK_TIME();
        return (t > 0 ? Math.floor(t) : Math.round(t)) + 1;
    }
    todayBegin() {
        let today = this.now();
        today.setHours(4, 0, 0, 0);
        return today;
    }


}

module.exports = new MyTime();