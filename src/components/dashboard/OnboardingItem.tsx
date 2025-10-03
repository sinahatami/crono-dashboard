import type { OnboardingItemInterface } from '../../types/interfaces/onboardingItemInterface';

export function OnboardingItem({
  imgSrc,
  label,
  duration,
}: OnboardingItemInterface) {
  return (
    <div className="flex items-center space-x-4 py-7">
      <div className={`rounded-lg`}>
        <img src={imgSrc} alt={label} className="h-8 w-8" />
      </div>
      <span className="flex-1 font-semibold text-gray-700">{label}</span>
      <span className="text-gray-500">{duration}</span>
    </div>
  );
}
