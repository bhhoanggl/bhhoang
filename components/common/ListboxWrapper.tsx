import React from 'react';
import classNames from 'classnames';

interface ListboxWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export const ListboxWrapper: React.FC<ListboxWrapperProps> = ({ children, className }) => (
    <ul className={classNames('listbox-wrapper', className)}>
        {children}
    </ul>
);