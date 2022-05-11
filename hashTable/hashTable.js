class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++)
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
    }
    return undefined;
  }
  getAllValues() {
    const values = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        for(let j = 0; j < this.data[i].length; j++) {
          values.push(this.data[i][j]);
        }
      }
    }
    return values;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("Diego", 1990);
myHashTable.set("mariana", 1998);
myHashTable.set("maria", 1999);

/* getKeys() {
  return this.data.reduce((instance, value) => {
    const keys = value.map(([key]) => key);
    return instance.concat(keys)
  }, []);
} */