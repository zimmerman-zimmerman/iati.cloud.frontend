import React, { ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import { Palette } from 'app/theme';

type Props = {
  size?: string;
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: any;
  anchorref?: ReactNode;
  children?: ReactNode;
  link?: string;
  target?: string;
  bgcolor?: string;
};

/*type BaseProps = {
  children?: ReactNode;
};*/

export const RegularStyle = css`
  background-color: #155366;
`;

export const InProgressStyle = css`
  background-color: #46b275;
`;

const BaseStyle = css``;

const ZimmerButton = styled((props) => (
  <Button {...props}>{props.children}</Button>
))`
  && {
    justify-content: space-between;
    box-shadow: initial !important;
    width: 100%;
    height: ${(props) => {
      switch (props.size) {
        case 'small':
          return '30px';
        case 'large':
          return '56px';
        default:
          return '48px';
      }
    }};

    background: ${(props) =>
      props.bgcolor === 'green' ? '#46b275' : Palette.primary.main}}

    & [class*='MuiButton-label'] {
      font-size: 14px;
      text-transform: capitalize;
    }
  }
`;

export const IconButton = (props: Props) => {
  return (
    <ZimmerButton
      size={props.size}
      variant="contained"
      color="primary"
      disabled={props.disabled}
      onClick={props.onClick}
      anchorref={props.anchorref}
      href={props.link}
      target={props.target}
      bgcolor={props.bgcolor ? props.bgcolor : 'primary'}
    >
      {props.label && props.label}
      {props.icon && props.icon}
    </ZimmerButton>
  );
};
