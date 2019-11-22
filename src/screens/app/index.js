import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { OnBoardingRoutes } from './onboarding';
import { Trainer } from './trainer';
import { Trainee } from './trainee';
import { Payments } from './trainee/payments';

export const AppRoutes = createAppContainer(
  createSwitchNavigator(
    {
      OnBoardingRoutes,
      Trainer,
      Trainee,
      Payments,
    },
    {
      initialRouteName: 'OnBoardingRoutes',
    },
  ),
);
