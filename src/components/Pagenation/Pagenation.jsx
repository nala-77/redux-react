import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function Pagination({ data, setCurrentPageData }) {
// _______________________________________________________________________________

  const itemsPerPage = 6;
  const [currentButton, setCurrentButton] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    const tempNumberOfPages = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        tempNumberOfPages.push(i);
      }
    } else if (currentButton === 1) {
      tempNumberOfPages.push(1, 2, 3);
    } else if (currentButton === totalPages) {
      tempNumberOfPages.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
      tempNumberOfPages.push(
        currentButton - 1,
        currentButton,
        currentButton + 1
      );
    }

    setArrOfCurrButtons(tempNumberOfPages);

    const startIdx = (currentButton - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    setCurrentPageData(data.slice(startIdx, endIdx));
  }, [currentButton, data, totalPages, setCurrentPageData]);

// _______________________________________________________________________________

  return (
    <div className="flex justify-between items-center mt-50 pb-30">
      <a
        href="#"
        className={`${
          currentButton === 1 ? "opacity-30 dark:opacity-65" : ""
        } dark:text-white text-sm font-medium flex items-center gap-2`}
        onClick={(e) => {
          e.preventDefault();
          setCurrentButton((prev) => Math.max(prev - 1, 1));
        }}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="dark:text-white text-[23px]"
        />
        Previous
      </a>

      <div>
        {arrOfCurrButtons.map((item, index) => (
          <a
            href="#"
            key={index}
            className={`${
              currentButton === item ? "bg-bg-purple text-purple dark:text-black" : "dark:text-white "
            } text-sm font-medium py-2.5 px-4 rounded-lg`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentButton(item);
            }}
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#"
        className={`${
          currentButton === totalPages ? "opacity-30 dark:opacity-65" : ""
        } dark:text-white text-sm font-medium flex items-center gap-2`}
        onClick={(e) => {
          e.preventDefault();
          setCurrentButton((prev) => Math.min(prev + 1, totalPages));
        }}
      >
        Next
        <FontAwesomeIcon
          icon={faArrowRight}
          className="dark:text-white text-[23px]"
        />
      </a>
    </div>
  );
}

export default Pagination;
