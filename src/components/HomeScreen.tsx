import { Search, User, Shield, Sun, ShoppingCart, Ruler, Repeat, Package, Pin, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_CHECKLISTS } from '../constants';

interface HomeScreenProps {
  onSelectChecklist: (id: string) => void;
}

export default function HomeScreen({ onSelectChecklist }: HomeScreenProps) {
  const pinnedItems = MOCK_CHECKLISTS.filter(c => c.isPinned);
  const recentItems = MOCK_CHECKLISTS.filter(c => !c.isPinned);

  return (
    <div className="pb-24">
      {/* Top Header */}
      <div className="sticky top-0 z-20 bg-bg-light/80 backdrop-blur-md p-4 pb-2">
        <div className="flex items-center h-12 justify-between">
          <div className="text-slate-900 flex size-12 shrink-0 items-center">
            <motion.div whileTap={{ scale: 0.9 }}>
              <User size={28} />
            </motion.div>
          </div>
          <div className="flex w-12 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary/20 text-slate-900">
              <span className="font-bold text-xs">SF</span>
            </button>
          </div>
        </div>
        <p className="text-slate-900 tracking-tight text-[28px] font-bold leading-tight mt-2">
          Mis Checklists
        </p>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="flex w-full items-stretch rounded-xl h-12 shadow-sm bg-white border border-gray-100">
          <div className="text-slate-400 flex items-center justify-center pl-4">
            <Search size={20} />
          </div>
          <input
            className="flex w-full min-w-0 flex-1 rounded-r-xl text-slate-900 focus:outline-0 border-none bg-transparent h-full placeholder:text-slate-400 px-4 pl-2 text-base"
            placeholder="Search checklists, tasks..."
          />
        </div>
      </div>

      {/* Pinned Section */}
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <h3 className="text-slate-900 text-lg font-bold">Pinned</h3>
        <span className="text-primary text-sm font-semibold cursor-pointer">Edit</span>
      </div>

      <div className="flex overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-stretch p-4 gap-4">
          {pinnedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectChecklist(item.id)}
              className="flex h-full flex-col gap-3 rounded-2xl min-w-[240px] bg-white p-4 shadow-sm border border-gray-100 cursor-pointer active:scale-95 transition-transform"
            >
              <div
                className="w-full aspect-video rounded-lg flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: item.id === '1' 
                    ? 'linear-gradient(135deg, #13ec5b 0%, #0a7a2f 100%)' 
                    : 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)'
                }}
              >
                {item.id === '1' ? <Shield size={40} className="text-white" /> : <Sun size={40} className="text-white" />}
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <p className="text-slate-900 text-base font-bold">{item.title}</p>
                  <Pin size={16} className="text-primary rotate-45" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      className="bg-primary h-full"
                    />
                  </div>
                  <p className="text-slate-500 text-xs font-semibold">{item.progress}%</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Section */}
      <h3 className="text-slate-900 text-lg font-bold px-4 pb-2 pt-6">Recent Activity</h3>
      <div className="flex flex-col px-4 gap-3">
        {recentItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            onClick={() => onSelectChecklist(item.id)}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {item.category === 'Shopping' && <ShoppingCart size={24} />}
              {item.category === 'Professional' && <Ruler size={24} />}
              {item.category === 'Personal' && <Repeat size={24} />}
              {item.category === 'Business' && <Package size={24} />}
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex justify-between items-center">
                <p className="text-slate-900 text-base font-semibold">{item.title}</p>
                <span className="text-[10px] font-bold text-slate-500 bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    className="bg-primary h-full"
                  />
                </div>
                <p className="text-slate-500 text-[10px] font-bold">{item.progress}%</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 size-16 bg-primary text-slate-900 rounded-full shadow-2xl flex items-center justify-center z-50"
      >
        <Plus size={32} strokeWidth={3} />
      </motion.button>
    </div>
  );
}
