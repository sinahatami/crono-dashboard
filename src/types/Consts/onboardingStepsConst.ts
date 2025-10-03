import integrationsImg from '../../assets/onboarding/integrations.png';
import addContactImg from '../../assets/onboarding/add-contact.png';
import createSequenceImg from '../../assets/onboarding/create-sequence.png';
import addContactsToSequenceImg from '../../assets/onboarding/add-sequence.png';
import runTaskImg from '../../assets/onboarding/run-task.png';


export const onboardingSteps = [
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