import React from 'react'
import Button from './Button'
const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Football"/>
      <Button name="News"/>
      <Button name="Live"/>
    </div>
  );
};

export default ButtonList
