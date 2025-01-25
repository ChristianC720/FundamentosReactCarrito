import mapboxgl, { Map } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css"

function  SoyElMapa() {
    const [coordinates, setCordinates] = useState<{ lng: number, lat: number } | null>(null)
    const mapContainer = useRef<HTMLDivElement | null>(null)
    const myMap = useRef<Map | null>(null)
    const universities=[
        {name: "UTC", coordinates:[-86.84683796931176, 21.049777035290912], color:"green"},
        {name: "UPQROO", coordinates:[-86.84683796931176, 21.181196065120016], color: "red"}]

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiY2FybGdsem0iLCJhIjoiY20yOTFpcWgwMDBrbjJyb215dGcyeXBiZCJ9.LEj7ngvmN67Oi3vasyB_SA"
        if (mapContainer.current) {
            myMap.current = new mapboxgl.Map({
                //Attributes or properties
                //Focus point
                //Altitud, latitud
                container: mapContainer.current,
                style: "mapbox://style/mapbox/streets-v12",
                center: [-86.84683796931176, 21.049777035290912],
                zoom: 15
            });

            universities.forEach(university=>{
                new mapboxgl.Marker({color: university.color})
                    .setLngLat(university.coordinates)
                    .addTo(myMap.current)
                    //Arreglar popup
                    .setPopup(new mapboxgl.Popup().setHTML(`<h6>${university.name}</h6>`))
            })

            //Metodo para obtener las coordenas de una ubicacion
            myMap.current.on("click", (e) => {
                const { lng, lat } = e.lngLat;
                setCordinates({ lng, lat })
                console.log(coordinates)
            })
            
        }
        return () => {
            if (myMap.current) {
                myMap.current.remove();
            }
        }
    }, [])


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 map-container">
        <div ref={mapContainer} style={{  width: "25%", height: "25%", bottom: 0, right: 50, position: "fixed", margin: 10 }}></div>
        </div>
    )
}

export default SoyElMapa