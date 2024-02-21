import React, { useState, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";
import date from "date-and-time";

const Card = () => {
    const now = new Date();
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [hooray, setHooray] = useState(false);

    console.log(check1);

    const completedTasks = [check1, check2, check3].filter(
        (task) => task
    ).length;

    const totalTasks = 3;
    const percentage = Math.round((completedTasks / totalTasks) * 100);

    const clearAll = () => {
        setCheck1(false);
        setCheck2(false);
        setCheck3(false);
    };

    const { width, height } = useWindowSize();

    useEffect(() => {
        if (percentage === 100) {
            setTimeout(() => {
                setHooray(true);
            }, 1000);
        } else {
            setHooray(false);
        }
    }, [percentage]);

    return (
        <div className="px-10 my-5 mb-10 py-16 bg-white  max-w-xl mx-auto rounded-md">
            <h3 className="font-bold text-2xl my-4 tracking-wider">
                {date.format(now, "ddd, MMM DD YYYY")}
            </h3>
            {hooray && <Confetti width={width} height={height} />}
            <div>
                <progress
                    className="progress progress-success bg-[#D6EAC5] w-50 h-4"
                    value={percentage}
                    max="100"
                ></progress>
            </div>
            <form className="space-y-4 my-4">
                <label className="input input-bordered flex items-center gap-2">
                    {input1 && (
                        <input
                            type="checkbox"
                            id="1"
                            checked={check1}
                            className="checkbox checkbox-success"
                            onChange={(e) => setCheck1(e.target.checked)}
                        />
                    )}

                    <input
                        type="text"
                        className="grow  tracking-wide"
                        placeholder="task"
                        onChange={(e) => setInput1(e.target.value)}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    {input2 && (
                        <input
                            type="checkbox"
                            id="2"
                            checked={check2}
                            className="checkbox checkbox-success"
                            onChange={(e) => setCheck2(e.target.checked)}
                        />
                    )}
                    <input
                        type="text"
                        className="grow  tracking-wide"
                        placeholder="task"
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    {input3 && (
                        <input
                            type="checkbox"
                            id="3"
                            checked={check3}
                            className="checkbox checkbox-success"
                            onChange={(e) => setCheck3(e.target.checked)}
                        />
                    )}
                    <input
                        type="text"
                        className="grow  tracking-wide"
                        placeholder="task"
                        onChange={(e) => setInput3(e.target.value)}
                    />
                </label>
            </form>
            <div>
                <button
                    className="btn glass bg-[#49a3001f] tracking-wider"
                    onClick={clearAll}
                >
                    Clear
                </button>
            </div>

            <h6 className="text-center my-4 font-semibold tracking-wider">
                Made By <span>Lokesh Vasnik</span> 🖤
            </h6>
        </div>
    );
};

export default Card;
