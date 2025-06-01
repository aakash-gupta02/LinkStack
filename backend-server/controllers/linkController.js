import link from "../models/linkSchema.js";

export const createLink = async (req, res) => {
  const user = req.user;
  const { title, url, thumbnailUrl,description } = req.body;

  try {
    const newLink = await link.create({
      title,
      url,
      thumbnailUrl,
      description,
      userId: req.user.id,
    });
    res.status(201).json(newLink);
  } catch (error) {
    res.status(500).json({ message: "Error creating Link" });
    console.log(error);
  }
};

export const deleteLink = async (req, res) => {
  const { id } = req.params;

  const findLink = await link.findById(id);

  try {
    if (!findLink) {
      return res.status(404).json({ message: "No Link Found" });
    }

    if (findLink.userId.toString() !== req.user.id) {
      return res.status(400).json({ message: "You are not authorized " });
    }

    const deletedLink = await link.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted successfully", deletedLink });

    // res.status(200).json({ message: "Deleted successfully", findLink });
  } catch (error) {
    res.status(500).json({ message: "Error deleting link" });
    console.log(error);
  }
};

export const updateLink = async (req, res) => {
    
  const { id } = req.params;
  const { title, url, thumbnailUrl } = req.body;

  const findLink = await link.findById(id);

  try {
    if (!findLink) {
      return res.status(404).json({ message: "No Link Found" });
    }

    if (findLink.userId.toString() !== req.user.id) {
      return res.status(400).json({ message: "You are not authorized " });
    }

    const updatedLink = await link.findByIdAndUpdate(
      id,
      { $set: { title, url, thumbnailUrl } },
      { new: true }
    );

    res.status(200).json({ message: "Updated successfully", updatedLink });

    res.status(200).json({ message: "Updated successfully", findLink });
  } catch (error) {
    res.status(500).json({ message: "Error Updating link" });
    console.log(error);
  }
};
