const Action = ({ pageNum, setPageNum }) => {
  const onClickNext = () => {
    if (pageNum < 5) setPageNum(pageNum + 1);
    else if (pageNum === 5) return (document.location.href = "/result");
  };

  return (
    <div className="action-row">
      <button
        type="button"
        className="sp-action sp-button button--action button--purple button--lg button--pill button--fixed button--icon-rt"
        onClick={onClickNext}
      >
        <span className="button__text">
          {pageNum < 5 ? "다음" : "결과확인"}
        </span>
        <span
          data-v-72ca41a0=""
          className="sp-icon size--inherit color--inherit icon--rotatable icon--dir-rt icon--arrow"
        >
          <svg
            aria-labelledby="i_zbbj365eq3"
            viewBox="0 0 48 48"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="i_zbbj365eq3">다음</title>
            <path
              data-v-72ca41a0=""
              d="M23.446875,3.571875 L21.590625,5.428125 C21.15,5.86875 21.15,6.58125 21.590625,7.021875 L36.13125,21.5625 L4.125,21.5625 C3.50625,21.5625 3,22.06875 3,22.6875 L3,25.3125 C3,25.93125 3.50625,26.4375 4.125,26.4375 L36.13125,26.4375 L21.590625,40.978125 C21.15,41.41875 21.15,42.13125 21.590625,42.571875 L23.446875,44.428125 C23.8875,44.86875 24.6,44.86875 25.040625,44.428125 L44.671875,24.796875 C45.1125,24.35625 45.1125,23.64375 44.671875,23.203125 L25.040625,3.571875 C24.6,3.13125 23.8875,3.13125 23.446875,3.571875 Z"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Action;
