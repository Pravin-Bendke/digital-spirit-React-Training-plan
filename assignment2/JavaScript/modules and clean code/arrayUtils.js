
export function LenOfArray(arr){
    return arr.length;
}

export function getLastElement(arr){
    return arr[arr.length-1];
}


export function getfirstElement(arr){
    return arr[0];
}

export function removeDuplicate(arr){
    return [...new Set(arr)];
}