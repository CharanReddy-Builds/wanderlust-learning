const sampleListings = [
  {
    title: "Riverside Retreat",
    description: "Enjoy a peaceful stay beside a beautiful flowing river.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 2400,
    location: "Rishikesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
    category: "Mountains",
  },
  {
    title: "Hilltop Cabin",
    description:
      "A cozy wooden cabin with stunning views of the surrounding hills.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 2900,
    location: "Shimla",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1734, 31.1048],
    },
    category: "Mountains",
  },

  {
    title: "Coastal Escape",
    description:
      "Spend your vacation near the sea with beautiful coastal views.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 2100,
    location: "Pondicherry",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.8083, 11.9416],
    },
    category: "Beaches",
  },

  {
    title: "Tea Garden Retreat",
    description:
      "Stay among lush green tea plantations surrounded by misty hills.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 2600,
    location: "Munnar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889],
    },
    category: "Farms",
  },

  {
    title: "Jungle Safari",
    description:
      "Explore the wilderness and experience an exciting jungle safari.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 3800,
    location: "Ranthambore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.5026, 26.0173],
    },
    category: "Trending",
  },

  {
    title: "Island Paradise",
    description:
      "Relax on a peaceful island surrounded by crystal-clear waters.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 5200,
    location: "Andaman",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [92.7265, 11.6234],
    },
    category: "Beaches",
  },

  {
    title: "Heritage Haveli",
    description:
      "Discover traditional architecture and rich cultural heritage.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 3300,
    location: "Jodhpur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.0243, 26.2389],
    },
    category: "Trending",
  },

  {
    title: "Waterfall Hideaway",
    description:
      "A refreshing getaway located close to a spectacular waterfall.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 2300,
    location: "Wayanad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.132, 11.6854],
    },
    category: "Mountains",
  },

  {
    title: "Snow Mountain Lodge",
    description:
      "Enjoy a warm and comfortable lodge surrounded by snowy peaks.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 4100,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2396],
    },
    category: "Mountains",
  },

  {
    title: "Lake House",
    description: "A beautiful house overlooking a peaceful lake and mountains.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 3100,
    location: "Nainital",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.4636, 29.3919],
    },
    category: "Mountains",
  },

  {
    title: "Countryside Villa",
    description: "Escape the busy city and relax in a quiet countryside villa.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 3600,
    location: "Lonavala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.4057, 18.7546],
    },
    category: "Farms",
  },

  {
    title: "Golden Desert Camp",
    description:
      "Spend an unforgettable night camping among the golden sand dunes.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 2800,
    location: "Jaisalmer",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [70.9167, 26.9157],
    },
    category: "Trending",
  },

  {
    title: "Cliffside Retreat",
    description: "A spectacular stay on a cliff overlooking the ocean.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 4700,
    location: "Varkala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.7163, 8.7379],
    },
    category: "Beaches",
  },

  {
    title: "Mountain Village",
    description:
      "Experience peaceful village life surrounded by majestic mountains.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 1900,
    location: "Kasol",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.3151, 32.0097],
    },
    category: "Mountains",
  },

  {
    title: "Forest Cottage",
    description:
      "Stay in a charming cottage surrounded by tall trees and wildlife.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 2500,
    location: "Ooty",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.6932, 11.4102],
    },
    category: "Farms",
  },
  {
    title: "Arctic Glass Igloo",
    description:
      "Stay in a cozy glass igloo and admire the Northern Lights across the snowy Arctic wilderness.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 8500,
    location: "Rovaniemi",
    country: "Finland",
    geometry: {
      type: "Point",
      coordinates: [25.7294, 66.5039],
    },
    category: "Arctic",
  },

  {
    title: "Cozy City Room",
    description:
      "Enjoy a comfortable private room with modern amenities, perfect for exploring the city.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    price: 1800,
    location: "Bengaluru",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
    category: "Rooms",
  },
];

module.exports = { data: sampleListings };
