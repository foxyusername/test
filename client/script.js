function handleClick(){

const data={ message:"hello world"}

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Specify the content type as JSON
    },
    body: JSON.stringify(data), // Convert the data object to a JSON string
  };

fetch('http://localhost:8888/.netlify/functions/main',requestOptions)
.then((res)=>console.log(res.json()))
.catch((err)=>console.log(err));

}