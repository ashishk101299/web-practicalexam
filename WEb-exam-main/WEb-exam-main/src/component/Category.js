import React ,  { useEffect, useState }from 'react'


export default function Category() {

  const [cat, setcat] = useState([])

  useEffect(()=>{

    // console.log('use effect called , call API');

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(valueFromAPI=>{
      console.log('API DATA CALLED');
      console.log(valueFromAPI);
      setcat(valueFromAPI)
    })

  } , []);


  return (
    <div>
      <table class="table">
      <thead class="thead-light">
          <tr>
            <th scope="col"> ID</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Image</th>
          </tr>
      </thead>
      <tbody>
          {
              cat.map( (obj)=>(
                <tr>
               <td>{obj.id}</td> 
               <td>{obj.title}</td> 
               <td>{obj.price}</td> 
               <td>{obj.description}</td> 
               <td>{obj.category}</td>
                <td><img src={obj.image} width={100} height={100}></img></td>
               
              </tr>
              )) 
          }
      </tbody>
      </table>
    </div>
  )
}
