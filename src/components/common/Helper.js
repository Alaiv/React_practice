export const mapHelper = (object, compareItem, objItem, property) => {
    return  object.map(u => {
            if (u[objItem] === compareItem) {
                return {...u, ...property}
            }
            return u;
        })
}