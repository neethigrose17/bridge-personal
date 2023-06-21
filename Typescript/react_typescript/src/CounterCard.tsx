import {Dispatch, SetStateAction} from "react";

type CounterCardProps = {
    count: number;
    setCount: Dispatch<SetStateAction<number>>
    // setCount: (newCount: number) => void
}

const CounterCard = (props: CounterCardProps) => {
    const {count, setCount} = props;
    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    )
}

export default CounterCard;