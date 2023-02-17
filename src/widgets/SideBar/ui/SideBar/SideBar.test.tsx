import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('SideBar', () => {
    test('On Screen', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('collapsed', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
