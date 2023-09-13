import {defineField,defineType} from 'sanity';

export default defineType({
    name:'topRated',
    title:'TopRated',
    type:'document',

    fields: [
        defineField({
            name:'title',
            title:'Title',
            type:'string',
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
        }),
        defineField({
            name:'age',
            title:'Age',
            type:"string"
        }),
        defineField({
            name:'count',
            title:'Count',
            type:'string',
        }),
        defineField({
            name:'gener',
            title:'Gener',
            type:'string',
        }),
        defineField({
            name:'imdb',
            title:'Imdb',
            type:'number',
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            hotspot:true,
        }),
    ]
})