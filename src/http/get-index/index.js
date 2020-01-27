const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Kole Joseph', // ←  Start by adding your name!
    title: 'Cursed land',
    occupation: 'biologist',
    location: 'pleasnt hill, CA',
    bio: 'I love cats and I want to get good at coding so I started this website',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    facebook: '',

    /**
     * Layout
     */
    photographer: '',
    service: 'Unsplash',
    credit: '',
    image: 'https://images.unsplash.com/photo-1532951779377-1080f5c62ab7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    <body>
      <a href="https://coolmathgames.com"
    <body>
  }
}
