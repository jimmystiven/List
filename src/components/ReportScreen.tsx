import { ChevronLeft, CheckCircle2, FileText, Share2, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface ReportScreenProps {
  onBack: () => void;
}

export default function ReportScreen({ onBack }: ReportScreenProps) {
  const percentage = 85;
  const circumference = 2 * Math.PI * 80;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen flex flex-col shadow-xl">
        <div className="flex items-center bg-white p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100">
          <button onClick={onBack} className="text-slate-900 flex size-10 items-center justify-center">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-slate-900 text-lg font-bold flex-1 text-center pr-10">Reporte de Finalización</h2>
        </div>

        <div className="flex-1 overflow-y-auto pb-32">
          {/* Header */}
          <div className="pt-8 px-4 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-primary/20 text-[#0c7a2f] px-4 py-1.5 rounded-full flex items-center gap-2 mb-4"
            >
              <CheckCircle2 size={18} />
              <span className="text-sm font-semibold uppercase tracking-wider">Completado con éxito</span>
            </motion.div>
            <h2 className="text-slate-900 tracking-tight text-[28px] font-bold leading-tight text-center">¡Inspección Finalizada!</h2>
            <p className="text-slate-500 text-center mt-2 px-6">Has completado la mayoría de las tareas asignadas para hoy.</p>
          </div>

          {/* Progress Ring */}
          <div className="flex flex-col items-center justify-center py-10">
            <div className="relative flex items-center justify-center">
              <svg className="w-48 h-48">
                <circle className="text-gray-100" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12" />
                <motion.circle
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="text-primary"
                  cx="96" cy="96" fill="transparent" r="80"
                  stroke="currentColor" strokeDasharray={circumference}
                  strokeLinecap="round" strokeWidth={12}
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl font-bold text-slate-900"
                >
                  {percentage}%
                </motion.span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Éxito</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 p-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex-1 flex flex-col gap-2 rounded-xl p-5 border border-gray-100 bg-white shadow-sm"
            >
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 size={18} />
                <p className="text-slate-900 text-xs font-semibold uppercase">Completados</p>
              </div>
              <p className="text-slate-900 text-3xl font-bold">17</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex-1 flex flex-col gap-2 rounded-xl p-5 border border-gray-100 bg-white shadow-sm"
            >
              <div className="flex items-center gap-2 text-orange-500">
                <Info size={18} />
                <p className="text-slate-900 text-xs font-semibold uppercase">Pendientes</p>
              </div>
              <p className="text-slate-900 text-3xl font-bold">3</p>
            </motion.div>
          </div>

          {/* Info List */}
          <div className="p-4 space-y-4">
            {[
              { label: 'Fecha', value: '24 Oct 2023, 14:30' },
              { label: 'Inspector', value: 'Juan Pérez' },
              { label: 'Proyecto', value: 'Mantenimiento Sede Norte' },
              { label: 'ID', value: 'PRJ-2023-001' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-t border-gray-100">
                <p className="text-slate-500 text-sm">{item.label}</p>
                <p className="text-slate-900 text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating buttons at bottom */}
        <div className="p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 mt-auto flex flex-col gap-3">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2"
          >
            <FileText size={20} />
            Exportar a PDF
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-slate-100 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2"
          >
            <Share2 size={20} />
            Compartir Reporte
          </motion.button>
        </div>
      </div>
    </div>
  );
}
