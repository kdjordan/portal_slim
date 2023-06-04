export function setStorage(profileObj) {
    localStorage.setItem('userData', JSON.stringify(profileObj))
    return true
}

export function getStorage() {
    const userData = JSON.parse(localStorage.getItem('userData'))
    return userData
}

export function clearStorage() {
    localStorage.clear()
}