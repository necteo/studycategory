import "../../css/ResultHeader.css";
import NIAD from "../../assets/icon/types/NIAD.png";
import NIAH from "../../assets/icon/types/NIAH.png";
import NIPD from "../../assets/icon/types/NIPD.png";
import NIPH from "../../assets/icon/types/NIPH.png";
import NSAD from "../../assets/icon/types/NSAD.png";
import NSAH from "../../assets/icon/types/NSAH.png";
import NSPD from "../../assets/icon/types/NSPD.png";
import NSPH from "../../assets/icon/types/NSPH.png";
import PIAD from "../../assets/icon/types/PIAD.png";
import PIAH from "../../assets/icon/types/PIAH.png";
import PIPD from "../../assets/icon/types/PIPD.png";
import PIPH from "../../assets/icon/types/PIPH.png";
import PSAD from "../../assets/icon/types/PSAD.png";
import PSAH from "../../assets/icon/types/PSAH.png";
import PSPD from "../../assets/icon/types/PSPD.png";
import PSPH from "../../assets/icon/types/PSPH.png";

const ResultHeader = ({ studyType, results }) => {
  return (
    <div className="header">
      <div className="result-type">
        <img
          className="result-type-img"
          src={
            studyType === "NIAD"
              ? NIAD
              : studyType === "NIAH"
              ? NIAH
              : studyType === "NIPD"
              ? NIPD
              : studyType === "NIPH"
              ? NIPH
              : studyType === "NSAD"
              ? NSAD
              : studyType === "NSAH"
              ? NSAH
              : studyType === "NSPD"
              ? NSPD
              : studyType === "NSPH"
              ? NSPH
              : studyType === "PIAD"
              ? PIAD
              : studyType === "PIAH"
              ? PIAH
              : studyType === "PIPD"
              ? PIPD
              : studyType === "PIPH"
              ? PIPH
              : studyType === "PSAD"
              ? PSAD
              : studyType === "PSAH"
              ? PSAH
              : studyType === "PSPD"
              ? PSPD
              : PSPH
          }
          alt="type_psad"
          loading="lazy"
        />
      </div>
      <div className="tag" style={{ color: results.types[studyType]?.color }}>
        {results.types[studyType]?.tag}
      </div>
      <div className="name" style={{ color: results.types[studyType]?.color }}>
        {results.types[studyType]?.name}
      </div>
      <div className="summary">{results.types[studyType]?.summary}</div>
    </div>
  );
};

export default ResultHeader;
