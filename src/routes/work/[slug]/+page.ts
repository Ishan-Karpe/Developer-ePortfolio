//Load function runs twice, once on the server and once on the client
// fetched project checks if the project exists in Sanity CMS, slug match returns the project data

import sanityClient, {processProjectEntries} from '$lib/utils/sanity';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => { //what the slug is
  const { slug } = params;

// we need an array of projects that match the slug
  // Fetching projects from Sanity CMS based on the slug

  // Define the type for the project
  const rawProjects: SanityProject[] = await sanityClient.fetch(`*[_type == "project" && slug == $slug]`, { slug }); // slug is a variable that we pass to the query
  
  if (rawProjects.length === 0) {
    throw error(404, `Project with slug "${slug}" not found`);
  }

  const project = processProjectEntries(rawProjects[0]); // Assuming slug is unique, we take the first project
  // processProjectEntries is a utility function to process the project data

return {
    project // Return the project data to the page
};
};