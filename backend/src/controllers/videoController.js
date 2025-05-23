import Video from "../models/videoSchema.js";

export const createVideo = async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    await video.populate('creator', 'username avatar');
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}