import './Item.css';
function Item(props) {
    return (
        <div className="root">
            <div>{props.label}</div>
            <div>
                <h2>{props.date.toISOString()}</h2>
                <div>{props.price}</div>
            </div>
        </div>

    );
}
export default Item;