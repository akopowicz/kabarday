import style from './Quality.module.css';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useProductsContext } from '../../Context/ProductsContextProvider';

export const Quality = () => {
const {quality, setQuality} = useProductsContext();
  const [showOptions, setShowOptions] = useState(false);
  

  const options = [{ name: "Wełna"}, { name: "Alpaka"}, { name: "Jedwab"}, { name: "Merynos"}, { name: "Bawełna"}, { name: "Moher"}, {name: "all"}];
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
      <div className={style.selected}>
      {quality!=="all"? quality: "Wybierz jakość"}{showOptions ? <KeyboardArrowUpIcon className={style.selectedIcon} /> : <KeyboardArrowDownIcon className={style.selectedIcon} />}
      </div>

      
      <div className={`${style.options} ${showOptions ? style.show : ""}`}>

        {options.map(option =>
          <div
            key={option.name}
            className={style.selectOption}
           onClick={()=>{setQuality(option.name)}}
          > {option.name!=="all"? option.name: "Wszystkie"}
            {/* {option.name} {option.showArrow ? option.ascendic ? <ArrowUpwardIcon className={style.optionIcon} /> : <ArrowDownwardIcon className={style.optionIcon} /> : ""} */}
          </div>
        )}
      </div>
    </div>
  )
}