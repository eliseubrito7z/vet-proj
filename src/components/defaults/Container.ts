import styled from 'styled-components'

interface ContainerProps {
  flex?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: ${(props) => 
    props.flex ? 'flex' : 'block'
  };
  
  max-width: 1440px;

  width: 100vw;
  height: 100vh;
`