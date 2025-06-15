// const https = require('https');
// const fs = require('fs');
// const path = require('path');

// const downloadImage = (url, filepath) => {
//     return new Promise((resolve, reject) => {
//         https.get(url, (response) => {
//             if (response.statusCode === 200) {
//                 response.pipe(fs.createWriteStream(filepath))
//                     .on('error', reject)
//                     .once('close', () => resolve(filepath));
//             } else {
//                 response.resume();
//                 reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
//             }
//         });
//     });
// };

// const images = {
//     hero: [{
//             url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
//             filename: 'hero-1.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80',
//             filename: 'hero-2.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80',
//             filename: 'hero-3.jpg'
//         }
//     ],
//     team: [{
//             url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
//             filename: 'hoang.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
//             filename: 'designer.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
//             filename: 'frontend.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
//             filename: 'backend.jpg'
//         }
//     ],
//     testimonials: [{
//             url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
//             filename: 'client1.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80',
//             filename: 'client2.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
//             filename: 'client3.jpg'
//         }
//     ],
//     projects: [{
//             url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
//             filename: 'ecommerce.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
//             filename: 'corporate.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
//             filename: 'dashboard.jpg'
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80',
//             filename: 'social.jpg'
//         }
//     ]
// };

// async function downloadAllImages() {
//     for (const [category, categoryImages] of Object.entries(images)) {
//         const dirPath = path.join('public', 'images', category);

//         // Ensure directory exists
//         if (!fs.existsSync(dirPath)) {
//             fs.mkdirSync(dirPath, { recursive: true });
//         }

//         for (const image of categoryImages) {
//             const filepath = path.join(dirPath, image.filename);
//             console.log(`Downloading ${image.filename}...`);
//             try {
//                 await downloadImage(image.url, filepath);
//                 console.log(`Successfully downloaded ${image.filename}`);
//             } catch (err) {
//                 console.error(`Error downloading ${image.filename}:`, err.message);
//             }
//         }
//     }
// }

// downloadAllImages().then(() => {
//     console.log('All images downloaded successfully!');
// }).catch(err => {
//     console.error('Error downloading images:', err);
// });