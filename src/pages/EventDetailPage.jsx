import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

/*
ROOT URL: http://yoshi.willandskill.eu:8999/api/v1/

LOGIN URL: ROOT URL + auth/api-token-auth/

EVENT LIST URL: ROOT URL + events/events/

EVENT PAGE LIST: ROOT URL + cms/{event_slug}/pages

EVENT MAIN PAGE: ROOT URL + cms/{event_slug}/main-page/

*/

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";

export default function EventDetailPage(props) {
  const { token } = useContext(UserContext);
  const [mainPageData, setMainPageData] = useState(null);
  useEffect(() => {
    fetchEventMainPage();
  }, []);

  function fetchEventMainPage() {
    const currentSlug = props.match.params.slug;
    const eventMainPageUrl = `${ROOT_URL}cms/${currentSlug}/main-page/`;
    fetch(eventMainPageUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMainPageData(data);
      });
  }
  return (
    <div>
      {mainPageData && (
        <div>
          <h1>{mainPageData.title}</h1>
          <p>{mainPageData.description}</p>
          {mainPageData.actionPoints &&
            mainPageData.actionPoints.map((actionPoint, index) => {
              return (
                <div key={index}>
                  <p>{actionPoint.title}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
