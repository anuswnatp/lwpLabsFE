module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
    ],
    proxy: {
        prefix: "/api",
        url: `http://localhost:3001`,
    },
}