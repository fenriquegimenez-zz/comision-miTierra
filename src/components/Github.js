import light from "../images/GitHub-Mark-Light-32px.png";
import dark from "../images/GitHub-Mark-32px.png";

export const Github = props => {
  return (
    <div>
      <a href="https://github.com/fenriquegimenez/comision-miTierra">
        <img src={props.dark ? light : dark} alt="Git repository" />
      </a>
    </div>
  );
};
