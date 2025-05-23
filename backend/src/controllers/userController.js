import User from "../models/userModel.js"

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('subscribers', 'username avatar')
      .populate('subscriptions', 'username avatar');
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
};