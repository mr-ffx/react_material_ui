import styled from 'styled-components';

const StyledHeadline = styled.h3`
  color: ${props => (props.color ? `${props.color}` : '#333')};
  position: relative;
  margin-top: 0;
  margin-bottom: 12px;
  line-height: 24px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 24px;
`;

export default StyledHeadline;
