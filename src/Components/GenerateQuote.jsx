import  React  from 'react';

const  GenerateQuote = ({ selectSimpson }) => {
    return (
        <div className="lightest-blue grow bw2 shadow-5">
            <button onClick={selectSimpson} className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib hot-pink">Hope it works</button>
        </div>
    );
};

export  default  GenerateQuote;
