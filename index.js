import HashMap from "./hashmap.js";

(() => {
    let hashmap = new HashMap();
    console.log(hashmap);

    console.log('\nHASH')
    console.log(hashmap.hash('abc'));
    console.log(hashmap.hash('def'));
    console.log(hashmap.hash('ghi'));
    console.log(hashmap.hash('jkl'));

    console.log('\nSET');
    hashmap.set('abc', 1);
    hashmap.set('def', 2);
    hashmap.set('ghi', 3);
    hashmap.set('jkl', 4);
    hashmap.set('mno', 5);
    hashmap.set('pqr', 6);
    hashmap.set('stu', 7);
    hashmap.set('vwx', 8);
    hashmap.set('yz', 9);
    console.log(hashmap);

    console.log('\nGET');
    console.log(hashmap.get('abc'));
    console.log(hashmap.get('def'));
    console.log(hashmap.get('ghi'));
    console.log(hashmap.get('jkl'));

    console.log('\nHAS');
    console.log(hashmap.has('abc'));
    console.log(hashmap.has('def'));
    console.log(hashmap.has('ghi'));
    console.log(hashmap.has('jkl'));
    console.log(hashmap.has('lmn'));

    console.log('\nREMOVE');
    hashmap.remove('lmn');
    console.log(hashmap);

    console.log('\nLENGTH');
    console.log(hashmap.length());

    console.log('\nCLEAR');
    // hashmap.clear();
    console.log(hashmap);

    console.log('\nKEYS');
    console.log(hashmap.keys());

    console.log('\nVALUEs');
    console.log(hashmap.values());

    console.log('\nENTRIES');
    console.log(hashmap.entries());

    console.log('\nCHECKLOAD');
    hashmap.checkLoad();

    console.log('\nGROWBUCKETS')
    hashmap.growBuckets();
    console.log(hashmap);
})();