import sanityClient from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const workExperience: SanityWorkExperience[] = await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');
    //async vs await: Async functions always return a promise. Await can only be used inside an async function.

    const rawProjects: SanityProject[] = await sanityClient.fetch('*[_type == "project"] | order(Date desc)');

    const projects = rawProjects.map((processProject) => {

    return {
        workExperience, 
        projects: rawProjects,
    }
}
