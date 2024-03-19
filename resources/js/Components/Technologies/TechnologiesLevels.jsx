import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const TechnologiesLevels = ({ niveau }) => {
    return (
        <article className="lg:w-1/2 flex items-center justify-center">
            <div className="w-2/3">
                <CircularProgressbar
                    value={niveau}
                    text={`${niveau}%`}
                    styles={buildStyles({
                        textColor: "white",
                        pathColor: "#F5CC00",
                        trailColor: "white",
                        backgroundColor: "#3e98c7",
                    })}
                />
            </div>
        </article>
    );
};

export default TechnologiesLevels;
