import { TaskStatusCard } from './TaskStatusCard';

export function TasksWidget() {
  return (
    <div className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Today's tasks
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        <TaskStatusCard count={3} label="Overdue" color="red" />
        <TaskStatusCard count={10} label="Pending Manual" color="yellow" />
        <TaskStatusCard count={20} label="Pending Auto" color="blue" hasError />
        <TaskStatusCard
          count={8}
          label="Completed"
          color="green"
          showArrow={false}
        />
      </div>
    </div>
  );
}
