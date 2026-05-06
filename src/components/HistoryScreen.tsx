import { ChevronLeft, Search, Filter, FileText, Copy, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface HistoryScreenProps {
  onBack: () => void;
}

export default function HistoryScreen({ onBack }: HistoryScreenProps) {
  const historyItems = [
    {
      id: 'h1',
      title: 'Inspección Vehicular Diaria',
      status: 'Approved',
      time: '10:30 AM',
      subtitle: 'Unidad: Toyota Hilux - ABC-123',
      date: 'Hoy'
    },
    {
      id: 'h2',
      title: 'Limpieza de Área Común',
      status: 'Observations',
      time: '08:15 AM',
      subtitle: 'Ubicación: Comedor Principal',
      date: 'Hoy'
    },
    {
      id: 'h3',
      title: 'Cierre de Inventario',
      status: 'Approved',
      time: '05:45 PM',
      subtitle: 'Almacén: Norte-02',
      date: 'Ayer'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-light pb-24">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <button onClick={onBack}>
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-lg font-bold">Historial</h2>
          </div>
          <div className="flex gap-2">
            <button className="size-10 flex items-center justify-center rounded-full hover:bg-black/5">
              <Search size={20} />
            </button>
            <button className="size-10 flex items-center justify-center rounded-full hover:bg-black/5">
              <Filter size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Tabs */}
        <div className="bg-white px-4 pt-4 border-b border-gray-100">
          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {['Todos', 'Aprobados', 'Observaciones'].map((tab, i) => (
              <button
                key={tab}
                className={`pb-3 pt-4 border-b-2 whitespace-nowrap text-sm font-bold ${
                  i === 0 ? 'border-primary text-slate-900' : 'border-transparent text-slate-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="p-4 space-y-6">
          {['Hoy', 'Ayer'].map((group) => (
            <div key={group} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">{group}</h3>
              {historyItems.filter(item => item.date === group).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          item.status === 'Approved' 
                            ? 'bg-primary/20 text-[#116633]' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {item.status === 'Approved' ? 'Aprobado' : 'Observaciones'}
                        </span>
                        <span className="text-slate-400 text-xs font-medium">{item.time}</span>
                      </div>
                      <p className="text-slate-900 text-base font-bold leading-tight">{item.title}</p>
                      <p className="text-slate-500 text-sm">{item.subtitle}</p>
                    </div>
                    <div className="size-16 bg-slate-100 rounded-lg shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-slate-200 animate-pulse" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-900 gap-2 text-sm font-semibold">
                      <FileText size={16} />
                      Reporte
                    </button>
                    <button className="flex-1 flex items-center justify-center rounded-lg h-10 bg-primary text-slate-900 gap-2 text-sm font-semibold">
                      <Copy size={16} />
                      Duplicar
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
