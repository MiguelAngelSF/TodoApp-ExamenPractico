import UserModel from '../models/user.model.js'

export const login = (req, res) => res.send("register");

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const newUser = new UserModel({
        username,
        email, 
        password,
      });

      const userSaved = await newUser.save();
      res.json(userSaved);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };