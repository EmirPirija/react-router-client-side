import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

import "./Error.css"; //

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <div className="error-page">
      <MainNavigation />
      <div className="page-content">
        <div className="page-title">{title}</div>
        <p className="page-message">{message}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
