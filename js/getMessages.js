const url = 'http://localhost/9-sefactory/bootstrap-freelancer-template-frontend/includes/getMessages.php'
const table = document.getElementById('view-table')

async function postData(url) {
    const response = await fetch(url)
    if(!response.ok) {
        console.error('Bad Response', response.status)
        return
    }

    const data = await response.json()
    return data
}

let x = postData(url)
    .then(data => {
        console.log("data", data)
        data.forEach(d => {
            console.log("d", d)
            const tr = document.createElement('tr')

            const idData = document.createElement('td')
            idData.textContent = d.id

            const nameData = document.createElement('td')
            nameData.textContent = d.full_name

            const emailData = document.createElement('td')
            emailData.textContent = d.email

            const phoneData = document.createElement('td')
            phoneData.textContent = d.lebanese_phone_nb

            const msgData = document.createElement('td')
            msgData.textContent = d.message

            tr.appendChild(idData)
            tr.appendChild(nameData)
            tr.appendChild(emailData)
            tr.appendChild(phoneData)
            tr.appendChild(msgData)

            table.appendChild(tr)
        });
    })
    