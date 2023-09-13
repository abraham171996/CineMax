import sanityClient from '@sanity/client';
import imageurlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId:'nlqpe0eq',
    dataset: "production",
    apiVersion: '2021-10-21',
    token:'skPxexFkGLiSV8Nx3ozh93o7CK2tSOgYr4MunbfoyTzgKAuPJWymTacx6Ma1OIBaoIMBKqDvo53FKGZf1s5CM8dgzaPHCPSqBKf69vby5HRnu88YL5vbUReur9nlXYQd6JGJRaAaXvMkYvNRlB8WcoAGvuilfdy4DLpaoxP54dCFVvHS4EYV',
    useCdn: true,
})

const builder = imageurlBuilder(client);
export const urlFor = (source)=>{
    return builder.image(source)
};