import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(

    <>
    {listx.map((value)=>
      <ListItems valuex={value}/>
      )}
    </>
  )
}

export default List;