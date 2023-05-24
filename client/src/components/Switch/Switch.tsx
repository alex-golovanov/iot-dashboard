import React, { useId } from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import * as styles from './styles.css';
import { SwitchProps } from '@radix-ui/react-switch';

interface IProps extends SwitchProps {
  label?: string;
}

export const Switch: React.FC<IProps> = ({ label, ...switchProps }) => {
  const id = useId();
  return (
    <div className={styles.root}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <RadixSwitch.Root className={styles.switchRoot} id={id} {...switchProps}>
        <RadixSwitch.Thumb className={styles.switchThumb} />
      </RadixSwitch.Root>
    </div>
  );
};
