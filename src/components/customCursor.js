import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
// Styled Components
export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 15px;
  height: 15px;
  background: black;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  box-shadow: 0px 0px 12px 2px ${props => props.themelight ? "#0c0c0d": "#d8bcbc" } ;
  &.pointer {
    border: 4px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #ea281e;
    border: 4px solid #ea281e;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.text} !important;
    top: ${props => props.theme.top} !important;
    left: ${props => props.theme.left} !important;
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }

  &.nav-open,
  &.locked {
    border: 4px solid ${props => props.theme.text} !important;
  }
`
const CustomCursor = ({ toggleMenu }) => {
  const cursorType = false
  const cursor = useRef(null)

  const onMouseMove = event => {
    const { clientX, clientY } = event
    cursor.current.style.left = `${clientX}px`
    cursor.current.style.top = `${clientY}px`
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return (
    <>
      <Cursor
        className={`${cursorType ? "hovered" : ""} ${cursorType} ${
          toggleMenu ? "nav-open" : ""
        }`}
        themelight={true}
        ref={cursor}
      />
    </>
  )
}

export default CustomCursor
