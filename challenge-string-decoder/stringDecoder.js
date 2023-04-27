function decoder(code){
    let finalStr = code.split('')
    for (let i in finalStr){
        if (typeof +finalStr[i] === 'number'){
                finalStr.splice(i, finalStr[i] + 1)
    }
    finalStr.join('')
    return(finalStr)
}
}
console.log(decoder('0h2xce5ngbrdy'))