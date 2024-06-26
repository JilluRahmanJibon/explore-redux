import {
	decrement,
	increment,
	incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
	const count = useAppSelector(state => state.counter.value);
	const dispatch = useAppDispatch();
	return (
		<div className="h-screen w-full flex justify-center items-center">
			<div className="flex gap-3 border border-purple-500 bg-slate-300 rounded-md p-10">
				<button
					onClick={() => dispatch(incrementByValue(5))}
					className="px-3 py-2 rounded-md border border-purple-700 bg-green-500">
					increment by 5
				</button>
				<button
					onClick={() => dispatch(increment())}
					className="px-3 py-2 rounded-md border border-purple-700 bg-green-500">
					increment
				</button>
				<h1 className="text-3xl">{count}</h1>
				<button
					onClick={() => dispatch(decrement())}
					className="px-3 py-2 rounded-md border border-purple-700 bg-red-500">
					decrement
				</button>
			</div>
		</div>
	);
}

export default App;
