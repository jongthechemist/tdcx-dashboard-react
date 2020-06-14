export const getStorage = (key, defaultValue) => sessionStorage.getItem(key) || defaultValue
export const clearStorage = () => sessionStorage.clear()
export const removeStorage = (key) => sessionStorage.removeItem(key)
export const setStorage = (key, value) => sessionStorage.setItem(key, value)