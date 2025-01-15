import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Card from "@site/src/components/Card";
import Star from "../components/Star";
import Fire from "../components/Fire";
import { content } from "../../content";
import posthog from "posthog-js";
import "/src/css/custom.css";
posthog.init("phc_FHWJnR3TU7aAP9GLzbFo6l37YXY4P95mkZFyspEq9LP", {
  api_host: "https://us.posthog.com",
});

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const handleAnnouncementClick = () => {
    posthog.capture("announcement_clicked");
  };

  const handleFeaturedClick = () => {
    posthog.capture("featured_clicked");
  };

  const handlePopularClick = () => {
    posthog.capture("popular_clicked");
  };

  const handleStarClick = () => {
    posthog.capture("star_clicked");
  };
  return (
    <Layout
      title={`Home`}
      description="Code documentation for students of RAIT maintained by Tejas Bhovad."
    >
      <main className="main-div">
        <div
          className="hero-section"
          style={{
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "black",
            textAlign: "center",
          }}
        >
          <div
            className=""
            style={{
              height: "10%",
              width: "auto",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            {" "}
            <Link
              to={content.announcement.link}
              onClick={handleAnnouncementClick}
              className="no-underline"
              style={{
                height: "50%",
              }}
            >
              <span
                className="label-announcement"
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  height: "50%",
                  width: "100%",
                  display: "flex",
                  gap: ".5rem",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "0.75rem",
                  paddingTop: ".75rem",
                  paddingLeft: ".75rem",
                  paddingRight: ".75rem",
                  borderRadius: "3px",
                  // color: "#000",
                }}
              >
                {content.announcement.label}
                <span
                  className="label-span"
                  // className="label-announcement"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {content.announcement.text}
                </span>
              </span>
            </Link>
          </div>

          <h1
            className="title"
            style={{
              fontWeight: "bold",
              height: "30%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Docs v2
          </h1>
          <div
            style={{
              height: "20%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="description"
              style={{
                maxWidth: "1200px",
                opacity: "0.8",
                padding: "0 1rem",
                // fontSize: "1.15rem",
              }}
            >
              A comprehensive collection of programming codes.
            </div>
          </div>
          <div
            style={{
              height: "30%",
              width: "100%",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "800",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              to="https://github.com/TejasBhovad/docs"
              className="no-underline"
              onClick={handleStarClick}
            >
              <button
                type="button"
                className="star-button"
                style={{
                  height: "30%",
                  display: "flex",
                  gap: ".5rem",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: ".75rem",
                  paddingTop: ".75rem",
                  paddingLeft: "2.75rem",
                  paddingRight: "2.75rem",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                Star us on Github
              </button>
            </Link>
          </div>
        </div>
        <div
          className=""
          style={{
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <div
            className="line"
            style={{
              position: "absolute",
              height: "1px",
              width: "100%",
            }}
          ></div>
          <div
            className="sem"
            style={{
              width: "20%",
              padding: "0.25rem 1rem",
              maxWidth: "1200px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              borderRadius: "4px",
              zIndex: "1",
              fontFamily: "Helvetica Neue",
              fontWeight: "bold",
            }}
          >
            Semesters
          </div>
        </div>
        <div
          className=""
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          <div className="container-s">
            <Card sem="1" linkto="/one" />
            <Card sem="2" linkto="/two" />
            <Card sem="3" linkto="/three" />
            <Card sem="4" linkto="/four" />
            <Card sem="5" linkto="/five" />
            <Card sem="6" linkto="/six" />
          </div>
        </div>
        <div
          className=""
          style={{
            maxHeight: "430px",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 1rem",
          }}
        >
          <div className="container-k">
            <div
              className=""
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.25rem 1rem",
              }}
            >
              <Link
                to={content.featured.link}
                className="no-underline"
                onClick={handleFeaturedClick}
              >
                <div
                  className="card-link"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.75rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "1rem",
                    }}
                  >
                    <span
                      className="label-featured"
                      style={{
                        padding: "0.1rem 1.25rem",
                        borderRadius: "15px",
                        fontWeight: "bold",
                        display: "flex",
                        gap: ".35rem",
                      }}
                    >
                      <Star />
                      Featured
                    </span>
                  </div>
                  <div
                    className=""
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      padding: "0.5rem 1rem",
                      margin: "0",
                    }}
                  >
                    <span
                      className="title-card"
                      style={{
                        fontSize: "1 rem",
                        fontWeight: "bold",
                      }}
                    >
                      {content.featured.title}
                    </span>

                    <span
                      className="card-desc"
                      style={{
                        textAlign: "start",
                      }}
                    >
                      {content.featured.desc}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.25rem 1rem",
              }}
            >
              <Link
                to={content.popular.link}
                className="no-underline"
                onClick={handlePopularClick}
              >
                <div
                  className="card-link"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.75rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "1rem",
                    }}
                  >
                    <span
                      className="label-featured"
                      style={{
                        padding: "0.1rem 1.25rem",
                        borderRadius: "15px",
                        fontWeight: "bold",
                        display: "flex",
                        gap: ".35rem",
                      }}
                    >
                      <Fire />
                      Popular
                    </span>
                  </div>
                  <div
                    className=""
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      padding: "0.5rem 1rem",
                      margin: "0",
                    }}
                  >
                    <span
                      className="title-card"
                      style={{
                        fontSize: "1 rem",
                        fontWeight: "bold",
                      }}
                    >
                      {content.popular.title}
                    </span>

                    <span
                      className="card-desc"
                      style={{
                        textAlign: "start",
                      }}
                    >
                      {content.popular.desc}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
