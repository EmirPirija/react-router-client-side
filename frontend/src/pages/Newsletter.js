import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "../components/PageContent";

import "./Newsletter.css";

function NewsletterPage() {
  return (
    <div className="fade-in">
      <PageContent title="Join our awesome newsletter!">
        <NewsletterSignup />
      </PageContent>
    </div>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
