export default {
    name: "komnews",
    title: "Komnews",
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
            name: "date",
            title: "Date",
            type: "date",
            options: {
                calendarTodayLabel: 'Today'
            }
        },

    ]
}