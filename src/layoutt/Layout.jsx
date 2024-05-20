import styled from '@emotion/styled'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
function Layout({ children }) {

  const Wrapper = styled.div`
      width: 100%;
      display: flex;
 `

  return (
    <Wrapper>
      <LeftSidebar></LeftSidebar>
      {children}
      <RightSidebar></RightSidebar>
    </Wrapper>
  )
}

export default Layout