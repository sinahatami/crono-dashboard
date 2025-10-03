import { onboardingSteps } from '../../types/Consts/onboardingStepsConst';
import { OnboardingItem } from './OnboardingItem';

export function OnboardingWidget() {
  return (
    <div className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">Onboarding</h3>
      </div>

      <div className="divide-y mt-1 divide-gray-200">
        {onboardingSteps.map((step) => (
          <OnboardingItem
            key={step.label}
            imgSrc={step.imgSrc}
            label={step.label}
            duration={step.duration}
            iconBgColor={step.iconBgColor}
          />
        ))}
      </div>
    </div>
  );
}
