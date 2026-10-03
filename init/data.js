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
  },
  {
    title: "Forest Cottage",
    description:
      "Stay in a cha rming cottage surrounded by tall trees and wildlife.",
    image: {
      url: "https://res.cloudinary.com/yogrqmvt/image/upload/v1790960177/wanderlust_dev/evtnpbde4kqgppkoosfv.jpg",
      filename: "wanderlust_dev/evtnpbde4kqgppkoosfv",
    },
    location: "Ooty",
    country: "India",
  },
];
module.exports = { data: sampleListings };
