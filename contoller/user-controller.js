import User from '../schema/user-schema.js';

export const userRegister = async (req, res) => {
    const receivedData = req.body;

    const validatedUser = new User(receivedData);

    try {
        await validatedUser.save();
        res.status(201).json(validatedUser);
    } catch(e){
        res.status(409).json( {message : e.messgae} );
    }
}