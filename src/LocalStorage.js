export function setStorage(profileObj) {
    localStorage.setItem('userProfile', JSON.stringify(profileObj))
    return true
}

export function getStorage() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'))
    return userProfile
}

export function clearStorage() {
    console.log('called clear')
    localStorage.clear()
}