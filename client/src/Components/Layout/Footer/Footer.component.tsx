import facebook from "./pictures/facebook_icon.png";
import instagram from "./pictures/instagram_icon.png";
import linkedin from "./pictures/linkedin_icon.png";
import whatsapp from "./pictures/whatsapp_icon.png";
import github from "./pictures/github_icon.png";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/lielitzchak/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://www.facebook.com/liel.izchaak/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        href="https://www.instagram.com/lielitzchak/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/lielitzchak/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={whatsapp} alt="whatsapp" />
      </a>
      <a href="https:github.com/lielitzchak" rel="noreferrer" target="_blank">
        <img src={github} alt="github" />
      </a>
    </footer>
  );
}
