const path = require('path')
// create pages dynamically
exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions 
    const result = await graphql(`
    query GetDogs {
            dogs: allContentfulDogProfile {
            nodes {
                slug
                }
            }
        }`
    )
    result.data.dogs.nodes.forEach((dog) => {
        createPage({
            path: `/dogs/${dog.slug}`,
            component: path.resolve(`src/template/dog-template.js`),
            context: {
                slug: dog.slug
            },
        })
    })
}