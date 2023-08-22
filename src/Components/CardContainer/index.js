import React from 'react';
import Cards from '../Cards'
const CardContainer = ({houses})=> {
return <>
{
  houses.length && houses.map((house)=> <Cards houses={house}/>)
}
</>
}
export default CardContainer