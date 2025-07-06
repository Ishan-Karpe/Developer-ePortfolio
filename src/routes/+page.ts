import type { DevExperience } from "$lib/types/sanity";
import sanityClient from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const workExperience: DevExperience[] = await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');
    //async vs await: Async functions always return a promise. Await can only be used inside an async function.

    return {
        workExperience, 
    }
}
