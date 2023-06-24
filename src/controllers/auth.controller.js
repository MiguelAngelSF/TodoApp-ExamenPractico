import UserModel from "../models/user.model.js";
import { createAccessToken } from "../libs/jwt.js";
import bcrypt from "bcryptjs";

export const login = (req, res) => res.send("register");

export const register = async (req, res) => {
    const { email, password, username } = req.body;

    try {
      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = new UserModel({
        username,
        email, 
        password: passwordHash,
      });

      const userSaved = await newUser.save();
      const token = await createAccessToken({ id: userSaved._id });
      res.cookie("token", token);
      res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
      });
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  };