import { selectCurrPage, decrement, increment } from "../../REDUX/gallerySlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../lib/redux/store"; // Import the RootState type

export function Gallery() {
  // Use RootState for the state type in useSelector
  const currPage = useSelector((state: RootState) => selectCurrPage(state));
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{currPage}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
