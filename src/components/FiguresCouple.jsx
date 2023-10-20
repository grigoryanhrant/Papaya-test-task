import {Figure} from "./Figure/Figure";

export const FiguresCouple = () => {
    return (
        <div style={{ display: "flex", columnGap: "4px" }}>
            <Figure width={"50"} height={"60"} />
            <Figure width={"50"} height={"60"} />
        </div>
    );
};
