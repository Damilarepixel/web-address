// clientName
// clientMail
// clientMessage

var db = firebase.firestore();

const notification = document.querySelector('.contactPopupContainer')
const notificationMessage = document.querySelector('.contactPopupMessage')

const handleNotification = message => {
    notification.style.bottom = '10%'
    notification.innerHTML = message
    setTimeout(()=> {
        // notification.innerHTML = ''
        notification.style.bottom = '-10%'
    }, 1000)
}


const sendMessage = (name, email, message)=> {
    event.preventDefault()

    name = document.getElementById('clientName').value
    email = document.getElementById('clientMail').value
    message = document.getElementById('clientMessage').value

    if(name === '' || email === '' || message === ''){
        handleNotification('Please Fill All Inputs...')
    }else {
        // send message
        handleNotification('Processing Request...')
        db.collection('clients').doc(new Date().toString()).set(
            {
                customer : name,
                mail : email,
                message,
                serverTimestamp : firebase.firestore.FieldValue.serverTimestamp()
            }
        ).then(()=> {
            handleNotification('Message Sent ! :)')
            
        }).catch(e => handleNotification('Something went wrong : ' + e))
    }

}