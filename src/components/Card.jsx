import { useState } from "react";

function Card({
    item
}){

    const [expanded, setExpanded] = useState(false);

    const buttonMore = ()=>{
        setExpanded(ex => !expanded);
    };

    return(
        <div className="ui eight wide column">
            <div className="ui card">
                <div className="image">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="content">
                    <span className="header">{item.name}</span>
                    <div className="dropdown" expanded={ expanded.toString() }>
                        <div className="meta">
                            <p>
                                <i className="icon trophy"></i>
                                {item["highest medal achieved"]}
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                <i className="balance scale icon"></i>
                                {item.weight}
                            </p>
                            <span className="date">
                                Greased: <b>{item.greased ? "Yes" : "No"}</b>
                            </span>
                        </div>
                        <div className="description">
                            {item.specialty}
                        </div>
                    </div>
                </div>
                <div className="extra content">
                    <button onClick={buttonMore} className="ui button">{expanded ? "Hide" : "More"}</button>
                </div>
            </div>
        </div>
    );

}
export default Card;

