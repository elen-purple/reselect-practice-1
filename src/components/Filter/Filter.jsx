import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterReducer';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Filter"
        onInput={e => {
          dispatch(changeFilter(e.currentTarget.value));
        }}
      />
    </div>
  );
};
