'use strict';

import 'react-native';
import React from 'react';
import { render, fireEvent } from '../../../jest/render-wrapper';

import { rootReducer } from '../../app/store';

import PrivateNavigationStack from './PrivateNavigationStack';

const mockLogScreenView = jest.fn();
jest.mock('@react-native-firebase/analytics', () => {
    return jest.fn().mockImplementation(() => {
        return { logScreenView: mockLogScreenView };
    });
});

jest.mock('@react-native-firebase/auth', () => {
    return jest.fn().mockImplementation(() => {
        return {
            onAuthStateChanged: jest.fn().mockReturnValue(() => {
                console.log('unsubscribed');
            }),
        };
    });
});

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('Navigation Stack', () => {
    beforeEach(() => {
        mockLogScreenView.mockClear();
    });

    it('should renders correctly', async () => {
        await render(<PrivateNavigationStack />, {}, rootReducer);
    });

    describe('Given the component is rendered', () => {
        it('should have a screen named Home', async () => {
            const { findByText } = render(<PrivateNavigationStack />, {}, rootReducer);

            const header = await findByText('Home');
            expect(header).toBeTruthy();
        });
        it('should have a screen named Profile', async () => {
            const { findByText } = render(<PrivateNavigationStack />, {}, rootReducer);

            const header = await findByText('Profile');
            expect(header).toBeTruthy();
        });
    });

    describe('Given a tab button click event happens', () => {
        it('should change the screen and log its name to the analytics system', async () => {
            const { findByTestId } = render(
                <PrivateNavigationStack />,
                {},
                rootReducer,
            );

            const profileTabButton = await findByTestId('tab-profile');
            fireEvent.press(profileTabButton);

            expect(mockLogScreenView).toHaveBeenCalledWith({
                screen_name: 'profile',
                screen_class: 'profile',
            });
        });
        it('should not log the screen name to the analytics system if the tab is already active', async () => {
            const { findByTestId } = render(
                <PrivateNavigationStack />,
                {},
                rootReducer,
            );

            const homeTabButton = await findByTestId('tab-home');
            fireEvent.press(homeTabButton);

            expect(mockLogScreenView).not.toHaveBeenCalled();
        });
    });
});
