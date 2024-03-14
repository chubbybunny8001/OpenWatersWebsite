// Node Modules
import { permanentRedirect } from 'next/navigation'
const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_ID,
})

export const getPageContentFromContentful = async (entryId) => {
    try {
        const content = await client.getEntry(entryId, {
            include: 10,
        })
        return content;

    } catch (error) {
        console.log(`Error happened when trying to fetch contentful content. ERROR: ${error}`);
        permanentRedirect("/error")
    }
}