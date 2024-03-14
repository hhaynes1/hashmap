export default class HashMap {
    constructor() {

    }

    // take key, produce hash code
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    // set or update value assigned to key
    set(key, value) {

    }

    // return value that is assigned to key
    get(key) {

    }

    // return true or false if key is in hash map
    has(key) {

    }

    // remove value at key, or return false if not found
    remove(key) {

    }

    // return number of stored keys
    length() {

    }

    // removes all entries
    clear() {

    }

    // return array containing all keys
    keys() {

    }

    // return array containing all values
    values() {

    }

    // return array containing all key/value pairs
    entries() {

    }
}

// provided snippet
// let index;
// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }