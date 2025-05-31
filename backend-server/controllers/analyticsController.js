import User from '../models/userModel.js';
import Link from '../models/linkSchema.js';
import express from 'express';

const router = express.Router()

export const getAnalytics = async (userId) => {

  const user = await User.findById(userId)

    .select('profileViews viewerCountries');
    
  const links = await Link.find({ userId })
    .select('title url clicks description ');
    
  return {
    profileViews: user.profileViews,
    countries: user.viewerCountries || [],
    
    links
  };
};