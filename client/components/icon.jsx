import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Eye = styled.svg`
  margin-right: 6px;
  overflow: visible;
`
const Icon = () => {
  return(
    <Eye
    width="14"
    height="11"
    viewBox="0 0 14 11"
    fill="8c8c8e"
    >
      <path fillRule="evenodd" d="M7 10.8889 C 3.13401 10.8889 0 7.04766 0 5.44444 C 9.81687e-17 3.84123 3.13401 0 7 0 C 10.866 0 14 3.84313 14 5.44444 C 14 7.04576 10.866 10.8889 7 10.8889 Z M 7 7.77778 C 8.28866 7.77778 9.33333 6.73311 9.33333 5.44444 C 9.33333 4.15578 8.28866 3.11111 7 3.11111 C 5.71134 3.11111 4.66667 4.15578 4.66667 5.44444 C 4.66667 6.73311 5.71134 7.77778 7 7.77778 Z" />
    </Eye>
  )
}

export default Icon
