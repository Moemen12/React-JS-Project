import { useState } from "react";

const ToggleChallenge = () => {
  const [hasClicked, setHasclicked] = useState(false);

  return (
    <div>
      <RenderedComponent clicked={hasClicked} />
      <button
        onClick={() => {
          setHasclicked(!hasClicked);
        }}
        type="button"
        className="btn"
      >
        {hasClicked ? "clicked" : "click on me"}
      </button>
    </div>
  );
};

const RenderedComponent = ({ clicked }) => {
  return (
    <div>
      {clicked ? "The button has clicked" : "The button has not clicked"}
    </div>
  );
};

export default ToggleChallenge;
