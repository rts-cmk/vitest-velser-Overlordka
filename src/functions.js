
export function processValues(arr) {
  return arr.map(value => {
    if(typeof value === "number"){
        return value * 2
    } else if (typeof value === "string"){
        return value.toUpperCase()
    } else if (value === null || value === undefined){
        return "N/A"
    } else {
        return value
    }
  })
}

export function structureTest(a, b) {
    return a + b   
}

export function asyncFunction(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(success) {
                resolve("success")
            } else{
                reject("resjected")
            }
        }, 500)
    })
}