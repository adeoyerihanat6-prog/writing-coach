import { createContext, useContext, useState, ReactNode } from 'react';

type OnboardingContextType = {
  selectedGoals: string[];
  setSelectedGoals: React.Dispatch<React.SetStateAction<string[]>>;
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  return (
    <OnboardingContext.Provider
      value={{ selectedGoals, setSelectedGoals }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error(
      'useOnboarding must be used inside an OnboardingProvider'
    );
  }

  return context;
}