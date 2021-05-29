module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-catch-links`,
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'https://admin.lwplabs.com',
                contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
                    'Courses'
                ],
                loginData: {
                    identifier: "anuswantp1998@gmail.com",
                    password: "Justgonemad@00",
                },
                queryLimit: 1000,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/L-300.png`
            },
        }
    ],
    proxy: {
        prefix: "/api",
        url: "https://admin.lwplabs.com" //oracle
        // `http://localhost:8001`, //local
    },
}
