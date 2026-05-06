/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import HomeScreen from './components/HomeScreen';
import TemplatesScreen from './components/TemplatesScreen';
import HistoryScreen from './components/HistoryScreen';
import EditChecklistScreen from './components/EditChecklistScreen';
import ReportScreen from './components/ReportScreen';
import { MOCK_CHECKLISTS } from './constants';
import { Checklist } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState('main'); // 'main', 'edit', 'report'
  const [selectedChecklist, setSelectedChecklist] = useState<Checklist | null>(null);

  const handleSelectChecklist = (id: string) => {
    const checklist = MOCK_CHECKLISTS.find(c => c.id === id);
    if (checklist) {
      setSelectedChecklist(checklist);
      setCurrentView('edit');
    }
  };

  const handleFinishChecklist = () => {
    setCurrentView('report');
  };

  const renderMainView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen onSelectChecklist={handleSelectChecklist} />;
      case 'templates':
        return <TemplatesScreen onBack={() => setActiveTab('home')} />;
      case 'history':
        return <HistoryScreen onBack={() => setActiveTab('home')} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
            <p>Settings & other screens coming soon</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-bg-light max-w-md mx-auto relative overflow-x-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        {currentView === 'main' && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {renderMainView()}
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          </motion.div>
        )}

        {currentView === 'edit' && selectedChecklist && (
          <motion.div
            key="edit"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full absolute inset-0 z-50 overflow-y-auto bg-bg-light"
          >
            <EditChecklistScreen 
              checklist={selectedChecklist} 
              onBack={() => setCurrentView('main')} 
              onFinish={handleFinishChecklist}
            />
          </motion.div>
        )}

        {currentView === 'report' && (
          <motion.div
            key="report"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="w-full absolute inset-0 z-[60] overflow-y-auto bg-bg-light"
          >
            <ReportScreen onBack={() => setCurrentView('main')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
