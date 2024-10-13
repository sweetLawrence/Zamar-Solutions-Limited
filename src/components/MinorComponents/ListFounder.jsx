/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @param {index, image, name, title, text} props - Props
 * @param {number} props.index
 * @param {string} props.image
 * @param {string} props.name
 * @param {string} props.title
 * @param {string} props.text
 // * @param {any} props.children
 */

 export default function ListFounder(props) {
    // eslint-disable-next-line react/prop-types
    const {index, image, name, title, text} = props
    return (
        <div
            style={{
                flexDirection: (index % 2 === 0) ? "row" : "row-reverse",
                float: index % 2 === 0 ? "left" : "right"
            }}
            className={"list-founder"}
        >
            <div className={"left"}>
                <div className={"image"}>
                    <img src={image} alt={`founder ${name}`}/>
                </div>
                <strong>{name}</strong>
                <p>{title}</p>
            </div>
            <div className={"right"}>
                <p>{text}</p>
            </div>
        </div>
    )
}

