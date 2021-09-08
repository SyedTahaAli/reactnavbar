
import React from 'react'
import MediaCard from './MediaCard';
import ITServicesData from './ITServicesData';
import '../cards.css';


function ncard(val) {
    console.log(val);
    return (
        <MediaCard
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.link}
            parag={val.parag}
        />
    );
}
export default function ITServicesCards() {
    return (
        <div>
            {ITServicesData.map(ncard)}
            {/* <MediaCard
                imgsrc={Sdata[0].imgsrc}
                title={Sdata[0].title}
                link={Sdata[0].link}
                parag={Sdata[0].parag}
            /> */}
            <br />
            {/* <MediaCard
                imgsrc={Sdata[1].imgsrc}
                title={Sdata[1].title}
                link={Sdata[1].link}
                parag={Sdata[1].parag}
            />
            <br />
            <MediaCard
                imgsrc={Sdata[2].imgsrc}
                title={Sdata[2].title}
                link={Sdata[2].link}
                parag={Sdata[2].parag}
            /> */}
        </div>
    );
}

