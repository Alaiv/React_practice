export const required = (value) => {
    if(value) return undefined
    return 'Field is required'
}

export const maxLength = num => {
    return (value) => {
        if (value && value.length > num) return `Max length is ${num} symbols`
        return undefined
    }
}

export const minLength = minLength => value =>  {
    if(value && value.length < minLength) return `Min length is ${minLength} symbols`
    return undefined
}