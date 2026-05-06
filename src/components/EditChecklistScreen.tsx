import { ArrowLeft, Edit2, Camera, StickyNote, Plus, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Checklist, ChecklistItem } from '../types';
import { useState } from 'react';

interface EditChecklistScreenProps {
  checklist: Checklist;
  onBack: () => void;
  onFinish: () => void;
}

export default function EditChecklistScreen({ checklist, onBack, onFinish }: EditChecklistScreenProps) {
  const [items, setItems] = useState<ChecklistItem[]>(checklist.items);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button onClick={onBack} className="text-slate-900 flex size-10 items-center justify-center">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-slate-900 text-lg font-bold flex-1 text-center truncate px-4">
            {checklist.title}
          </h2>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 text-slate-900">
            <Edit2 size={20} />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto w-full pb-32">
        <div className="px-4 py-2 mt-4 space-y-1">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between py-3 border-b border-gray-100"
              >
                <div 
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center gap-x-3 flex-1 cursor-pointer"
                >
                  <div 
                    className={`h-6 w-6 rounded border-2 transition-all flex items-center justify-center ${
                      item.completed 
                        ? 'bg-primary border-primary' 
                        : 'bg-transparent border-slate-200'
                    }`}
                  >
                    {item.completed && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <p className={`text-base font-medium transition-all ${
                      item.completed ? 'text-slate-400 line-through' : 'text-slate-900'
                    }`}>
                      {item.text}
                    </p>
                    <div className="flex gap-2 mt-1">
                       <Camera size={16} className="text-slate-300" />
                       <StickyNote size={16} className="text-slate-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 w-full mt-4 p-4 rounded-xl border-2 border-dashed border-gray-200 hover:bg-white transition-all group"
          >
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-8 group-hover:scale-110 transition-transform">
              <Plus size={20} strokeWidth={3} />
            </div>
            <p className="text-slate-500 text-base font-medium">Añadir elemento</p>
          </motion.button>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 p-4 pb-8 z-30">
        <div className="max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onFinish}
            className="w-full flex items-center justify-center rounded-xl h-14 bg-primary text-slate-900 text-lg font-bold shadow-lg shadow-primary/20"
          >
            Finalizar
          </motion.button>
        </div>
      </footer>
    </div>
  );
}
