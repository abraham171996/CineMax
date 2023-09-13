import {defineField,defineType} from 'sanity';

export default defineType({
    name:"action",
    title:"Best of Action",
    type:'document',
    fields:[
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
            name:"description",
            title:"Description",
            type:"string"
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            hotspot:true,
        }),
    ]
})