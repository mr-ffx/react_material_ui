import styled from 'styled-components';

export const Break = styled.div`
  color: rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-size: 0.875rem;
  height: 1.3em;
  overflow: hidden;
`;
export const Container = styled.div`
  color: #000;
  display: flex;
  position: absolute;
  top: 0px;
  right: 184px;
  bottom: 0px;
  padding-top: 25px;
`;

export const Option = styled.div`
  color: ${props => (props.color ? `${props.color}` : 'rgba(0, 0, 0, .25)')};
  margin-right: 5px;
  margin-left: 5px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

export default {
  Break,
  Container,
  Option,
};
