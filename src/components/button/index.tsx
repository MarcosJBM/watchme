import { Icon } from '../icon';

import { ButtonProps } from '../../types';

import '../../styles/button.scss';

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
