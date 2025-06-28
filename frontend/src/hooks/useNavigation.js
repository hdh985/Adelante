import { useState } from 'react';
import { TABS } from '../utils/constants';

export const useNavigation = (initialTab = TABS.HOME) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return {
    activeTab,
    handleTabChange
  };
};