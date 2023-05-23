import React from 'react'
import Button from './Button'
const list =["All","Gaming", "Songs","Live","Cricket","Football","News","Live","Movies"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {/* <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Football"/>
      <Button name="News"/>
      <Button name="Live"/> */}
      {list.map((x)=>(<Button name={x}/>))};
    </div>
  );
};

export default ButtonList
