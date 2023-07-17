export default {
    name: "igallery",
    title: "IGallery",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "desc",
            title: "Description",
            type: "string"
        },
        {
            name: "category",
            title: "Category",
            type: "string"
        },
        {
            name: "img",
            title: "Image",
            type: "image",
            options:{
                hotspot: true
            }
        },
        {
            name: "created",
            title: "Created",
            type: "string"
        },
        {
            name: "link",
            title: "Link",
            type: "string"
        },
    ]
}