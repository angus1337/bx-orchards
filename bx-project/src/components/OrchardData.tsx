import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
    {field: "id", headerName: "id", width: 150},
    {field: "name", headerName: "Name", width: 150},
    {field: "fruit", headerName: "Fruit", width: 150},
    {field: "variety", headerName: "Variety", width: 150},
    {field: "growingSystem", headerName: "Growing System", width: 150},
    {field: "areaHa", headerName: "Area", width: 150},
    {field: "trees", headerName: "Number of Trees", width: 150},
    {field: "planted", headerName: "Date Planted", width: 150},
    {field: "lat", headerName: "Lat", width: 150},
    {field: "lng", headerName: "Lon", width: 150},
    {field: "boundaries", headerName: "boundaries", width: 150}
];

interface Orchard {
    name?: string;
    fruit?: string;
    variety?: string;
    growingSystem?: string;
    areaHa?: number;
    trees?: number;
    planted?: string;
    lat?: number;
    lng?: number;
    boundaries?: {
        type: string;
        coordinates: Array<number>;
    }
}

export const OrchardData: React.FC<Orchard> = () => {
    const [orchard, setOrchard] = useState(Object);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "https://bx.group/.test/orchards.json";
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            //const item = data[0];
            var items = data;
            for (let i = 0; i < items.length; i++) {
                items[i].id = i+1;
            }
            setOrchard(items);
            setLoading(false);
        };
        fetchData();
    }, []);
    
    let orchards = orchard;
    let oarr = Array.of(orchards);

    const rows = [
        {
            id: 1,
            name: orchard.name,
            fruit: orchard.fruit, 
            variety: orchard.variety,
            growingSystem: orchard.growingSystem,
            areaHa: orchard.areaHa,
            trees: orchard.trees,
            planted: orchard.planted,
            lat: orchard.lat,
            lng: orchard.lng,
            boundaries: orchard.boundaries,
        }
    ]

    return (
        <div>
            <div className="menu">
                <img src={"./images/bx.png"}/>
                <a><h1>Bx Group - Coding Assignment</h1></a>
            </div>
            <div>
                <h2>Orchards List</h2>
            </div>
            <div className="dataGrid">
                <DataGrid autoHeight
                    rows = {loading ? rows : oarr[0]}
                    columns = {columns}
                    pageSize={5}
                />
            </div>
        </div>
    );
};