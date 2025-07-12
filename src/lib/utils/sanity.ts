import {createClient, type ClientConfig} from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url";
const config: ClientConfig = {

    projectId: '6q0kl3sk',
    dataset: 'experience-db',
    useCdn: true, // Use the CDN for faster response times
    apiVersion: '2025-07-06'
}

const sanityClient = createClient(config); // Create a Sanity client instance using config as the base
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
    const builder = imageUrlBuilder(sanityClient); // Create an image URL builder instance using the Sanity client
    // Check if the project image exists and build the URL, otherwise use an empty string
    const projectImageUrl = rawProject.image ? builder.image(rawProject.image).url() : '';

    const processedProject: ProcessedProject = {
        name: rawProject.Name,
        company: rawProject.Company || '',
        date: rawProject.Date,
        stack: rawProject.stack,
        slug: rawProject.slug,
        projectImageUrl,
        description: rawProject.description || '',
        content: rawProject.content?.map(processProjectContent) ?? [],
    };

    return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
    if (content._type === 'block') {
        //process txt content
        const processedTextContent: ProcessedTextContent = {
            type: 'text',
            style: content.style,
            textToRender: content.children.map(Element => Element.text).join('\n'),   
        };
        return processedTextContent;
    } else {
        //process image content
        const builder = imageUrlBuilder(sanityClient);
        const projectImageUrl = builder.image(content).url();

        const processedImage: ProcessedImageContent = {
            type: 'image',
            url: projectImageUrl
        };
        return processedImage;
    }
}