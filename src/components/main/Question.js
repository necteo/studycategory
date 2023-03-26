const Question = ({ statement }) => {
  return (
    <div data-v-e858e9fa="" className="question">
      <div data-v-e858e9fa="" className="statement">
        <span data-v-e858e9fa="" id="stmt_fwp45lcsuw">
          {statement.statement}
        </span>
      </div>
      <div>
        <div
          data-v-e858e9fa=""
          aria-labelledby="stmt_fwp45lcsuw"
          role="radiogroup"
          className="decision"
        >
          <div data-v-e858e9fa="" className="caption agree">
            동의
          </div>
          <div data-v-e858e9fa="" className="options">
            <div
              data-v-e858e9fa=""
              aria-checked="false"
              aria-label="agree max"
              data-index="0"
              tabIndex="0"
              role="radio"
              className="option agree max"
            >
              <span
                data-v-e858e9fa=""
                aria-hidden="true"
                className="far fa-check"
              ></span>
            </div>
            <div
              data-v-e858e9fa=""
              aria-checked="false"
              aria-label="agree med"
              data-index="1"
              tabIndex="-1"
              role="radio"
              className="option agree med"
            >
              <span
                data-v-e858e9fa=""
                aria-hidden="true"
                className="far fa-check"
              ></span>
            </div>
            <div
              data-v-e858e9fa=""
              aria-checked="false"
              aria-label="agree min"
              data-index="2"
              tabIndex="-1"
              role="radio"
              className="option agree min"
            >
              <span
                data-v-e858e9fa=""
                aria-hidden="true"
                className="far fa-check"
              ></span>
            </div>
            <div
              data-v-e858e9fa=""
              aria-checked="false"
              aria-label="neutral"
              data-index="3"
              tabIndex="-1"
              role="radio"
              className="option neutral"
            >
              <span
                data-v-e858e9fa=""
                aria-hidden="true"
                className="far fa-check"
              ></span>
            </div>
            <div
              data-v-e858e9fa=""
              aria-checked="false"
              aria-label="disagree min"
              data-index="4"
              tabIndex="-1"
              role="radio"
              className="option disagree min"
            >
              <span
                data-v-e858e9fa=""
                aria-hidden="true"
                className="far fa-check"
              ></span>
            </div>
            <div
              data-v-e858e9fa=""
              aria-checked="false"
              aria-label="disagree med"
              data-index="5"
              tabIndex="-1"
              role="radio"
              className="option disagree med"
            >
              <span
                data-v-e858e9fa=""
                aria-hidden="true"
                className="far fa-check"
              ></span>
            </div>
            <div
              data-v-e858e9fa=""
              aria-checked="false"
              aria-label="disagree max"
              data-index="6"
              tabIndex="-1"
              role="radio"
              className="option disagree max"
            >
              <span
                data-v-e858e9fa=""
                aria-hidden="true"
                className="far fa-check"
              ></span>
            </div>
          </div>
          <div data-v-e858e9fa="" className="caption disagree">
            비동의
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
