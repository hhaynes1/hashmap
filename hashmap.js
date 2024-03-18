export default class HashMap {
    constructor(hashArray = new Array(16)) {
        this.hashArray = hashArray;
        this.loadFactor = 0.75;
    }

    // take key (string), produce hash code
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.hashArray.length;
        }
        return hashCode;
    }

    // set or update value assigned to key
    set(key, value) {
        const index = this.hash(key);
        if (!this.hashArray[index]) {
            // empty location
            this.hashArray[index] = [[key, value]];
        } else {
            // collision
            for (let i = 0; i < this.hashArray[index].length; i++) {
                if (this.hashArray[index][i][0] === key) {
                    this.hashArray[index][i][1] = value;
                    return;
                }
            }
            // push new pair into bucket
            this.hashArray[index].push([key, value]);
        }
    }

    // return value that is assigned to key
    get(key) {
        const index = this.hash(key);
        for (let i = 0; i < this.hashArray[index].length; i++) {
            if (this.hashArray[index][i][0] === key) {
                return this.hashArray[index][i][1];
            }
        }
        return null;
    }

    // return true or false if key is in hash map
    has(key) {
        const keys = this.keys();
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === key) {
                return true;
            }
        }
        return false;
    }

    // remove value at key, or return false if not found
    remove(key) {
        const index = this.hash(key);
        if (this.hashArray[index]) {
            for (let i = 0; i < this.hashArray[index].length; i++) {
                if (this.hashArray[index][i][0] === key) {
                    this.hashArray[index].splice(i, i + 1);
                    return;
                }
            }
        }
        return false;
    }

    // return number of stored keys
    length() {
        return this.hashArray.length;
    }

    // removes all entries
    clear() {
        this.hashArray = new Array(16);
    }

    // return array containing all keys
    keys() {
        let keyArray = [];
        let entries = this.entries();
        for (let i = 0; i < entries.length; i++) {
            keyArray.push(entries[i][0]);
        }
        return keyArray;
    }

    // return array containing all values
    values() {
        let valueArray = [];
        let entries = this.entries();
        for (let i = 0; i < entries.length; i++) {
            valueArray.push(entries[i][1]);
        }
        return valueArray;
    }

    // return array containing all key/value pairs
    // [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {
        let pairArray = [];
        for (let i = 0; i < this.hashArray.length; i++) {
            if (this.hashArray[i]) {
                for (let j = 0; j < this.hashArray[i].length; j++) {
                    pairArray.push([this.hashArray[i][j][0], this.hashArray[i][j][1]]);
                }
            }
        }
        return pairArray;
    }

    // double size of array when size surpasses loadFactor
    growBuckets() {
        const newArray = new Array(this.hashArray.length * 2);
        const entries = this.entries();
        for (let i = 0; i < entries.length; i++) {
            const key = entries[i][0];
            const value = entries[i][1];
            const index = this.hash(key);
            if (!newArray[index]) {
                // empty location
                newArray[index] = [[key, value]];
            } else {
                // push new pair into bucket
                newArray[index].push([key, value]);
            }
        }
        this.hashArray = newArray;
    }

    // call growBuckets if hashmap load exceeds loadFactor
    checkLoad() {
        let counter = 0;
        for (let i = 0; i < this.hashArray.length; i++) {
            if (this.hashArray[i]) {
                counter++;
            }
        }
        if (counter / this.hashArray.length > this.loadfactor) {
            console.log('buckets grown');
            this.growBuckets();
        }
    }
}