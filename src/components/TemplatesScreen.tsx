import { ArrowLeft, Search, Plus, Home, Briefcase, Shield, Plane, GraduationCap, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_TEMPLATES } from '../constants';

interface TemplatesScreenProps {
  onBack: () => void;
}

export default function TemplatesScreen({ onBack }: TemplatesScreenProps) {
  const iconMap: any = {
    Home: Home,
    Briefcase: Briefcase,
    Shield: Shield,
    Plane: Plane,
    GraduationCap: GraduationCap,
    HeartPulse: HeartPulse,
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-light pb-24">
      <header className="sticky top-0 z-10 bg-bg-light/80 backdrop-blur-md">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={onBack} className="text-slate-900 flex size-10 shrink-0 items-center justify-start">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-slate-900 text-lg font-bold flex-1 text-center pr-10">Plantillas</h2>
        </div>
        <div className="px-4 py-2">
          <h1 className="text-slate-900 text-3xl font-extrabold tracking-tight">Plantillas Predefinidas</h1>
        </div>
        <div className="px-4 py-3">
          <div className="flex w-full items-stretch rounded-xl h-11 bg-white border border-gray-100 overflow-hidden shadow-sm">
            <div className="text-slate-400 flex items-center justify-center pl-4">
              <Search size={20} />
            </div>
            <input
              className="flex w-full min-w-0 flex-1 border-none focus:ring-0 bg-transparent h-full placeholder:text-slate-400 px-3 text-base"
              placeholder="Buscar plantillas..."
            />
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-2">
        <div className="grid grid-cols-2 gap-4">
          {MOCK_TEMPLATES.map((template, index) => {
            const Icon = iconMap[template.iconName] || Home;
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm cursor-pointer"
              >
                <div className="bg-primary/20 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
                  <Icon size={28} />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-slate-900 text-lg font-bold leading-tight">{template.title}</h2>
                  <p className="text-slate-500 text-sm font-medium">{template.count} plantillas</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 mb-8 flex flex-col items-center gap-3 text-center">
          <p className="text-slate-500 text-sm px-10">¿No encuentras lo que buscas?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-slate-900 font-bold py-3 px-6 rounded-full shadow-lg shadow-primary/20"
          >
            Crear plantilla personalizada
          </motion.button>
        </div>
      </main>
    </div>
  );
}
