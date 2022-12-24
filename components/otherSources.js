import {
  DEVTO_PROFILE_URL,
  HASHNODE_PROFILE_URL,
  MEDIUM_PROFILE_URL,
} from "../utils/constants";

export default function OtherSources({ otherSourcesNames, otherSourcesUrls }) {
  const otherSourceProfileUrl = {
    medium: MEDIUM_PROFILE_URL,
    hashnode: HASHNODE_PROFILE_URL,
    devTo: DEVTO_PROFILE_URL,
  };
  return (
    <div className="other-sources">
      <i>
        🔗 Also read in{" "}
        {otherSourcesNames
          ?.map((otherSourceName, i) => {
            return (
              <a
                target="_blank"
                href={
                  otherSourceProfileUrl[otherSourceName] + otherSourcesUrls[i]
                }
                rel="noreferrer"
                key={i}
              >
                {otherSourceName}
              </a>
            );
          })
          .reduce((prev, curr) => [prev, ", ", curr])}
      </i>
    </div>
  );
}
