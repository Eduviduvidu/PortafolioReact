import Page from "@layout/admin/Page";
import { startRegistration } from "@simplewebauthn/browser";

export default function BackendLogin() {
  const base_url = "http://backend.villadagallardo.com/api";

  function handleClickLogin() {
    console.log("Handle Click Login!");

  }
  return (
    <Page>
      <h1>Backend Login</h1>
      <button onClick={handleClickLogin}>Login</button>
    </Page>
  );
}
