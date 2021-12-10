let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))
			
        const mostrarData = (data) => {
            console.log(data)
            let tpl = ''
            for (let i = 0; i<data.length; i++){
                tpl += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].phone}</td></tr>`                
            }
            document.getElementById('data').innerHTML = tpl
        } 