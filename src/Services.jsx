import React from "react";
import Card from "./Card";



export default function Services(){
    const Data = [
        {
            title : "Card 1"
        },
        {
            title : "Card 2"
        },
        {
            title : "Card 3"
        },
        {
            title : "Card 4"
        },
        {
            title : "Card 5"
        },
        {
            title : "Card 6"
        },
    ]

   let cardData =  Data.map(function(element,index){
        return <Card key={index} title={element.title}/>
    })



    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-5">
                               
                                    {cardData}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}