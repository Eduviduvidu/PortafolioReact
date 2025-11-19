import { useState } from "react";
import { useTranslation } from "react-i18next";
import Page from "@layout/Page";
import Project from "@component/Project";

export default function Projects() {
  const [ projects, setProjects ] = useState([
    {
      title: "Test",
      description: "This does not mean anything, is just a test",
    },
    {
      title: "Test",
      description: "This does not mean anything, is just a test",
    },
  ]);
  const { t } = useTranslation(["projects"]);

  return (
    <Page>
      <h2>{t("Projects")}</h2>
      {!projects && <p>No projects yet!</p>}
      {projects &&
        projects.map((project) => {
          <Project type="card" project={project} />;
        })}
    </Page>
  );
}
