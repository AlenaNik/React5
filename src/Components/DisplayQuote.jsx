import  React  from 'react';

const  DisplayQuote = ({ simpson }) => {
    return (
        <div  className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img  className="ImageSimpson" src={simpson.image}  alt="simpson"  />
            <ul className="avenir b f2">
                <li> Character : {simpson.character}</li>
                <li> His/her quote: {simpson.quote}</li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;

