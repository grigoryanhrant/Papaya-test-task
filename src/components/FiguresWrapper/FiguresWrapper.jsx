import "./FiguresWrapper.css";
import {FiguresCouple} from "../FiguresCouple";
import {Figure} from "../Figure/Figure";

export const FiguresWrapper = ({ width }) => {
    return (
        <div className="FiguresWrapper" style={{ width: `${width}px` }}>
            <FiguresCouple />
            <Figure width={"100"} height={"60"} offsetTop={{ marginTop: "5px" }} />
        </div>
    );
};
