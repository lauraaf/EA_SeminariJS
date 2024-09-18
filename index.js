// Exercici Seminari JavaScript

// 1. Pedir los datos de un usuario

const userId = 1;

fetch('https://jsonplaceholder.typicode.com/users/'+ userId)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    const tableBody = document.querySelector('#userTable tbody');
              
              const row = document.createElement('tr');

              // Crear y agregar las celdas (td)
              const idCell = document.createElement('td');
              idCell.textContent = json.id;
              row.appendChild(idCell);

              const nameCell = document.createElement('td');
              nameCell.textContent = json.name;
              row.appendChild(nameCell);

              const usernameCell = document.createElement('td');
              usernameCell.textContent = json.username;
              row.appendChild(usernameCell);

              const emailCell = document.createElement('td');
              emailCell.textContent = json.email;
              row.appendChild(emailCell);

              const phoneCell = document.createElement('td');
              phoneCell.textContent = json.phone;
              row.appendChild(phoneCell);

              const websiteCell = document.createElement('td');
              websiteCell.textContent = json.website;
              row.appendChild(websiteCell);

              // Agregar la fila a la tabla
              tableBody.appendChild(row);
          })
          .catch(error => console.log('Error:', error));
  
    
  

// 2. Pedir los post de un usuario

//fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
//  .then(response => response.json())
//  .then(json2 => 
  //  console.log(json2)
//)
fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
  .then(response => response.json())
  .then(json2 => {
      const tableBody = document.querySelector('#postsTable tbody');
      
      json2.forEach(post => {
          const row = document.createElement('tr');

          // Crear y agregar las celdas (td)
          const idCell = document.createElement('td');
          idCell.textContent = post.id;
          row.appendChild(idCell);

          const titleCell = document.createElement('td');
          titleCell.textContent = post.title;
          row.appendChild(titleCell);

          const bodyCell = document.createElement('td');
          bodyCell.textContent = post.body;
          row.appendChild(bodyCell);

          // Agregar la fila a la tabla
          tableBody.appendChild(row);
      });
      console.log(json2)
  })
  .catch(error => console.log('Error:', error));



// 3. Usar 3 de las funciones de alto nivel combinadas (map, reduce, filter,...) con los datos.

fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
  .then(response => response.json())
  .then(json3 => { 
    const combined = json3
      // Ordenar alfabéticamente por título
      .sort((a, b) => a.title.localeCompare(b.title))
      // Multiplicar por 2 el ID del post
      .map(post => {
        return { ...post, id: post.id * 2 };
        })
      // Filtrar los posts con IDs mayores a 5
      .filter(post => post.id > 5)
      // Llamar a la función que crea la tabla
        printTable(combined);
        console.log(combined)
      })
      .catch(error => console.log('Error:', error));

function printTable(posts) {
  const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';  // Limpiar el cuerpo de la tabla

      posts.forEach(post => {
        const row = document.createElement('tr');

        // Crear y agregar las celdas (td)
        const idCell = document.createElement('td');
        idCell.textContent = post.id;
        row.appendChild(idCell);

        const titleCell = document.createElement('td');
        titleCell.textContent = post.title;
        row.appendChild(titleCell);

        const bodyCell = document.createElement('td');
        bodyCell.textContent = post.body;
        row.appendChild(bodyCell);

        // Agregar la fila a la tabla
        tableBody.appendChild(row);
    });
  }
