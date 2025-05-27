
import React, { createContext, useContext, useState } from 'react';

interface ProfileContextType {
  currentProfile: any;
  setCurrentProfile: (profile: any) => void;
  analysisHistory: any[];
  addToHistory: (profile: any) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentProfile, setCurrentProfile] = useState(null);
  const [analysisHistory, setAnalysisHistory] = useState([]);

  const addToHistory = (profile: any) => {
    setAnalysisHistory(prev => [profile, ...prev.slice(0, 9)]); // Keep last 10
  };

  return (
    <ProfileContext.Provider value={{
      currentProfile,
      setCurrentProfile,
      analysisHistory,
      addToHistory
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider');
  }
  return context;
};
