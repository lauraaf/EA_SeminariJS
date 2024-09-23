// Exercici Seminari JavaScript

//recogemos el idUser del html
function getUserId(){
  const userId = document.getElementById('userId').value;
  console.log(userId);

  // 1. Pedir los datos de un usuario
  fetch('https://jsonplaceholder.typicode.com/users/'+ userId)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    printTable(json)
  })
  .catch(error => console.log('Error:', error));
 
// 2. Pedir los post de un usuario

fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
  .then(response => response.json())
  .then(json2 => {
      printTable2(json2)
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
      .filter(post => post.id > 30)
      // Llamar a la función que crea la tabla
        printTable3(combined);
        console.log(combined)
      })
  .catch(error => console.log('Error:', error));


// Funcions per printar les dades obtingudes en taules en la pagina de navegador
// Taula 1: Dades usuari
function printTable(user){
  const tableBody = document.querySelector('#userTable tbody');
           
  const row = document.createElement('tr');

  // Crear y agregar las celdas (td)
  const idCell = document.createElement('td');
  idCell.textContent = user.id;
  row.appendChild(idCell);

  const nameCell = document.createElement('td');
  nameCell.textContent = user.name;
  row.appendChild(nameCell);

  const usernameCell = document.createElement('td');
  usernameCell.textContent = user.username;
  row.appendChild(usernameCell);

  const emailCell = document.createElement('td');
  emailCell.textContent = user.email;
  row.appendChild(emailCell);

  const phoneCell = document.createElement('td');
  phoneCell.textContent = user.phone;
  row.appendChild(phoneCell);

  const websiteCell = document.createElement('td');
  websiteCell.textContent = user.website;
  row.appendChild(websiteCell);

  // Agregar la fila a la tabla
  tableBody.appendChild(row);
}
//Taula 2: Dades sobre els Post del usuari
function printTable2(posts){
  const tableBody = document.querySelector('#postsTable tbody');
      
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
  })
}
//Taula 3: Dades modificades amb High-Order functinos
function printTable3(posts) {
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

}


