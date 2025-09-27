import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext"; // assumes you're storing token/user here
import API from "../utilits/API";

const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const { user, token } = useAuth(); // make sure you have access to userId
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/analytics`);
      const fullData = res.data;
      
      const {
        user: userData,
        analytics: analyticsData,
        links: linkData,
      } = fullData;

      setAnalytics({
        full: fullData, // entire response
        user: userData, // user info
        analytics: analyticsData, // analytics object
        links: linkData, // links array
      });
    } catch (err) {
      console.error("Analytics fetch error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    if (user) {
      fetchAnalytics();
    }
  }, [user]);


// useEffect(() => {
// fetchAnalytics()
// }, [user])


  return (
    <AnalyticsContext.Provider
      value={{
        full: analytics?.full || {},
        user: analytics?.user || {},
        analytics: analytics?.analytics || {},
        links: analytics?.links || [],
        loading,
        error,
        refreshAnalytics: fetchAnalytics,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => useContext(AnalyticsContext);
