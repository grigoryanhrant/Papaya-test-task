import "./Figure.css";

export const Figure = ({ width, height, offsetTop }) => {

    const figureStyles = {
        width: `${width}%`,
        height: `${height}px`,
        ...offsetTop,
    }

    return <div className="figure" style={figureStyles} />
};
