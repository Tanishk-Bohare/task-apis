const User = require('../../models/User');

// @route GET /api/v1/login
// @desc login
// @access Public

module.exports  = {
    loginUser: async (req, res, next) => {
        try {
            const user = await User.findOne({email:req.body.email});
                    
            if(!user){
                res.status(401).json({
                    success: false,
                    error: 'User not found!'
                })    
                return;
            }
            
            if(!user.validPassword(req.body.password)){
                res.status(401).json({
                    success: false,
                    error: 'Wrong Password!'
                })
                return;
            }
    
            res.status(200).json({
                success: true,
                message: `${user.email}  is logged in!`
            })
    
        } catch (err) {
            res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    },
    registerUser:  async (req, res, next) => {
        try {
            var new_user = new User({
                email: req.body.email,
                name: req.body.name,
                senior: req.body.senior
            });
            
            new_user.password = new_user.generateHash(req.body.password);
            new_user.save();
            res.status(200).json({
                success: true,
                message: 'done'
            })
            
        } catch (err) {
            res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}
