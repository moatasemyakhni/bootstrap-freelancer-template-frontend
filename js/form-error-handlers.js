const fullName = document.getElementById('form-name').value
const email = document.getElementById('form-email').value
const phone = document.getElementById('form-phone').value
const msg = document.getElementById('form-message').value
const submitBtn = document.getElementById('form-btn-submit')
const errorMessage = document.getElementById('error-txt')

const emptyField = () => {
    if(!fullName || !email || !phone || !msg) {
        return true
    }
    return false
}

const shortName = () => {
    let limit = 5
    if(fullName.length < limit) {
        return true
    }
    return false
}

const shortMessage = () => {
    let limit = 100
    if(msg < 100) {
        return true
    }
    return false
}

const setErrorMessage = (error) => {
    errorMessage.textContent = error
}