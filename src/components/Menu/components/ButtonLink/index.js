import React from 'react';

// props é um objeto trazendo suas propriedades
function ButtonLink(props){
  console.log(props)
  /*para entender o props 
  console.log(props)*/
  return (
   <a href="{props.href}" className={props.className}>
     {props.children}
   </a>
  );
}

export default ButtonLink;