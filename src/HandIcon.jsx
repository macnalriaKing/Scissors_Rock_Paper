import rock from "../assets/rock.svg";
import scissors from "../assets/scissor.svg";
import paper from "../assets/paper.svg";

const DICE_IMAGES = {
  rock,
  scissors,
  paper,
};

function HandIcon({ icon }) {
  return <img src={DICE_IMAGES[icon]} alt={icon} />;
}

export default HandIcon;
