import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from './categories/categoriesSlice';

export default function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories-div">
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h2>{categories.value}</h2>
    </div>
  );
}
