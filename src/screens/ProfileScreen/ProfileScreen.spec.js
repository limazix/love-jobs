'use strict';

import 'react-native';
import React from 'react';

import ProfileScreen from './ProfileScreen';

import { render } from '@testing-library/react-native';

it('renders correctly', async () => {
    await render(<ProfileScreen />);
});
