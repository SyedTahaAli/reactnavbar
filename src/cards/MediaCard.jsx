import React from 'react';
import '../cards.css';
import Images from './Images';
import Heading from './Heading';
// import './index.css';
// import './index.css';

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//         link: "https://www.w3schools.com"
//     },
// });
export default function MediaCard(props) {
    console.log(props);
    // const classes = useStyles();
    return (
        <>
            {/* <h1 className="heading_style">This is Card List</h1> */}
            <div className="cards">
                <div className="card" >
                    <Images imgsrc={props.imgsrc} />
                    <div className="card_info" >
                        <Heading title={props.title} />
                        <span className="card_catager" >{props.parag}</span>
                        <br />
                        <a href={props.link} target="_blank">
                            <button className="button"> click here </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
