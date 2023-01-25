import React, { useRef } from 'react'

export default function Product() {

  var x1= useRef()
  var x2= useRef()
  var x3= useRef()
  function myfunction(){
    // alert()
    console.log(x1,x2);
    var data={
      name:x1.current.value,
      designation:x2.current.value,
      emailId:x3.current.value,
      id:Math.round(100000*Math.random())
    }
    console.log(data);
    //"http://localhost:8080/SpringRESTTest/rest/emp/saveEmployee"
    fetch("http://localhost:3001/api/useraction",{
      method:"post",
      body:JSON.stringify(data),
      mode:"cors",
      headers:{'Content-Type':'application/json'}

    })
    .then(res=>res.json())
    .then(val=>{
      console.log("Inserted");
      console.log(val);
    })
  }


  return (
    <div>
      <div class="row">
        <div class="col-xl-4">
            <p>Product Name: iPhone 14</p>
            <h1>Price: 150000</h1>
        </div>
      </div>
      <input type="text" ref={x1} />
      <input type="text" ref={x2} />
      <input type="text" ref={x3} />
      <button onClick={myfunction}>enter</button>
    </div>
  )
}
