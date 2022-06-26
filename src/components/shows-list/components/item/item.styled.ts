import styled from 'styled-components';
import { SpanProps } from './item.type';

export const Cover = styled.div<SpanProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};;
  border-radius: ${(props) => props.theme.layout.border.max};

  background-image: url(${(props) => props.cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
