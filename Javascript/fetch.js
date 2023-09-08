let Database = document.querySelector('#Database')



  
  document.getElementById('AddItem_btn').addEventListener('click', () => {
    let insert = document.querySelector('#data-insert').value;
    
    //HTTP GET
    const data = { 
      'name': insert,
      'price': 45
          
    };
     
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    
    
    fetch('http://localhost:3000/api/addFood', option)
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
      //HTTP GET 
    fetch('http://localhost:3000/api/users')
      .then(res => res.json()) 
      .then(data => {
       
       
         
       const names = data.map(item => item.Name);
       
       console.log(names)   
       Database.textContent = names.join(', ');
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });  
      
  });
  