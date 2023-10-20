import {useState} from "react";
import "./App.css";
import {FiguresWrapper} from "./components/FiguresWrapper/FiguresWrapper.jsx";

function App() {
    const [rectanglesWrapperWidth, setRectanglesWrapperWidth] = useState(480);

    const handleEnterPress = (evt) => {
        if (evt.key !== 'Enter') return;

        if (evt.target.value >= 200 && evt.target.value <= 1024) {
            setRectanglesWrapperWidth(evt.target.value);
            return;
        }

        alert('value cannot be less than 200 or greater than 1024')
    };

    return (
        <div className="main">
            <input
                placeholder="Please enter a numeric value for the container width and press Enter to change it"
                type={"number"}
                onKeyDown={handleEnterPress}
            />
            <FiguresWrapper width={rectanglesWrapperWidth}/>
        </div>
    );
}

export default App;
