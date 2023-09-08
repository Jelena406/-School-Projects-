import React from 'react';
import '../styles/List.css';

 export default function List({dataList} ){
 return (
  <>
 <div className='list' >
<div className='list-planets' onClick={() => dataList('overview')}>
<p>01</p>
<h5>OVERVIEW</h5>
</div>

<div className='list-planets' onClick={() => dataList('structure') }>
<p>02</p>
<h5 >  <span>INTERNAL</span>  STRUCTURE</h5>
</div>

<div className='list-planets' onClick={() => dataList('geology')}>
<p>03</p>
<h5>SURFACE <span>GEOLOGY</span> </h5>    
</div>
 </div>   
 </>  
 );
}

