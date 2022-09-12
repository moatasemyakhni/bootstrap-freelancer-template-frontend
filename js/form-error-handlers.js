
const submitBtn = document.getElementById('form-btn-submit')
const errorSection = document.querySelector('.error-section')
const errorMessage = document.getElementById('error-txt')
const formSection = document.querySelector('.form-section')

const setErrorMessage = (error) => {
    if(errorSection.classList.contains('view-hidden')) {
        errorSection.classList.remove('view-hidden')
        formSection.style.paddingBottom = "0px"
    }
    errorMessage.textContent = error
}

submitBtn.addEventListener('click', () => {
    const fullName = document.getElementById('form-name').value
    const email = document.getElementById('form-email').value
    const phone = document.getElementById('form-phone').value
    const msg = document.getElementById('form-message').value
    console.log(fullName)
    console.log(email)
    console.log(phone)
    console.log(msg)

    const emptyField = () => {
        const isEmpty = str => !str.trim().length;
        if(isEmpty(fullName) || isEmpty(email) || isEmpty(phone) || isEmpty(msg)) {
            return true
        }
        return false
    }

    let nameLimit = 5
    const shortName = () => {
        if(fullName.length < nameLimit) {
            return true
        }
        return false
    }
    
    // const invalidEmail = () => {
    //     const mailformat = /^\w+([\.-]?\w+)+@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // }

    const invalidPhone = () => {
        const exp1 = /^[+]9613\d{6}$/
        const exp2 = /^[+]961(71|76|70|78)\d{6}$/
        if(!phone.match(exp1) && !phone.match(exp2)) {
            return true
        }
        return false
    }
    
    let msgLimit = 100
    const shortMessage = () => {
        if(msg.length < msgLimit) {
            return true
        }
        return false
    }

    if(emptyField()) {
        setErrorMessage('All fields are required')
        return
    }
    if(shortName()) {
        setErrorMessage(`name should be at least ${nameLimit} chars`)
        return
    }
    if(invalidPhone()) {
        setErrorMessage('phone number is Lebanese +9613xxxxxx or +9617(0 or 1 or 6 or 8)xxxxxxx')
        return
    }
    if(shortMessage()) {
        setErrorMessage(`msg should be at least ${msgLimit} chars`)
        return
    }
    if(!errorSection.classList.contains('view-hidden')) {
        errorSection.classList.add('view-hidden')
        formSection.style.paddingBottom = "96px"
    }
})