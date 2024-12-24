import React from "react";
import "./SectionTitle.css";
import { SectionTitleProps } from "./SectionTitle.types";


const SectionTitle: React.FC<SectionTitleProps> = ({
    text,
    color = '#FFFFFF'
}) => {
    return (
        <div className="section-title" style={{color: color}}>
            <span className='top-line-title' style={{color: color}}></span>
            <h1> {text} </h1>      
            <span className='bottom-line-title' style={{color: color}}></span>
        </div> 
    );
};

export default SectionTitle;