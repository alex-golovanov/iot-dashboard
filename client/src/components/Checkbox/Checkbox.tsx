import React, { useId } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import * as styles from './styles.css';
import { CheckboxProps } from '@radix-ui/react-checkbox';

interface IProps extends CheckboxProps {
  label?: string;
}

export const Checkbox: React.FC<IProps> = ({ label, ...checkboxProps }) => {
  const id = useId();
  return (
    <div className={styles.root}>
      <RadixCheckbox.Root className={styles.checkboxRoot} id={id} {...checkboxProps}>
        <RadixCheckbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
