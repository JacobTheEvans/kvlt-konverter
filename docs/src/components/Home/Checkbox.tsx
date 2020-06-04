import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 5px 30px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
`

const Label = styled.p`
  margin: 0px;
  padding: 7px 10px 7px 0px;
  font-family: 'Germania One', cursive;
  font-size: 20px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  color: #6d6d6d;
`
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

interface StyledCheckboxProps {
  readonly checked: boolean
}

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'black' : 'gray'};
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px black;
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

type CheckboxProps = {
  onClick: any,
  checked: boolean,
  label: string
}

export default function Checkbox (props: CheckboxProps) {
  const {
      onClick,
      checked,
      label
  } = props
  return (
    <Container>
      <Label>{label}</Label>
      <CheckboxContainer>
        <HiddenCheckbox
          checked={checked}
          onClick={onClick}
        />
        <StyledCheckbox
          onClick={onClick}
          checked={checked}
        >
          <Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </Container>
  )
}
