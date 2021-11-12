const sendMail = require('../../config/sendgrid')
const User = require('../../models/User')

module.exports = {

    sendImage: async (req, res) => {
    
        // req.body.id
        try {
            const id = req.body.id  
            const user= await User.findOne({_id: id})

            if(!user){
                res.status(200).json({
                    success: false,
                    error: 'User not found!'
                })
            }
        
            sendMail(user.senior, user.email)

            res.status(200).json({
                success: true,
                message: "Image upload successfull!"
            })
            
        } catch (err) {
            res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}