import { OnboardingItem } from './OnboardingItem';

import integrationsImg from '../../assets/onboarding/integrations.png';
import addContactImg from '../../assets/onboarding/add-contact.png';
import createSequenceImg from '../../assets/onboarding/create-sequence.png';
import addContactsToSequenceImg from '../../assets/onboarding/add-sequence.png';
import runTaskImg from '../../assets/onboarding/run-task.png';

const onboardingSteps = [
  {
    imgSrc: integrationsImg,
    label: 'Integrations Setup',
    duration: '5 min',
    iconBgColor: 'bg-blue-500',
  },
  {
    imgSrc: addContactImg,
    label: 'Add new Contact',
    duration: '5 min',
    iconBgColor: 'bg-sky-500',
  },
  {
    imgSrc: createSequenceImg,
    label: 'Create your first sequence',
    duration: '10 min',
    iconBgColor: 'bg-purple-500',
  },
  {
    imgSrc: addContactsToSequenceImg,
    label: 'Add contacts to sequence',
    duration: '5 min',
    iconBgColor: 'bg-yellow-500',
  },
  {
    imgSrc: runTaskImg,
    label: 'Run your first task',
    duration: '10 min',
    iconBgColor: 'bg-pink-500',
  },
];

export function OnboardingWidget() {
  return (
    <div className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">Onboarding</h3>
      </div>

      <div className="divide-y divide-gray-200">
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
