import  React  from  'react';

const  DisplayQuote = ({ simpson }) => {
    return (
        <div  className="DisplayQuote">
            <img  className="ImageSimpson" src={simpson.image}  alt="simpson"  />
            <ul>
                <li> character : {simpson.character}</li>
                <li> quote: {simpson.quote}</li>

            </ul>
        </div>
    );
};

export  default  DisplayQuote;

