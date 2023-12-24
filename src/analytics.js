import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import posthog from "posthog-js";
export default (function () {
  posthog.init("phc_FHWJnR3TU7aAP9GLzbFo6l37YXY4P95mkZFyspEq9LP", {
    api_host: "https://us.posthog.com",
  });

  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({ location }) {
      //   _paq.push(["setCustomUrl", location.pathname]);
      //   _paq.push(["setDocumentTitle", document.title]);
      //   _paq.push(["trackPageView"]);
      posthog.capture("page_viewed", {
        path: location.pathname,
        title: document.title,
      });
      //   console.log(location.pathname);
      //   console.log(document.title);
    },
  };
})();
