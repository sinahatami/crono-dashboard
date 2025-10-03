import { RiArrowDropRightLine } from 'react-icons/ri';
import { LuTriangleAlert } from 'react-icons/lu';
import type { TaskStatusCardInterface } from '../../types/interfaces/taskStatusCardInterface';

const colorClasses = {
  red: { bg: 'bg-red-100', text: 'text-red-600' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-500' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
};

export function TaskStatusCard({
  count,
  label,
  color,
  hasError = false,
  showArrow = true,
}: TaskStatusCardInterface) {
  const theme = colorClasses[color];
  return (
    <div
      className={`relative ${theme.bg} p-3 rounded-3xl flex-1 flex flex-col justify-between`}
    >
      {/* Optional Error Badge */}
      <div className="flex justify-end">
        {hasError && (
          <div className="bg-white text-red-500 rounded-full px-2 py-0.5 text-md font-medium flex items-center border border-red-200">
            1 error
            <LuTriangleAlert className="h-3 w-3 ml-1" />
          </div>
        )}
      </div>

      <div>
        {/* ROW 1: The Count (full width by default) */}
        <p className={`mt-1 text-4xl ${theme.text}`}>{count}</p>

        {/* ROW 2: The Label and the Button */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-700">{label}</span>
          <button className="text-gray-400 hover:text-gray-600 -mr-2 h-7">
            {showArrow && <RiArrowDropRightLine className="h-7 w-7" />}
          </button>
        </div>
      </div>
    </div>
  );
}
