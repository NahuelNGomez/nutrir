const fetchErrorHandler = (err:any, setFunction: any)=>{
  if (err.response && err.response.status === 401) {
    setFunction(true)
  } else if (err.code === "ERR_NETWORK") {
    alert('No es posible la conexión con el servidor')
  }
}

export {
  fetchErrorHandler
}