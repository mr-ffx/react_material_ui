import styled from 'styled-components';

const StyledP = styled.p`
  color: ${props => (props.color ? `${props.color}` : '#333')};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 96px;
  margin-bottom: 0px;
  font-size: 16px;
  line-height: 24px;
`;

export default StyledP;
