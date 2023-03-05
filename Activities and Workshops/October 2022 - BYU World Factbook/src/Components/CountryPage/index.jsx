import { useEffect } from "react"
import { emojify } from "../../common/common"
import flags from "../../data/flags.json"
import './styles.css'

const CountryPage = (props) => {
  const { country, countryName, flag } = props;
  // link Government Website
  const headers = [
    `Advanced Persistent Threats`,
    `Indicators of Compromise Categories`,
    `Traditional Media Landscape`,
    `Social Media Landscape`,
    `ISP Registrar`,
    `Security/Privacy Regulation`,
    `Transnational Issues`,
    `Political Opposition`,
  ];
  const countryData = localStorage.getItem(`${countryName}`) !== undefined ? localStorage.getItem(`${countryName}`) : null;
  const countryFlagImage = flag[0][1].image

  useEffect(() => {
    localStorage.setItem(
        `${countryName}`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.`
        )
  }, [countryData])

  return (
    <div>
      <h1>
        {emojify(flag[0])}{` `}
        <u>{countryName}</u>
        {` `}{emojify(flag[0])}
      </h1>
      {headers.map((header, index) => {
        return (
          <div key={index}>
            <h2>{header}</h2>
            <p>
              {localStorage.getItem(`${countryName}`)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CountryPage;
