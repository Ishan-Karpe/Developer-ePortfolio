import sanityClient, { processProjectEntries } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const workExperience: SanityWorkExperience[] = await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');
    //async vs await: Async functions always return a promise. Await can only be used inside an async function.

    const rawProjects: SanityProject[] = await sanityClient.fetch(
    "*[_type == 'project'] | order(Date desc)"
  );

  console.log("BEFORE TRANSFORMATION");
  console.log(rawProjects[0]);

  const projects = rawProjects.map(processProjectEntries);

  console.log("AFTER THE TRANSFORMATION");
  console.log(projects[0]);
  return {
    workExperience,
    projects,
  };
}
