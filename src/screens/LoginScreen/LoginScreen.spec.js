/**
 * @format
 */

import 'react-native';
import React from 'react';

import LoginScreen from './LoginScreen';

import { render } from '@testing-library/react-native';

it('renders correctly', async () => {
    await render(<LoginScreen />);
});
