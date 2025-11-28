import Protected from "@component/Protected";
import Page from "@layout/admin/Page";

export default function BackendDashboard() {
  return (
    <Protected>
      <Page>
        <h1>Backend Dashborad</h1>
      </Page>
    </Protected>
  );
}
