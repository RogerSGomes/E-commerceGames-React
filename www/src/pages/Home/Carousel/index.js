import './index.css';

export default function Carousel(props) {
    if (props.isActive) {
        return (
            <div className="selectedItem" style={{
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