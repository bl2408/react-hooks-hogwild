import Card from "./Card";

function CardList({
    items
}){

    const displayItems = items.map(item=>{
        return <Card key={item.name} item={item}/>;
    });

    return (
        <div className="ui grid container">
            {displayItems}
        </div>
    );

}
export default CardList;

