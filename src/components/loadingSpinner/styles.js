import styled from 'styled-components';

export const StyledLoadingSpinner = styled.div`
  border: 16px solid #303030;
  border-top: 16px solid orange;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`