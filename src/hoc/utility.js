
export const updatedObject = (oldObject,newObject) => {
    return {
        ...oldObject,
        ...newObject
    }
};

export const getFromStorage = (key) => {
    if(!key) {
       return null
    }
    try {
        const storeValue = localStorage.getItem(key);
        if(storeValue) {
            return JSON.parse(storeValue)
        }
        return null
    } catch(error) {
        return null
    }
};

export const setInStorage = (key,obj) => {
        if(!key) {
            console.log('Error: Key is missing')
        }
        try {
            localStorage.setItem(key,JSON.stringify(obj))
        } catch(error) {
           console.log(error)
        }
    };
