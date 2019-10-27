import React from 'react';
import { useTheme, stylesFactory } from '../../themes';
import { GrafanaTheme } from '../../types';
import { css, cx } from 'emotion';

export interface LabelProps extends React.HTMLAttributes<HTMLLegendElement> {
  children: string;
  description?: string;
}

export const getLegendStyles = stylesFactory((theme: GrafanaTheme) => {
  return {
    legend: css`
      font-size: ${theme.typography.heading.h3};
      font-weight: ${theme.typography.weight.regular};
      margin: ${theme.spacing.formLegendMargin};
      color: ${theme.colors.formLegend};
    `,
  };
});

export const Legend: React.FC<LabelProps> = ({ children, className, ...legendProps }) => {
  const theme = useTheme();
  const styles = getLegendStyles(theme);

  return (
    <legend className={cx(styles.legend, className)} {...legendProps}>
      {children}
    </legend>
  );
};
