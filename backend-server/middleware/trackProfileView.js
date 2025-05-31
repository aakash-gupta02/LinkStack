import geoip from 'geoip-lite';
import User from '../models/userModel.js';

export const trackProfileView = async (req, username) => {  // Add req parameter
  try {
    const update = { $inc: { profileViews: 1 } };
    
    // Get client IP from request
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    // Get country if geoip is enabled
    if (geoip) {
      const country = geoip.lookup(clientIp)?.country;
      if (country) {
        update.$addToSet = { viewerCountries: country };
      }
    }
    
    // Atomic update with upsert to ensure counters exist
    await User.findOneAndUpdate(
      { username },
      update,
      { upsert: true }  // Creates doc if doesn't exist
    );
    
  } catch (err) {
    console.error("Profile view tracking failed:", err);
  }
};

