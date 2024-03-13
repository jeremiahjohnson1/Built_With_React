import {useState} from "react";
import data from "./data";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId);
    }

    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    data.map((dataItem )=> (
                    <div className="item">
                        <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                            <h4>{dataItem.question}</h4>
                            <span>+</span>
                        </div>
                        
                    </div>
                    ))
                    : <div>Sorry, No Data Found !</div>
                }
            </div>
        </div>
    )
} 