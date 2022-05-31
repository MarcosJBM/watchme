import { ButtonHTMLAttributes } from 'react';

import { Icon } from '../icon';

import '../../styles/button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export function Button({ iconName, title, selected, ...props }: ButtonProps) {
  return (
    <button
      type='button'
      {...(selected && { className: 'selected' })}
      {...props}
    >
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}
