import { useEffect, useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { PerformanceWidget } from '../components/dashboard/PerformanceWidget';
import { RepliesWidget } from '../components/dashboard/RepliesWidget';
import { SignalsWidget } from '../components/dashboard/SignalsWidget';
import { TasksWidget } from '../components/dashboard/TasksWidget';
import { OnboardingWidget } from '../components/dashboard/OnboardingWidget';
import type { SignalInterface } from '../types/interfaces/signalInterface';

export function DashboardPage() {
  const [signals, setSignals] = useState<SignalInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSignals = async () => {
      try {
        const response = await fetch('/signals.json');
        if (!response.ok) throw new Error('Failed to fetch signals');
        const data: SignalInterface[] = await response.json();
        setSignals(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchSignals();
  }, []);

  return (
    // This is the main 2-column grid. Left column takes 2/3, Right takes 1/3.
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      {/* --- COLUMN 1 (LEFT) --- */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        {' '}
        {/* Row 1 of the Left Column (Header & Replies) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <DashboardHeader />
          <RepliesWidget />
        </div>
        {/* Row 2 of the Left Column (Tasks) */}
        <TasksWidget />
        {/* Row 3 of the Left Column (Signals) */}
        <div>
          {isLoading && <div>Loading signals...</div>}
          {error && <div className="text-red-500">Error: {error}</div>}
          {!isLoading && !error && <SignalsWidget signals={signals} />}
        </div>
      </div>

      {/* --- COLUMN 2 (RIGHT) --- */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        <PerformanceWidget />
        <OnboardingWidget />
      </div>
    </div>
  );
}
