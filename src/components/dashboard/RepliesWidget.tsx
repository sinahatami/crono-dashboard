import { RiArrowDropRightLine } from 'react-icons/ri';
import { PiMailbox } from 'react-icons/pi';

import redditLogo from '../../assets/avatars/reddit.png';
import amazonLogo from '../../assets/avatars/amazon.png';
import mcdonaldsLogo from '../../assets/avatars/mcdonalds.png';
import mediumLogo from '../../assets/avatars/medium.png';

export function RepliesWidget() {
  return (
    <div className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Replies</h3>
        <a
          href="#"
          className="text-lg font-normal text-primary-dark flex items-center"
        >
          Open inbox
          <RiArrowDropRightLine className="h-6 w-6" />
        </a>
      </div>

      {/* Main Content Section */}
      <div className="flex items-center justify-between mt-2 border border-gray-200 p-6 rounded-lg bg-primary/10">
        {/* Left Side: Icon and Count */}
        <div className="flex items-center">
          <div className="bg-primary/20 p-3 rounded-full">
            <PiMailbox className="h-6 w-6 text-primary-dark" />
          </div>
          <p className="text-5xl font-bold text-gray-700 ml-4">24</p>
        </div>

        {/* Right Side: Company Avatars */}
        <div className="flex -space-x-3 items-center">
          {/* STEP 2: Use the imported variables in the 'src' attribute */}
          <img
            src={redditLogo}
            alt="Reddit"
            className="h-8 w-8 rounded-full border-2 border-white object-cover relative z-40 bg-white"
          />
          <img
            src={amazonLogo}
            alt="Amazon"
            className="h-8 w-8 rounded-full border-2 border-white object-cover relative z-30 bg-white"
          />
          <img
            src={mcdonaldsLogo}
            alt="McDonald's"
            className="h-8 w-8 rounded-full border-2 border-white object-cover relative z-20 bg-white"
          />
          <img
            src={mediumLogo}
            alt="Medium"
            className="h-8 w-8 rounded-full border-2 border-white object-cover relative z-10 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
