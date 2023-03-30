import Header from "./main/Header";
import Progress from "./main/Progress";
import Questions from "./main/Questions";
import Tips from "./main/Tips";

const MainApp = ({ score, setScore }) => {
  return (
    <div className="main-wrapper">
      <main className="q-pt">
        <Header />
        <Tips />
        <div id="main-app">
          <div>
            <div data-chunk="quiz-chunk">
              <Progress />
              <Questions />
            </div>
            <div className="modal__container">
              <div id="portal--modal">
                <div
                  data-v-e82c9d1e=""
                  data-v-32dd9c4d=""
                  className="modal__grandparent"
                ></div>
                <div
                  data-v-e82c9d1e=""
                  data-v-32dd9c4d=""
                  className="modal__grandparent"
                ></div>
                <div data-v-e82c9d1e="" className="modal__grandparent"></div>
                <div data-v-e82c9d1e="" className="modal__grandparent"></div>
                <div data-v-e82c9d1e="" className="modal__grandparent"></div>
                <div data-v-e82c9d1e="" className="modal__grandparent"></div>
                <div
                  data-v-e82c9d1e=""
                  data-v-6703ee31=""
                  className="modal__grandparent"
                ></div>
                <div
                  data-v-e82c9d1e=""
                  data-v-6703ee31=""
                  className="modal__grandparent"
                ></div>
              </div>
            </div>
            <div className="scrollbar-measure"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainApp;
