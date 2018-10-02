import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 8px;
  color: ${props => (props.color ? `${props.color}` : '#333')};
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
`;

export default Wrapper;
