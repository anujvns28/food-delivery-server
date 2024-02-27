const User =  "../modal/user"
const Profile  =  "../modal/profile"

// signup
exports.createUser = async (req, res) => {
    try {
        //fetching data
        const {email,name,picture, } = req.body;
        // validation
        if (!email || !name || !picture) {
            return res.status(500).json({
                success: false,
                message: 'all fileds required'
            })
        }
        
        //check user alredy rejustered or not
        const isUserExist = await User.findOne({ email: email });
        if (isUserExist) {
            return res.status(500).json({
                success: false,
                message: "User is already resjustered"
            })
        }

        
         // additional info
       const profilePayload = {
        gender:null,
        contactNumber:null,
        dateOfBirth:null,
        about:null
      }

     const profile = await Profile.create(profilePayload);

        const userPayload = {
            name:name,
            email: email,
            image: picture,
            additionalInfo : profile._id
        }

        // creading data in deb
        const user = await User.create(userPayload);
       
        return res.status(200).json({
            success: true,
            message: "entry created",
            data: user,

        })
        
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "error occuring in sending resustring user",
        })
    }
}

