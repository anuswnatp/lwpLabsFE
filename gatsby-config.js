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
                apiURL: 'https://evening-mesa-71677.herokuapp.com',
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
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: 'gatsby-starter-default',
        //         short_name: 'starter',
        //         start_url: '/',
        //         background_color: '#663399',
        //         theme_color: '#663399',
        //         display: 'minimal-ui',
        //         icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        //     },
        // },
        'gatsby-plugin-offline',
    ],
    proxy: {
        prefix: "/api",
        url: "https://evening-mesa-71677.herokuapp.com" //heroku
        // `http://localhost:8001`, //local
    },
}
