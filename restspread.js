

const filterOutOddsRevised = (...nums) => nums.filter(n => n % 2 ===0)

const findMin = (...nums) => Math.min(...nums)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(a => a*2)]

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

function extend(array1, array2){
    return [...array1, ...array2]
}

function addKeyVal(obj, key, val){
    let newObject = {}
    newObject[key] = val
    return {...obj, ...newObject}
}

function removeKey(obj, key){
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

function combine(obj1, obj2){
    return {...obj1, ...obj2}
}

function update(obj, key, val){
    let newObj = {...obj}
    newObj[key] = val
    return newObj;
}

