/* eslint-disable */
class Depart {
    constructor(obj) {
        var keys = Object.keys(obj);
        keys.forEach(key => {
            this[key] = obj[key];
        })
    }

    getData = (key) => {
        return this[key]
    }
}
export default Depart;