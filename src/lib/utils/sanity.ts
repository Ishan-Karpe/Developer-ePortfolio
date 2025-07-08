import {createClient, type ClientConfig} from "@sanity/client"

const config: ClientConfig = {

    projectId: '6q0kl3sk',
    dataset: 'experience-db',
    useCdn: true, // Use the CDN for faster response times
    apiVersion: '2025-07-06'
}

const sanityClient = createClient(config); // Create a Sanity client instance using config as the base
export default sanityClient;

export function processProject(rawProjects: SanityProject[]) {
    const processedProject: ProcessedProject = {}
}

