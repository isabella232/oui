import Icon from 'react-oui-icons';
import classNames from 'classnames';
import React from 'react';

import Button from '../Button';

import { getAssistiveTextFromColorClass } from '../../utils/accessibility';

const renderDismissButton = (onDismiss: () => any, testSection?: string) => {
  return (
    <div className="oui-butterbar__close">
      <Button style="plain" size="small" ariaLabel="Close alert" testSection={`${testSection}-dismiss`} onClick={onDismiss}>
        <Icon name="close" size="small" />
      </Button>
    </div>
  );
};

export type ButterBarProps = {
  alignment?: 'left' | 'center';
  children?: any;
  isDismissible?: boolean;
  testSection?: string;
  type?: 'bad-news' | 'brand' | 'good-news' | 'warning';
  onDismiss?: () => any;
};

const ButterBar = ({ alignment = 'left', children, isDismissible, testSection, type = 'brand', onDismiss = () => { } }: ButterBarProps) => {
  const colorClassName = `oui-butterbar--${type}`;
  const alignmentClassName = `oui-text--${alignment}`;
  const butterbarAriaLabel = getAssistiveTextFromColorClass(type);
  const alignClass = `oui-butterbar ${colorClassName} ${alignmentClassName}`.trim();
  const classes = classNames({
    [`${alignClass}`]: true,
  });
  const dismissBtn = isDismissible ? renderDismissButton(onDismiss, testSection) : null;
  return (
    <div
      data-oui-component={true}
      className={classes}
      data-test-section={testSection}
      aria-label={butterbarAriaLabel}
      role="alert"
    >
      {children}
      {dismissBtn}
    </div>
  );
};

export default ButterBar;
