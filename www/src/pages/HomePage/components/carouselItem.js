import './carouselItem.css';

function Carousel(props) {
    if (props.isActive) {
        return (
            <div className="selected_item" style={{
                backgroundImage: `url('${props.img}')`
            }} />
        );
    } else {
        return (
            <div className="item" style={{
                backgroundImage: `url('${props.img}')`
            }} />
        );
    }
}

export default Carousel;