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
.then((res)=>console.log(res.json()))
.catch((err)=>console.log(err));

}