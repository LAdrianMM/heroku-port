const nodemailer = require('nodemailer')

exports.sendMail = (req, res) => {
  const { name, email, subject, message } = req.body

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS
    }
  })

  let messages = {
    from: email,
    to: 'ladrianmm@gmail.com',
    subject: 'Message from Portfolio',
    html:`<h3> Informations </h3>
     <ul>
         <li>Name: ${name}</li>
         <li>Email: ${email}</li>
         <li>Subject: ${subject}</li>
     </ul>
      
       <h3>Message</h3>
       <p>${message}</p>

     `
  }

  transporter.sendMail(messages, (err, info) => {
    if(err){
      console.log('errrrr', err)
      return res.status(400).json({
        message:  `error in sendin mail ${err}`
      })
    }else {
      console.log('success', info)
      return res.json({
        message:info
      })
    }
  })

}
