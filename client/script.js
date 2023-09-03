function handleClick(){

const data={ message:"hello world"}

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Specify the content type as JSON
    },
    body: JSON.stringify(data), // Convert the data object to a JSON string
  };

fetch('https://helpful-figolla-cef210.netlify.app/.netlify/functions/main',requestOptions)
.then((res)=>res.json())
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

}