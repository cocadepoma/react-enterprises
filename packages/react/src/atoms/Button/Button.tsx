import React from 'react'

interface Props {
  label: string;
}

const Button = ({ label }: Props) => {
  return (
    <button
      className="dse-button__container"
      style={{ width: '20rem' }}
    >
      {label}
    </button>
  )
};

export default Button;
