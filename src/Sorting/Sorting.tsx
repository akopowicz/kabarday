import style from './Sorting.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useUserProductsContext } from '../Context/UserProductsContextProvider';
import { useState, useRef, useEffect } from 'react';

export const Sorting = () => {
  const { sortTypeText, setSortTypeText, setSortType, } = useUserProductsContext();

  const [showOptions, setShowOptions] = useState(false);

  const options = [{ name: "Sortowanie domyślne", column: "", ascendic: true, showArrow: false }, { name: "Od najnowszych", column: "time", ascendic: false, showArrow: false }, { name: "Cena malejąco", column: "price", ascendic: false, showArrow: true }, { name: "Cena rosnąco", column: "price", ascendic: true, showArrow: true }];
  const newRef = useRef<HTMLDivElement>(null);

  const handleOptions = () => {
    setShowOptions(!showOptions);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as Node;
    if (newRef.current && !newRef.current.contains(target)) {
      setShowOptions(false);
    }
  };

  return (
    <div className={style.select} onClick={handleOptions} ref={newRef}>
      <div className={style.selected}>{sortTypeText}{showOptions ? <KeyboardArrowUpIcon className={style.selectedIcon} /> : <KeyboardArrowDownIcon className={style.selectedIcon} />}</div>
      <div className={`${style.options} ${showOptions ? style.show : ""}`}>

        {options.map(option =>
          <div
            key={option.name}
            className={style.selectOption}
            onClick={() => {
              setSortTypeText(option.name);
              setSortType({
                column: option.column,
                ascendic: option.ascendic
              });
            }}
          >
            {option.name} {option.showArrow ? option.ascendic ? <ArrowUpwardIcon className={style.optionIcon} /> : <ArrowDownwardIcon className={style.optionIcon} /> : ""}
          </div>
        )}
      </div>
    </div>
  )
}