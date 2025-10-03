import { useState, useRef, useEffect } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LuTrash2 } from 'react-icons/lu';
import type { SignalInterface } from '../../types/interfaces/signalInterface';
import type { SignalsWidgetInterface } from '../../types/interfaces/signalsWidgetInterface';
import amazon from '../../assets/avatars/amazon.png';

export function SignalsWidget({
  signals: initialSignals,
}: SignalsWidgetInterface) {
  const [signals, setSignals] = useState<SignalInterface[]>([]);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSignals(initialSignals);
  }, [initialSignals]);

  const unreadCount = signals.filter((s) => !s.read).length;

  const handleAction = (signalId: string, action: 'complete' | 'delete') => {
    let updatedSignals = signals;
    if (action === 'complete') {
      updatedSignals = signals.map((s) =>
        s.id === signalId ? { ...s, read: true } : s
      );
    }
    if (action === 'delete') {
      updatedSignals = signals.filter((s) => s.id !== signalId);
    }
    setSignals(updatedSignals);
    setActiveTooltip(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setActiveTooltip(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const titleStyles = {
    'Role change': 'text-purple-600',
    'Company change': 'text-blue-600',
    'Website view': 'text-fuchsia-600',
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm flex flex-col h-[32rem]">
      <div className="px-6 mt-4 flex items-center space-x-2">
        <h3 className="text-lg font-semibold text-gray-700">Signals</h3>
        {unreadCount > 0 && (
          <span className="bg-amber-400 text-amber-100 text-xs font-bold rounded-full h-7 w-7 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </div>
      <p className="px-6 mt- text-lg text-gray-500 flex-shrink-0">
        Never miss a single opportunity: check out your top signals from your
        1st-degree LinkedIn connections.
      </p>

      <div
        className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 
              [&::-webkit-scrollbar-thumb]:bg-gray-300 
              [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <div className="divide-y divide-gray-200">
          {signals.map((signal) => (
            <div
              key={signal.id}
              className={`flex items-center justify-between py-4 px-6 hover:bg-gray-50 transition-colors ${
                signal.read ? 'opacity-50' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={amazon}
                    alt={signal.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  {!signal.read && (
                    <span className="absolute top-0 left-0 h-3 w-3 bg-orange-300 rounded-full border-2 border-white"></span>
                  )}
                </div>
                <div>
                  <p
                    className="text-lg text-gray-800"
                    dangerouslySetInnerHTML={{ __html: signal.description }}
                  />
                  <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                    <span
                      className={`font-semibold ${titleStyles[signal.title]}`}
                    >
                      {signal.title}
                    </span>
                    {signal.state && (
                      <span className="bg-primary/10 text-primary-dark px-2 py-0.5 rounded-full font-medium">
                        {signal.state}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 ml-4">
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {signal.date}
                </span>
                <div
                  className="relative"
                  ref={activeTooltip === signal.id ? tooltipRef : null}
                >
                  <button
                    onClick={() =>
                      setActiveTooltip(
                        activeTooltip === signal.id ? null : signal.id
                      )
                    }
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-1.5 rounded-3xl text-sm"
                  >
                    Action
                  </button>
                  {activeTooltip === signal.id && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                      <button
                        onClick={() => handleAction(signal.id, 'complete')}
                        className="group flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary-dark rounded-t-lg"
                      >
                        Complete{' '}
                        <IoMdCheckmarkCircleOutline className="ml-2 h-5 w-5 text-gray-400 group-hover:text-primary-dark" />
                      </button>
                      <button
                        onClick={() => handleAction(signal.id, 'delete')}
                        className="group flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary-dark rounded-b-lg"
                      >
                        Delete{' '}
                        <LuTrash2 className="ml-2 h-4 w-4 text-gray-400 group-hover:text-primary-dark" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
