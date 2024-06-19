const Circle = ({x, y, bgColor}) => {
    return (
        <div
            className={"circle"}
            style={{
                backgroundColor: bgColor,
                top: `${y - 24}px`,
                left: `${x - 24}px`
            }}
        >

        </div>
    )
}

const Circles = ({circles}) => {
    return (
        circles.map(circle => {
            return <Circle key={circle.id} {...circle}/>
        })
    )
}

export default Circles;
