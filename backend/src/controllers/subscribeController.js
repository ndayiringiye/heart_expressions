import User from "../models/userModel.js";

export const createSubscribing =  async (req, res) => {
  try {
    const { subscriberId } = req.body;
    const user = await User.findById(req.params.userId);
    const subscriber = await User.findById(subscriberId);

    if (!user.subscribers.includes(subscriberId)) {
      user.subscribers.push(subscriberId);
      subscriber.subscriptions.push(req.params.userId);
      await user.save();
      await subscriber.save();
    }

    res.json({ message: 'Subscribed successfully', subscriberCount: user.subscribers.length });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const unsubscribe = async (req, res) => {
  try {
    const { subscriberId } = req.body;
    const user = await User.findById(req.params.userId);
    const subscriber = await User.findById(subscriberId);

    user.subscribers = user.subscribers.filter(id => id.toString() !== subscriberId);
    subscriber.subscriptions = subscriber.subscriptions.filter(id => id.toString() !== req.params.userId);
    
    await user.save();
    await subscriber.save();

    res.json({ message: 'Unsubscribed successfully', subscriberCount: user.subscribers.length });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}