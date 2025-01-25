import { useState, useEffect } from "react"

function Products(){
    const [products, setProducts]=useState([])
    const [loading, setLoading]=useState(true)
    const showProducts=async () => {
        const response = await fetch("https://fakestoreapi.com/products/")
        const result= await response.json()
        setProducts(result)
        setLoading(false)
        console.log(result)   
    }

    //useEffect // Realizar una accion cuando los componentes cambien
    useEffect(()=> {
        showProducts()
    },[ ])

    if(loading) return(
        <>
        <h1>Cargando Datos...</h1>
        <button onClick={showProducts}>Consultar API</button>
        </>
)
    return(
        <>
            <h1>Lista de Productos</h1>
            {
                products.map((item,index)=>(
                    <>
                    <h3>{item.title}</h3>
                    <h4>${item.price} MXN</h4>
                    <img src={item.image}/>
                    </>
                ))
            }
        </>
    )
}

export default Products