// Exercici Seminari JavaScript

// 1. Pedir los datos de un usuario

const userId = 1;

fetch('https://jsonplaceholder.typicode.com/users/'+ userId)
  .then(response => response.json())
  .then(json => 
    console.log(json)
  )

// 2. Pedir los post de un usuario

fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
  .then(response => response.json())
  .then(json2 => 
    console.log(json2)
  )

// 3. Usar 3 de las funciones de alto nivel combinadas (map, reduce, filter,...) con los datos.

fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
  .then(response => response.json())
  .then(json3 => { 
    const combined = json3
    //Ordenar alfabeticament per els titols
      .sort((a,b) => a.title.localeCompare(b.title))
    //Multiplicar per 2 el id del post
      .map(post => {
        return { ...post, id: post.id * 2 }
      })
    //Filtrar els post amd id majors a 5
      .filter(post => post.id > 5)
    //Ordenar els post de menor a major id
      .sort((a, b) => a.id - b.id)
    //printem el resultat
      console.log(combined)
  
     }
  )