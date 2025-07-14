import sanityClient, { processProjectEntries } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const workExperience: SanityWorkExperience[] = await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');

    const rawProjects: SanityProject[] = await sanityClient.fetch(
    "*[_type == 'project'] | order(Date desc)"
  );

  if (rawProjects.length === 0) {
    throw new Error("No projects found");
  }

  const skills: Skill[] = await sanityClient.fetch(`*[_type == 'skills'][0].skillsList`); // Fetching skills from Sanity CMS

  console.log("BEFORE TRANSFORMATION");
  console.log(rawProjects[0]);

  const projects = rawProjects.map(processProjectEntries);

  console.log("AFTER THE TRANSFORMATION");
  console.log(projects[0]);
  return {
    workExperience,
    projects,
    skills,
  };
};
