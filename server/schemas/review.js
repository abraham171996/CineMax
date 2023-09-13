import {defineField,defineType} from 'sanity';

export default defineType({
    name:"review",
    title:"Review",
    type:'document',

    fields:[
        defineField({
            name:'comment',
            title:'Comment',
            type:'string',
        }),
    ]
})