const User = require ('../Model/authModel') 
const bcrypt = require ('bcrypt')

       //Add user: Register
       
        
exports.register = async (req, res)=>{
        
    const {name, lastname, phone, adresse, email, password} = req.body;
    try{
        const newUser = new User ({name, lastname, phone, adresse, email, password});
        //vérifier si l'email existe
        const searchedUser = await User.findOne({email})

        if (searchedUser){
            return res.status(400).send({msg:"email already exist "})
        }
        // Hash password
       const salt = 10;
       const genSalt = await bcrypt.genSalt(salt);
       const hashedPassword = await bcrypt.hash(password, genSalt);

        // console.log(hashedPassword)
       newUser.password = hashedPassword;

       //Save user:Auth
        await newUser.save();
        res.status(200).send({newUser,
            msg: 'user is saved' });
    } catch (error) {
        res.status(500).send({ msg: 'can not save the user' });
    }
};

//Login

exports.login =  async (req, res)=>{
    const {email, password} = req.body;
    try{
        // find if the user exist
        const searchedUser = await User.findOne({ email });
        // if thhe email not exist
        if (!searchedUser) {
            return res.status(400).send({ msg: 'bad Credential' });
        }
        // passwords are equals
        const match = await bcrypt.compare(password, searchedUser.password);

        if (!match) {
            return res.status(400).send({ msg: 'bad Credential' });
        }
    //     créer un token
    //    const payload = {
    //      _id: searchedUser._id
            
    //    };
    //  const token = await jwt.sign(payload, process.env.SecretOrKey);
    //       console.log(token);
        
        // send the user
       res.status(200).send({user:searchedUser, msg:"success"});
    }catch (error){
      res.status(500).send({msg:"can not get the user2"});  

    }

}
      
        












    