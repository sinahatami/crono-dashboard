import React from 'react';
import { LuPencil, LuUser, LuEuro, LuInfo } from 'react-icons/lu';
import { BsCameraVideo } from 'react-icons/bs';
import { FaBriefcase, FaTasks } from 'react-icons/fa';

const StatItem = ({
  icon: Icon,
  label,
  value,
  max,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  max: number;
  color: string;
}) => {
  const percentage = (value / max) * 100;
  const colorClasses: any = {
    skyBlue: { text: 'text-sky-500', progress: 'bg-sky-500' },
    blue: { text: 'text-blue-500', progress: 'bg-blue-500' },
    purple: { text: 'text-purple-500', progress: 'bg-purple-500' },
    green: { text: 'text-green-600', progress: 'bg-green-600' },
    orange: { text: 'text-orange-300', progress: 'bg-orange-300' },
    pink: { text: 'text-pink-400', progress: 'bg-pink-400' },
  };
  const theme = colorClasses[color] || colorClasses.purple;

  return (
    <div className="border border-gray-200 rounded-lg p-2 space-y-2">
      {/* ROW 1: Label and Info Icon */}
      <div className="flex items-center justify-between">
        <span className="text-md font-medium text-gray-800">{label}</span>
        <LuInfo className="h-4 w-4 text-gray-600" />
      </div>

      {/* ROW 2: Main Icon and Value/Max Text */}
      <div className="flex items-center">
        <Icon className={`${theme.text}`} />

        {/* === THIS IS THE CORRECTED PART === */}
        <div className="ml-1 text-lg">
          {label === 'Pipeline' ? (
            <>
              <span className={`font-bold ${theme.text}`}>{value / 1000}K</span>
              <span className="text-gray-400 font-medium">
                {' '}
                / {max / 1000}K
              </span>
            </>
          ) : (
            <>
              <span className={`font-bold ${theme.text}`}>{value}</span>
              <span className="text-gray-400 font-medium"> / {max}</span>
            </>
          )}
        </div>
      </div>

      {/* ROW 3: Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className={`${theme.progress} h-1.5 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export function PerformanceWidget() {
  return (
    <div className="mt-3 relative bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          May's performance
        </h3>
        <button className="text-lg font-normal text-primary-dark flex items-center">
          Edit KPIs <LuPencil className="ml-1 h-3 w-3" />
        </button>
      </div>
      {/* 3x2 Grid for Stats */}
      <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-4">
        <StatItem
          icon={LuUser}
          label="Contacts engaged"
          value={0}
          max={500}
          color="skyBlue"
        />
        <StatItem
          icon={FaBriefcase}
          label="Companies engaged"
          value={250}
          max={500}
          color="blue"
        />
        <StatItem
          icon={FaTasks}
          label="Activities"
          value={1000}
          max={2000}
          color="purple"
        />
        <StatItem
          icon={BsCameraVideo}
          label="Meetings"
          value={20}
          max={30}
          color="orange"
        />
        <StatItem
          icon={FaTasks}
          label="Deals"
          value={100}
          max={200}
          color="pink"
        />
        <StatItem
          icon={LuEuro}
          label="Pipeline"
          value={50000}
          max={100000}
          color="green"
        />
      </div>
    </div>
  );
}
