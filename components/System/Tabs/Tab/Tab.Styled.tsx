import styled from 'styled-components'

type StyledProps = {
  isActive?: boolean
}

const StyledTab = styled.div<StyledProps>`
  cursor: pointer;
  line-height: 1.8;
  margin: 0px;
  padding: 8px 12px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ isActive }) => (isActive ? '#cacaca' : '#737373')};
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #cacaca' : '2px solid transparent')};
  margin-bottom: -2px;

  span {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    user-select: none;
  }

  /*
  ${({ isActive }) =>
    isActive &&
    `
    &::after {
      content: "";
      border-radius: 2px;
      bottom: 0px;
      margin: 0px;
      position: absolute;
      width: inherit;
      left: 0;
      right: 0;
      border-bottom: 2px solid var(--lightPurple);
      height: 0px;
    }
  `}

  */
`

export default StyledTab
