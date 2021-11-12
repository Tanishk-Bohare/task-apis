const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = (recipient, from) => {

    const msg = {
        to: recipient, 
        from: 'tanishk02042000@gmail.com',  
        subject: 'Image Upload',
        text: `${from} has uploaded an image.`
    }
  
    sgMail
        .send(msg)
        .then(() => {
            console.log(`Email sent to ${recipient}`)
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports = sendMail