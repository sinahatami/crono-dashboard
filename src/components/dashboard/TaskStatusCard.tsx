import { RiArrowDropRightLine } from 'react-icons/ri';
import { LuTriangleAlert } from 'react-icons/lu';

interface TaskStatusCardProps {
  count: number | string;
  label: string;
  color: 'red' | 'yellow' | 'blue' | 'green';
  hasError?: boolean;
  showArrow?: boolean;
}

const colorClasses = {
  red: { bg: 'bg-red-100', text: 'text-red-600' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
};

export function TaskStatusCard({
  count,
  label,
  color,
  hasError = false,
  showArrow = true,
}: TaskStatusCardProps) {
  const theme = colorClasses[color];
  return (
    <div
      className={`relative ${theme.bg} p-4 rounded-lg flex-1 flex flex-col justify-between`}
    >
      {/* Optional Error Badge */}
      <div className="flex justify-end">
        {hasError && (
          <div className="bg-white text-red-500 rounded-full px-2 py-0.5 text-xs font-medium flex items-center border border-red-200">
            1 error
            <LuTriangleAlert className="h-3 w-3 ml-1" />
          </div>
        )}
      </div>

      <div>
        {/* ROW 1: The Count (full width by default) */}
        <p className={`text-3xl font-bold ${theme.text}`}>{count}</p>

        {/* ROW 2: The Label and the Button */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-500">{label}</span>
          <button className="text-gray-400 hover:text-gray-600 -mr-2 h-7">
            {showArrow && <RiArrowDropRightLine className="h-7 w-7" />}
          </button>
        </div>
      </div>
    </div>
  );
}
