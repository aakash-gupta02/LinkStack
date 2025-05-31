import User from '../models/userModel.js';
import Link from '../models/linkSchema.js';
import express from 'express';

const router = express.Router()

// export const getAnalytics = async (userId) => {

//   const user = await User.findById(userId)

//     .select('profileViews viewerCountries name ');
    
//   const links = await Link.find({ userId })
//     .select('title url clicks description ');
    
//   return {
//     profileViews: user.profileViews,
//     countries: user.viewerCountries || [],
//     name: user.name,
    
//     links
//   };
// };


export const getAnalytics = async (userId) => {
  
  const user = await User.findById(userId)
    .select('name username email profilePicture bio socialLinks profileViews viewerCountries lastLogin isAdmin');
    
  const links = await Link.find({ userId })
    .select('title url clicks description thumbnailUrl icon isVisible order createdAt');
    
  return {
    user: {
      name: user.name,
      username: user.username,
      email: user.email,
      profilePicture: user.profilePicture,
      bio: user.bio,
      socialLinks: user.socialLinks,
      lastLogin: user.lastLogin,
      isAdmin: user.isAdmin
    },
    analytics: {
      profileViews: user.profileViews,
      countries: user.viewerCountries || [],
      totalClicks: links.reduce((sum, link) => sum + link.clicks, 0),
      linkCount: links.length
    },
    links: links.map(link => ({
      title: link.title,
      url: link.url,
      clicks: link.clicks,
      description: link.description,
      thumbnailUrl: link.thumbnailUrl,
      icon: link.icon,
      isVisible: link.isVisible,
      order: link.order,
      createdAt: link.createdAt
    }))
  };
};