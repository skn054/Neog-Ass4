import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    type: "restaurant",
    _id: 93072,
    info: {
      resId: 93072,
      name: "My Friend's Circle Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/b5b/d5a3fb9455817e7a0f5d73709336cb5b.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/93072/36f3cf137c298d60cd4a19467c71f403_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "145.9K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "2,675",
            reviewTextSmall: "2,675 Reviews",
            subtext: "2,675 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "143.2K",
            reviewTextSmall: "143.2K Reviews",
            subtext: "143.2K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹850 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Medchal Road, Hyderabad",
        address: "Suchitra X Road, Quthbullapur, Medchal Road, Hyderabad",
        localityUrl: "hyderabad/medchal-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTk2XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/mandi/",
          name: "Mandi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "42 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/my-friends-circle-restaurant-medchal-road/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/my-friends-circle-restaurant-medchal-road/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "6.6 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"eed2fa50-fdc2-4f7b-aacd-f19688cafe51","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"93072","element_type":"listing","rank":1,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "53750+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 94997,
    info: {
      resId: 94997,
      name: "Harsha Deluxe Mess",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/94997/36c79c28b7f1eae5d0d2385f72d74960_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/94997/a86095ef3844d2e6e84df14e2ea9a94a_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "901",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "528",
            reviewTextSmall: "528 Reviews",
            subtext: "528 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "373",
            reviewTextSmall: "373 Reviews",
            subtext: "373 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹350 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Ameerpet, Hyderabad",
        address: "8-3-214, /2/6, Srinivas Nagar Colony, Ameerpet, Hyderabad",
        localityUrl: "hyderabad/ameerpet-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/andhra/",
          name: "Andhra",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "39 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/harsha-deluxe-mess-1-ameerpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/harsha-deluxe-mess-1-ameerpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"eed2fa50-fdc2-4f7b-aacd-f19688cafe51","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"94997","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "4100+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 90896,
    info: {
      resId: 90896,
      name: "Bawarchi",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/97b/dae9d5dc6855715ace57f3488558397b.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/90896/450c8d02eb0d15a4beb6bd56430453db_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "475.8K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "16.2K",
            reviewTextSmall: "16.2K Reviews",
            subtext: "16.2K Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "459.7K",
            reviewTextSmall: "459.7K Reviews",
            subtext: "459.7K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "RTC X roads, Hyderabad",
        address: "Door 66, Axamabad, RTC X roads, Hyderabad",
        localityUrl: "hyderabad/rtc-x-roads-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "39 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/bawarchi-rtc-x-roads/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/bawarchi-rtc-x-roads/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "4 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"eed2fa50-fdc2-4f7b-aacd-f19688cafe51","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"90896","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "82025+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 93043,
    info: {
      resId: 93043,
      name: "Mehfil",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/677/f8fcc2b5c509d5e42a360fa7e8954677.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/93043/ddff0787805c7d2377e232d550af5dd6_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "189K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "4,682",
            reviewTextSmall: "4,682 Reviews",
            subtext: "4,682 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "184.4K",
            reviewTextSmall: "184.4K Reviews",
            subtext: "184.4K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹700 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Narayanguda, Hyderabad",
        address:
          "Near Narayanguda Flyover, Chikkadpalli Road, Narayanguda, Hyderabad",
        localityUrl: "hyderabad/narayanguda-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/mehfil-narayanguda/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/mehfil-narayanguda/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "4.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"eed2fa50-fdc2-4f7b-aacd-f19688cafe51","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"93043","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "72500+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 91662,
    info: {
      resId: 91662,
      name: "Paradise Biryani",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/91662/0184215797f07b24d6f25621beaa38bb_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/91662/fa16bfd113ef53f7912450f0f585e77a_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "73.7K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "12.2K",
            reviewTextSmall: "12.2K Reviews",
            subtext: "12.2K Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "61.5K",
            reviewTextSmall: "61.5K Reviews",
            subtext: "61.5K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,200 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Paradise Circle, Secunderabad",
        address: "Door 1-7-191 To 193, SD Road, Paradise Circle, Secunderabad",
        localityUrl: "hyderabad/paradise-circle-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "19 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/hyderabad/paradise-biryani-paradise-circle-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/paradise-biryani-paradise-circle-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "344 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"eed2fa50-fdc2-4f7b-aacd-f19688cafe51","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"91662","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "9625+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 19698425,
    info: {
      resId: 19698425,
      name: "Shah Ghouse Hotel & Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/19698425/ff2a033de7e1e643935b8899a1e2b42e_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/93970/ae0a71b4d560c4bcf7f52761c614fcc1_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "42.2K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.0",
            reviewCount: "63",
            reviewTextSmall: "63 Reviews",
            subtext: "63 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "yellow",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "42.2K",
            reviewTextSmall: "42.2K Reviews",
            subtext: "42.2K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,000 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Lakdikapul, Hyderabad",
        address: "6-2-971, Lakdikapul, Hyderabad",
        localityUrl: "hyderabad/lakdikapul-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTk2XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/mandi/",
          name: "Mandi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/shawarma/",
          name: "Shawarma",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "52 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/shah-ghouse-hotel-restaurant-lakdikapul/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/shah-ghouse-hotel-restaurant-lakdikapul/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "4.9 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"eed2fa50-fdc2-4f7b-aacd-f19688cafe51","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19698425","element_type":"listing","rank":6,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "33475+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 92020,
    info: {
      resId: 92020,
      name: "Grand Hotel",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/92020/0307c6fdb751054fb51f876bb913cc16_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/92020/3088315ab85025468fb789f2871bf131_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "109.8K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "4,833",
            reviewTextSmall: "4,833 Reviews",
            subtext: "4,833 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "104.9K",
            reviewTextSmall: "104.9K Reviews",
            subtext: "104.9K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹950 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Abids, Hyderabad",
        address: "Plot 4-1-395, Opposite Big Bazaar, Abids, Hyderabad",
        localityUrl: "hyderabad/abids-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/grand-hotel-abids/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/grand-hotel-abids/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "6.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"eed2fa50-fdc2-4f7b-aacd-f19688cafe51","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"92020","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "32550+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 19269544,
    info: {
      resId: 19269544,
      name: "Grill 9",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19269544/db65ce4a33d5f4e4204ca1d1a34f3169.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/96627/db65ce4a33d5f4e4204ca1d1a34f3169_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.5",
        rating_text: "3.5",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "47.7K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.3",
            reviewCount: "171",
            reviewTextSmall: "171 Reviews",
            subtext: "171 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "47.5K",
            reviewTextSmall: "47.5K Reviews",
            subtext: "47.5K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹950 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "S D Road, Secunderabad",
        address:
          "10-3-161, Plot 17/A/1 & 177A/2, Near Rail Nilayam, S D Road, Secunderabad",
        localityUrl: "hyderabad/sd-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/arabian/",
          name: "Arabian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/lebanese/",
          name: "Lebanese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/shawarma/",
          name: "Shawarma",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTkzXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/bbq/",
          name: "BBQ",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "26 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/grill-9-sd-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/grill-9-sd-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "1.9 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"eed2fa50-fdc2-4f7b-aacd-f19688cafe51","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19269544","element_type":"listing","rank":8,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "24725+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 92881,
    info: {
      resId: 92881,
      name: "Kritunga Restaurant-Jagavi's",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/e53/85f6d8adc7f30735e2425d8bfce32e53.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/92881/7002e2c28de274863ca448c6c65b6e6e_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "53.8K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "1,785",
            reviewTextSmall: "1,785 Reviews",
            subtext: "1,785 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "52K",
            reviewTextSmall: "52K Reviews",
            subtext: "52K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,000 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Ameerpet, Hyderabad",
        address:
          "8-3-214/2/41, West Srinivas Colony, Opposite Maitrivanam, Ameerpet, Hyderabad",
        localityUrl: "hyderabad/ameerpet-restaurants",
      },
      timing: {
        text: "Opens in 7 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/andhra/",
          name: "Andhra",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "37 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/kritunga-restaurant-jagavis-ameerpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/kritunga-restaurant-jagavis-ameerpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "5.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"eed2fa50-fdc2-4f7b-aacd-f19688cafe51","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"92881","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "11575+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 95595,
    info: {
      resId: 95595,
      name: "Reddy's Kitchen",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/525/59eeef3bd580bae9dafb4e51d03d2525.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/95595/1a6d3fd1375686cea6008368ebba3ea7_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "77K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "1,027",
            reviewTextSmall: "1,027 Reviews",
            subtext: "1,027 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "75.9K",
            reviewTextSmall: "75.9K Reviews",
            subtext: "75.9K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹800 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Malkajgiri, Secunderabad",
        address:
          "4-221/1, Geetha Nagar, Municipal Office Lane, Malkajgiri, Secunderabad",
        localityUrl: "hyderabad/malkajgiri-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/sichuan/",
          name: "Sichuan",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "42 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/reddys-kitchen-malkajgiri-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/reddys-kitchen-malkajgiri-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2hpY2tlbiIsImRpc2hfaWRzIjpbIjU1MjgwIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "4.7 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a5a9ffb0-f704-492e-8509-229574d006a1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"95595","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "17825+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18657899,
    info: {
      resId: 18657899,
      name: "Peshawar",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/33b/602b44a33303da6c84ecd8309748433b.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/18657899/e7e36544327330baa5badcbf45663831_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,005",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "807",
            reviewTextSmall: "807 Reviews",
            subtext: "807 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "198",
            reviewTextSmall: "198 Reviews",
            subtext: "198 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,200 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Lakdikapul, Hyderabad",
        address: "6-2-30/E, Near DHL Office, Lakdikapul, Hyderabad",
        localityUrl: "hyderabad/lakdikapul-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "43 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/peshawar-2-lakdikapul/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/peshawar-2-lakdikapul/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2hpY2tlbiIsImRpc2hfaWRzIjpbIjU1MjgwIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "5.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a5a9ffb0-f704-492e-8509-229574d006a1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18657899","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1825+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18527998,
    info: {
      resId: 18527998,
      name: "Nimrah Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/11d/368aa2a857a149e341bf60628bbdd11d.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/92558/a0eddc7af3680206bf36ae6195a3c0ac_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "402",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "71",
            reviewTextSmall: "71 Reviews",
            subtext: "71 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "331",
            reviewTextSmall: "331 Reviews",
            subtext: "331 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Nampally, Hyderabad",
        address:
          "Railway Station Parking Area, MFC Building, Nampally, Hyderabad",
        localityUrl: "hyderabad/nampally-restaurants",
      },
      timing: {
        timing_desc: "12midnight – 12:30am, 12:30pm – 12midnight (Today)",
        customised_timings: {
          opening_hours: [
            {
              timing: "12midnight – 12:30am, 12:30pm – 12midnight",
              days: "Mon-Thu",
            },
            {
              timing: "12midnight – 1am, 12:30pm – 12midnight",
              days: "Fri-Sun",
            },
          ],
        },
        show_open_now: true,
        show_timing_info: true,
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      cuisine_string: "Kebab, Rolls, Chinese, Biryani, Desserts, Beverages",
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "32 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/nimrah-restaurant-nampally/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/nimrah-restaurant-nampally/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2hpY2tlbiIsImRpc2hfaWRzIjpbIjU1MjgwIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "5.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a5a9ffb0-f704-492e-8509-229574d006a1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18527998","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "2525+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18228830,
    info: {
      resId: 18228830,
      name: "Chicha's",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/2b2/e2b347bb3033ad9030d3eec87b66e2b2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/18228830/2daff6bca2e1f32d99e9593d758ec9f8_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,185",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "1,902",
            reviewTextSmall: "1,902 Reviews",
            subtext: "1,902 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "283",
            reviewTextSmall: "283 Reviews",
            subtext: "283 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,000 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Lakdikapul, Hyderabad",
        address:
          "6-2-39, AC Guards Road, Opposite Kun Hyundai, Lakdikapul, Hyderabad",
        localityUrl: "hyderabad/lakdikapul-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "45 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/chichas-lakdikapul/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/chichas-lakdikapul/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2hpY2tlbiIsImRpc2hfaWRzIjpbIjU1MjgwIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "5.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a5a9ffb0-f704-492e-8509-229574d006a1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18228830","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "900+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18234142,
    info: {
      resId: 18234142,
      name: "Mithaiwala",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/18234142/10f11d1f7dbd5f063aef763525381169_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/18234142/10f11d1f7dbd5f063aef763525381169_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "426",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "138",
            reviewTextSmall: "138 Reviews",
            subtext: "138 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "288",
            reviewTextSmall: "288 Reviews",
            subtext: "288 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Habsiguda, Hyderabad",
        address: "7-102/8 & 9, G1, Sai Enclave Colony, Habsiguda, Hyderabad",
        localityUrl: "hyderabad/habsiguda-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/mithai/",
          name: "Mithai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/mithaiwala-habsiguda/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/mithaiwala-habsiguda/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "6.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e25507f6-fe0d-4573-95ca-834dec5e669d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18234142","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "200+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18867877,
    info: {
      resId: 18867877,
      name: "La Pino'z Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/87c/950de78989cd367e56163bd9df08587c.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/18867877/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "17.1K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "329",
            reviewTextSmall: "329 Reviews",
            subtext: "329 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "16.7K",
            reviewTextSmall: "16.7K Reviews",
            subtext: "16.7K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "M.G. Road, Secunderabad",
        address: "Shop 3, 2-4-58/3, Ground Floor, M.G. Road, Secunderabad",
        localityUrl: "hyderabad/mg-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "26 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/la-pinoz-pizza-mg-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/la-pinoz-pizza-mg-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "620 m",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e25507f6-fe0d-4573-95ca-834dec5e669d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18867877","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "4800+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 20508153,
    info: {
      resId: 20508153,
      name: "Pizza Hut",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/740/7fb24d51a61d9b80548c20e2d140d740.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/90384/7d1f0c24bf8d0ddf5aad917a9cc1d216_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "235",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "38",
            reviewTextSmall: "38 Reviews",
            subtext: "38 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "197",
            reviewTextSmall: "197 Reviews",
            subtext: "197 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "S D Road, Secunderabad",
        address: "1-1-58/1 & 2, Shop 1 & 2, S D Road, Secunderabad",
        localityUrl: "hyderabad/sd-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/pizza-hut-sd-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/pizza-hut-sd-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "384 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e25507f6-fe0d-4573-95ca-834dec5e669d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20508153","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1075+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 96258,
    info: {
      resId: 96258,
      name: "Domino's Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/05b/9ad3bf1b3b9680d315d2841c2b71405b.png?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/90237/e8cf1c58f2bb217f3d85ff50b7fe39a3_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "12.7K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.2",
            reviewCount: "357",
            reviewTextSmall: "357 Reviews",
            subtext: "357 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "12.4K",
            reviewTextSmall: "12.4K Reviews",
            subtext: "12.4K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "S D Road, Secunderabad",
        address:
          "9-1-164, Amsri Plaza, Ground Floor, Near Bharat Petrol Pump, S D Road, Secunderabad",
        localityUrl: "hyderabad/sd-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "25 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/dominos-pizza-sd-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/dominos-pizza-sd-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e25507f6-fe0d-4573-95ca-834dec5e669d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"96258","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "3550+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18624765,
    info: {
      resId: 18624765,
      name: "Royal Pizza House",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/e72/dc93e64d46d555b4e8f537a3352a2e72.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/18624765/125586e391af7809d41ed36120c54246_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "12.2K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "119",
            reviewTextSmall: "119 Reviews",
            subtext: "119 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "12K",
            reviewTextSmall: "12K Reviews",
            subtext: "12K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Ameerpet, Hyderabad",
        address: "7-1-72/2/, D DK Road, Ameerpet, Hyderabad",
        localityUrl: "hyderabad/ameerpet-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "34 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/royal-pizza-house-ameerpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/royal-pizza-house-ameerpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "4.4 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e25507f6-fe0d-4573-95ca-834dec5e669d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18624765","element_type":"listing","rank":6,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1975+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 20145909,
    info: {
      resId: 20145909,
      name: "MOJO Pizza - 2X Toppings",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/66a/52f603880e52af787b1c79e2301d266a.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/19712545/4e2654de938e0657dd8b1ca3efb05f50_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "920",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "920",
            reviewTextSmall: "920 Reviews",
            subtext: "920 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Begumpet, Hyderabad",
        address:
          "H-1-2-265/B, First Floor, Madhuban, Near Minerv Complex, Begumpet, Hyderabad",
        localityUrl: "hyderabad/begumpet-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/mojo-pizza-2x-toppings-begumpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/mojo-pizza-2x-toppings-begumpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "100 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e25507f6-fe0d-4573-95ca-834dec5e669d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20145909","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "450+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 93456,
    info: {
      resId: 93456,
      name: "Bakers 'Q'",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/93456/cc72e8dd0c5e7dab75bbef5cbf9a5db7_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/93456/cc72e8dd0c5e7dab75bbef5cbf9a5db7_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "23.4K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "491",
            reviewTextSmall: "491 Reviews",
            subtext: "491 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "22.9K",
            reviewTextSmall: "22.9K Reviews",
            subtext: "22.9K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Amberpet, Hyderabad",
        address: "2-2-647/182, Shivam Road, Amberpet, Hyderabad",
        localityUrl: "hyderabad/amberpet-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "46 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/bakers-q-amberpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/bakers-q-amberpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "5.4 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e25507f6-fe0d-4573-95ca-834dec5e669d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"93456","element_type":"listing","rank":8,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1400+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18922134,
    info: {
      resId: 18922134,
      name: "Ovenstory Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/4ed/9f533c9c00db1a5c36cd5d22ca3344ed.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/18423509/783b127c0c237353a7b987fcc1bcc63e_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,403",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "3,403",
            reviewTextSmall: "3,403 Reviews",
            subtext: "3,403 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹600 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Bowenpally, Secunderabad",
        address:
          "Shop 1 & 2, First Floor, Block A Building, Mahalaxmi Trade Center, Diamond Point, Bowenpally, Secunderabad",
        localityUrl: "hyderabad/bowenpally-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "42 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/ovenstory-pizza-bowenpally-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/ovenstory-pizza-bowenpally-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "2.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e25507f6-fe0d-4573-95ca-834dec5e669d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18922134","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "925+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 20320520,
    info: {
      resId: 20320520,
      name: "Wendy's Burgers",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/6f8/1a1f82db79c1d1967d512a3e85a016f8.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/20320520/413890d710b90beaa668f67c1452691a_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "826",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "826",
            reviewTextSmall: "826 Reviews",
            subtext: "826 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Abids, Hyderabad",
        address:
          "Plot 5-9-211/201, Chirag Ali Lane, Nampally, Abids, Hyderabad",
        localityUrl: "hyderabad/abids-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "47 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/wendys-burgers-abids/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/wendys-burgers-abids/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQnVyZ2VyIiwiZGlzaF9pZHMiOlsiOTA1NSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "5.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24b74b7d-c0fb-4342-a079-825d918a2f55","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20320520","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1975+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 19601892,
    info: {
      resId: 19601892,
      name: "KS Bakers",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/890/c80655cb3b50bee88af789ca5b641890.png?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/90272/b63fc9f8a34d02ce9bdc263df884f6cd_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,586",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.3",
            reviewCount: "5",
            reviewTextSmall: "5 Reviews",
            subtext: "5 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "2,581",
            reviewTextSmall: "2,581 Reviews",
            subtext: "2,581 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Bowenpally, Secunderabad",
        address: "Plot 16, Survey 11, Bowenpally, Secunderabad",
        localityUrl: "hyderabad/bowenpally-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/ks-bakers-bowenpally-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/ks-bakers-bowenpally-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQnVyZ2VyIiwiZGlzaF9pZHMiOlsiOTA1NSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "2.8 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24b74b7d-c0fb-4342-a079-825d918a2f55","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19601892","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "2125+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 91852,
    info: {
      resId: 91852,
      name: "McDonald's",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/467/5148215730bbb6fd434be4fbecf96467.png?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/91852/ca8c5ab2353898503f5a528ab4ede275_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "14.1K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "747",
            reviewTextSmall: "747 Reviews",
            subtext: "747 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "13.4K",
            reviewTextSmall: "13.4K Reviews",
            subtext: "13.4K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "S D Road, Secunderabad",
        address: "Minerva Complex, S D Road, Secunderabad",
        localityUrl: "hyderabad/sd-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "21 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/mcdonalds-sd-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/mcdonalds-sd-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQnVyZ2VyIiwiZGlzaF9pZHMiOlsiOTA1NSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "95 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24b74b7d-c0fb-4342-a079-825d918a2f55","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"91852","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "5150+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18553183,
    info: {
      resId: 18553183,
      name: "Burger King",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/957/f9d83b27d2454b0ba0f6749b65486957.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/18138658/13de0d13e2ef4676833e405662f2831a_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "37.7K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "907",
            reviewTextSmall: "907 Reviews",
            subtext: "907 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "36.8K",
            reviewTextSmall: "36.8K Reviews",
            subtext: "36.8K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Himayath Nagar, Hyderabad",
        address:
          "Unit 104 A,105 A,106,107, MPM Millennium Mall, GHMC 3-6-552 to 3-6-558,558/1, Main Road, Himayath Nagar, Hyderabad",
        localityUrl: "hyderabad/himayath-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "45 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/burger-king-himayath-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/burger-king-himayath-nagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQnVyZ2VyIiwiZGlzaF9pZHMiOlsiOTA1NSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "4.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24b74b7d-c0fb-4342-a079-825d918a2f55","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18553183","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "6175+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 20233799,
    info: {
      resId: 20233799,
      name: "Biggies Burger",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/d4b/be51a09a20223667c434972145c05d4b.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/19130082/a7f97508bd43ce39fa4f0ddf06b15c49_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "401",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "48",
            reviewTextSmall: "48 Reviews",
            subtext: "48 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "353",
            reviewTextSmall: "353 Reviews",
            subtext: "353 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Trimulgherry, Secunderabad",
        address:
          "Plot 12, Lal Bazar, Cantonment, Secunderabad Trimulgherry, Secunderabad",
        localityUrl: "hyderabad/trimulgherry-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/shake/",
          name: "Shake",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/biggies-burger-trimulgherry-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/biggies-burger-trimulgherry-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQnVyZ2VyIiwiZGlzaF9pZHMiOlsiOTA1NSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "3.6 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24b74b7d-c0fb-4342-a079-825d918a2f55","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20233799","element_type":"listing","rank":6,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "950+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 20452120,
    info: {
      resId: 20452120,
      name: "Leon's Burgers & Wings",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/972/5d1b26808a7ac40110525e93d896f972.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/20428596/dfa5d6848de93ec7d6c531dc9ae30d9e_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "957",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.3",
            reviewCount: "10",
            reviewTextSmall: "10 Reviews",
            subtext: "10 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "947",
            reviewTextSmall: "947 Reviews",
            subtext: "947 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Himayath Nagar, Hyderabad",
        address:
          "3-5-899, Ground Floor, Old MLA Quarters Road, Himayath Nagar, Hyderabad",
        localityUrl: "hyderabad/himayath-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "43 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/leons-burgers-wings-himayath-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/leons-burgers-wings-himayath-nagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQnVyZ2VyIiwiZGlzaF9pZHMiOlsiOTA1NSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "4.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24b74b7d-c0fb-4342-a079-825d918a2f55","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20452120","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "4225+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 20346616,
    info: {
      resId: 20346616,
      name: "Your's Universe Bakes & Cakes",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/f76/4694dfd9ea63ef772a34c064ebc63f76.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/20346616/126f99aeef6f44b55b0299e3ee49458b_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "257",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "257",
            reviewTextSmall: "257 Reviews",
            subtext: "257 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Malkajgiri, Secunderabad",
        address:
          "House 24/63/1, Ground Floor, Vishnupuri Colony, Malkajgiri, Secunderabad",
        localityUrl: "hyderabad/malkajgiri-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "39 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/hyderabad/yours-universe-bakes-cakes-malkajgiri-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/yours-universe-bakes-cakes-malkajgiri-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQnVyZ2VyIiwiZGlzaF9pZHMiOlsiOTA1NSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "5.2 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24b74b7d-c0fb-4342-a079-825d918a2f55","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20346616","element_type":"listing","rank":8,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "725+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 20645657,
    info: {
      resId: 20645657,
      name: "KFC",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/2cd/554a151953be2415e44e3d561e8742cd.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/90195/0b79e39ffc2e3770f3b66b26c0e6f4fd_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "109",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "6",
            reviewTextSmall: "6 Reviews",
            subtext: "6 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "103",
            reviewTextSmall: "103 Reviews",
            subtext: "103 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "S P Road, Secunderabad",
        address:
          "Premises 1-8-303/31, 1-8-303/31/A, 1-8-303/31/B, 139, Plot 30, Devi Nagar, 3rd Cross, Sindhi Colony, S P Road, Secunderabad",
        localityUrl: "hyderabad/sp-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/kfc-sp-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/kfc-sp-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQnVyZ2VyIiwiZGlzaF9pZHMiOlsiOTA1NSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24b74b7d-c0fb-4342-a079-825d918a2f55","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20645657","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1100+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 19575176,
    info: {
      resId: 19575176,
      name: "Cake L'amore",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/075/0654848e646b0f0350550e7ac46f6075.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/19575176/ca29015af5afe238a94a78b901a8f7c7_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,524",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "1,524",
            reviewTextSmall: "1,524 Reviews",
            subtext: "1,524 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Himayath Nagar, Hyderabad",
        address:
          "Ground Floor, 1-2-593/23, Gagan Mahal Colony, Domalguda, Himayath Nagar, Hyderabad",
        localityUrl: "hyderabad/himayath-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "46 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/cake-lamore-himayath-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/cake-lamore-himayath-nagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "3.7 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"6b01e568-a999-4eaa-a4c2-554ad938e2e7","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19575176","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1100+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 96701,
    type: "restaurant",
    info: {
      resId: 96701,
      name: "Cream Stone Ice Cream",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/f1e/1a79ffa6a0ba73ab5f116f5538d4bf1e.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/90706/de4f9ba3187a95643f15f78d2f0e4acd_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "24.1K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "1,075",
            reviewTextSmall: "1,075 Reviews",
            subtext: "1,075 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "23K",
            reviewTextSmall: "23K Reviews",
            subtext: "23K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "S P Road, Secunderabad",
        address: "Opposite Ashok Bhopal Chambers, S P Road, Secunderabad",
        localityUrl: "hyderabad/sp-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "23 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/cream-stone-ice-cream-sp-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/cream-stone-ice-cream-sp-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"6b01e568-a999-4eaa-a4c2-554ad938e2e7","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"96701","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "4400+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 92914,
    type: "restaurant",
    info: {
      resId: 92914,
      name: "Frost Bakery",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/e82/9815a9ef933ff9b18e193893a5e38e82.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/92914/24c68a6704aefb9234e25a59695487cf_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "708",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.2",
            reviewCount: "32",
            reviewTextSmall: "32 Reviews",
            subtext: "32 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "676",
            reviewTextSmall: "676 Reviews",
            subtext: "676 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "PG Road, Secunderabad",
        address:
          "Plot 142/A House 1-8-153/1, Aman Arcade, PG Road, Secunderabad",
        localityUrl: "hyderabad/pg-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "23 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/frost-bakery-pg-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/frost-bakery-pg-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "558 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"6b01e568-a999-4eaa-a4c2-554ad938e2e7","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"92914","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1925+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 20108273,
    type: "restaurant",
    info: {
      resId: 20108273,
      name: "Terra Cakes",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/d75/c536f997d65bac9a1d4e1b4c42d9cd75.png?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/20108273/3a5eb4d04fa6fe9df5b08b5fb2be8974_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "431",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "431",
            reviewTextSmall: "431 Reviews",
            subtext: "431 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Malakpet, Hyderabad",
        address:
          "16-9-307/2/A/E, New Moon Lit School, Near Masjid, Malakpet, Hyderabad",
        localityUrl: "hyderabad/malakpet-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "85 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/terra-cakes-malakpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/terra-cakes-malakpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "6.7 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"6b01e568-a999-4eaa-a4c2-554ad938e2e7","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20108273","element_type":"listing","rank":6,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "425+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 19196791,
    type: "restaurant",
    info: {
      resId: 19196791,
      name: "Bakingo",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/000/a36d5e6dd84c8a6401b38268dfcdf000.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/19970113/8bd5cdaa774f69f97c9d1bc61d97014a_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "5,235",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.3",
            reviewCount: "21",
            reviewTextSmall: "21 Reviews",
            subtext: "21 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "5,214",
            reviewTextSmall: "5,214 Reviews",
            subtext: "5,214 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "S P Road, Secunderabad",
        address:
          "1-8-303/48/32/3/1, Plot 32, Survey 48, Rasoolpura, Near Patigadda, S P Road, Secunderabad",
        localityUrl: "hyderabad/sp-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "26 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/bakingo-sp-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/bakingo-sp-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "1.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"6b01e568-a999-4eaa-a4c2-554ad938e2e7","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19196791","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "2875+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 93072,
    type: "restaurant",
    info: {
      resId: 93072,
      name: "My Friend's Circle Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/1fd/d3b49249d84b1a5e555092d85db0f1fd.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/93072/36f3cf137c298d60cd4a19467c71f403_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "145.9K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "2,675",
            reviewTextSmall: "2,675 Reviews",
            subtext: "2,675 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "143.2K",
            reviewTextSmall: "143.2K Reviews",
            subtext: "143.2K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹850 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Medchal Road, Hyderabad",
        address: "Suchitra X Road, Quthbullapur, Medchal Road, Hyderabad",
        localityUrl: "hyderabad/medchal-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTk2XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/mandi/",
          name: "Mandi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "52 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/my-friends-circle-restaurant-medchal-road/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/my-friends-circle-restaurant-medchal-road/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "6.6 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"6b01e568-a999-4eaa-a4c2-554ad938e2e7","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"93072","element_type":"listing","rank":8,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "53750+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 19331659,
    type: "restaurant",
    info: {
      resId: 19331659,
      name: "Karachi Cafe",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/d7b/884dea78359c2a68e73f65dde8a7bd7b.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/90862/667899cd04a6a3e3c5a94e4677c174fa_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "3,224",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.2",
            reviewCount: "18",
            reviewTextSmall: "18 Reviews",
            subtext: "18 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "3,206",
            reviewTextSmall: "3,206 Reviews",
            subtext: "3,206 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹950 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "S P Road, Secunderabad",
        address:
          "Door 1-8-303/34/87, G-6, Ground Floor, Mayfair Complex, S P Road, Secunderabad",
        localityUrl: "hyderabad/sp-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "26 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/karachi-cafe-sp-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/karachi-cafe-sp-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "1.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"6b01e568-a999-4eaa-a4c2-554ad938e2e7","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19331659","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "2050+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 18617778,
    type: "restaurant",
    info: {
      resId: 18617778,
      name: "Royal Tiffin Centre",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/18617778/c20779469a57e72efebd18ddb472e965_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/18617778/c20779469a57e72efebd18ddb472e965_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "5,772",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "166",
            reviewTextSmall: "166 Reviews",
            subtext: "166 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "5,606",
            reviewTextSmall: "5,606 Reviews",
            subtext: "5,606 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹250 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Banjara Hills, Hyderabad",
        address: "Door 8-2-270, Road 3, Banjara Hills, Hyderabad",
        localityUrl: "hyderabad/banjara-hills-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "52 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/royal-tiffin-centre-banjara-hills/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/royal-tiffin-centre-banjara-hills/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gRG9zYSIsImRpc2hfaWRzIjpbIjEwMjk2Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "5.7 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"f4887196-701d-4e57-9b01-ba121e72b163","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18617778","element_type":"listing","rank":1,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "4100+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 92400,
    type: "restaurant",
    info: {
      resId: 92400,
      name: "Sri Siddhi Udupi Tiffin & Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/6a2/e4fcc7b338eecd56791a8909653c36a2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/92400/175cf6c90273abda2f88a8db71c81f5e_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "8,277",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "158",
            reviewTextSmall: "158 Reviews",
            subtext: "158 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "8,119",
            reviewTextSmall: "8,119 Reviews",
            subtext: "8,119 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹350 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Paradise Circle, Secunderabad",
        address: "11, Sunder Tower, Paradise Circle, Secunderabad",
        localityUrl: "hyderabad/paradise-circle-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "21 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/hyderabad/sri-siddhi-udupi-tiffin-restaurant-paradise-circle-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/sri-siddhi-udupi-tiffin-restaurant-paradise-circle-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gRG9zYSIsImRpc2hfaWRzIjpbIjEwMjk2Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "405 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"f4887196-701d-4e57-9b01-ba121e72b163","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"92400","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "2425+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    _id: 19435511,
    type: "restaurant",
    info: {
      resId: 19435511,
      name: "Bhattad Ki Idli - Rambharose Bhandar",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/746/f0d07a30877eba52af0c8b7f1bb6e746.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/93681/42e6dc7dd4d466b1d4a1fc310cc7f84b_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "6,739",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "6,739",
            reviewTextSmall: "6,739 Reviews",
            subtext: "6,739 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "PG Road, Secunderabad",
        address: "1-8-32/43/A/1, PG Road, Secunderabad",
        localityUrl: "hyderabad/pg-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "32 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/hyderabad/bhattad-ki-idli-rambharose-bhandar-pg-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/bhattad-ki-idli-rambharose-bhandar-pg-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gRG9zYSIsImRpc2hfaWRzIjpbIjEwMjk2Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"f4887196-701d-4e57-9b01-ba121e72b163","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19435511","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "5100+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    _id: 18356437,
    type: "restaurant",
    info: {
      resId: 18356437,
      name: "Amay Tiffin Corner",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/18356437/d857fbf2ef1b02d7f1ee6a48c72aa7fa_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/18356437/d857fbf2ef1b02d7f1ee6a48c72aa7fa_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "23.3K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "305",
            reviewTextSmall: "305 Reviews",
            subtext: "305 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "23K",
            reviewTextSmall: "23K Reviews",
            subtext: "23K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Abids, Hyderabad",
        address: "4-1-1098, Bogulkunta, Tilak Road, Abids, Hyderabad",
        localityUrl: "hyderabad/abids-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/juices/",
          name: "Juices",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "43 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/amay-tiffin-corner-abids/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/amay-tiffin-corner-abids/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gRG9zYSIsImRpc2hfaWRzIjpbIjEwMjk2Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "5.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"f4887196-701d-4e57-9b01-ba121e72b163","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18356437","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "6825+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 18356470,
    type: "restaurant",
    info: {
      resId: 18356470,
      name: "Govind Dosa",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/18356470/14bdcb483e40d7f81ef7bff1753d5b0a_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/92652/37dd4d6a8f4868843f3c1019859f303c_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "7,697",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.2",
            reviewCount: "255",
            reviewTextSmall: "255 Reviews",
            subtext: "255 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "7,442",
            reviewTextSmall: "7,442 Reviews",
            subtext: "7,442 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Himayath Nagar, Hyderabad",
        address:
          "3-6-561/1, F.No. LG-5, Amberpet Circle 16, Himayath Nagar, Hyderabad",
        localityUrl: "hyderabad/himayath-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "37 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/govind-dosa-himayath-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/govind-dosa-himayath-nagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gRG9zYSIsImRpc2hfaWRzIjpbIjEwMjk2Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "4.5 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"f4887196-701d-4e57-9b01-ba121e72b163","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18356470","element_type":"listing","rank":5,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "2250+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    _id: 97445,
    type: "restaurant",
    info: {
      resId: 97445,
      name: "Geetha Tiffins",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/97445/30527bdbb170aa3c5ddb1814e2911f68_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/97445/c1deefb3caa2a71435bb0b75978321ab_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "11K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "99",
            reviewTextSmall: "99 Reviews",
            subtext: "99 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "10.9K",
            reviewTextSmall: "10.9K Reviews",
            subtext: "10.9K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹250 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Marredpally, Secunderabad",
        address: "10-1-5/A, Road 4, West Marredpally, Secunderabad, Hyderabad",
        localityUrl: "hyderabad/marredpally-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "21 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/geetha-tiffins-marredpally-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/geetha-tiffins-marredpally-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gRG9zYSIsImRpc2hfaWRzIjpbIjEwMjk2Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"f4887196-701d-4e57-9b01-ba121e72b163","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"97445","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "4525+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 97274,
    type: "restaurant",
    info: {
      resId: 97274,
      name: "Rams Dosa House",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/97274/78c572154cd0b34be563d4a34999abfe_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/97274/ad8983f47afb19136a9a48d24b9d3404_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.4",
        rating_text: "3.4",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "13.1K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "2.8",
            reviewCount: "564",
            reviewTextSmall: "564 Reviews",
            subtext: "564 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "2.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "yellow",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "12.6K",
            reviewTextSmall: "12.6K Reviews",
            subtext: "12.6K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Banjara Hills, Hyderabad",
        address:
          "Door 8/2/238/4/1/C/A, Road 14, Near Asha Hospital, Banjara Hills, Hyderabad",
        localityUrl: "hyderabad/banjara-hills-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "46 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/rams-dosa-house-banjara-hills/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/rams-dosa-house-banjara-hills/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gRG9zYSIsImRpc2hfaWRzIjpbIjEwMjk2Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "6.3 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"f4887196-701d-4e57-9b01-ba121e72b163","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"97274","element_type":"listing","rank":7,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "575+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    _id: 19633944,
    type: "restaurant",
    info: {
      resId: 19633944,
      name: "Ram Ki Bandi",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/1ca/4e1f004ce0458ee2ec56519604a011ca.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/92651/ce899d6034c29487c1a1f0c9552f6170_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "5,011",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "13",
            reviewTextSmall: "13 Reviews",
            subtext: "13 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "4,998",
            reviewTextSmall: "4,998 Reviews",
            subtext: "4,998 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹150 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Begumpet, Hyderabad",
        address: "1-8-32/67, Minister Road, Begumpet, Hyderabad",
        localityUrl: "hyderabad/begumpet-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/ram-ki-bandi-begumpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/ram-ki-bandi-begumpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gRG9zYSIsImRpc2hfaWRzIjpbIjEwMjk2Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"f4887196-701d-4e57-9b01-ba121e72b163","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19633944","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "2900+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    _id: 18725440,
    type: "restaurant",
    info: {
      resId: 18725440,
      name: "Sai Brundavan Pure Veg",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/18725440/d8d26dd05c0e1a15fdb385e6bde999bb_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/18725440/d8d26dd05c0e1a15fdb385e6bde999bb_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,008",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "27",
            reviewTextSmall: "27 Reviews",
            subtext: "27 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "981",
            reviewTextSmall: "981 Reviews",
            subtext: "981 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "S R Nagar, Hyderabad",
        address: "71- 396/16, BK Guda, S R Nagar, Hyderabad",
        localityUrl: "hyderabad/sr-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "34 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/sai-brundavan-pure-veg-s-r-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/sai-brundavan-pure-veg-s-r-nagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gRG9zYSIsImRpc2hfaWRzIjpbIjEwMjk2Il0sImN1aXNpbmVfaWRzIjpbXX19",
      clickActionDeeplink: "",
    },
    distance: "4.7 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"f4887196-701d-4e57-9b01-ba121e72b163","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18725440","element_type":"listing","rank":9,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1300+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 19169607,
    type: "restaurant",
    info: {
      resId: 19169607,
      name: "Gabru Di Chaap",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/0cd/d73070770ef6219d289f9a84c38920cd.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/19020955/5be88a3e4354f3f222a53fb9b38458fc_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,807",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "103",
            reviewTextSmall: "103 Reviews",
            subtext: "103 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "1,704",
            reviewTextSmall: "1,704 Reviews",
            subtext: "1,704 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "PG Road, Secunderabad",
        address: "House 1-8-38, Minister Road, PG Road, Secunderabad",
        localityUrl: "hyderabad/pg-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "40 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/gabru-di-chaap-pg-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/gabru-di-chaap-pg-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUm9sbHMiLCJkaXNoX2lkcyI6WyI1NjY5MSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b76565f4-7612-418d-bff0-2e283a5dbcba","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19169607","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1325+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    _id: 20145956,
    type: "restaurant",
    info: {
      resId: 20145956,
      name: "Mealful Rolls - India's Biggest Rolls",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/4c8/ec9dda20a2801b4995950b9850c974c8.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/19712556/8113d75967715cb504fb0ce4c77e81d7_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "570",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "570",
            reviewTextSmall: "570 Reviews",
            subtext: "570 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Begumpet, Hyderabad",
        address:
          "H-1-2-265/B, First Floor, Madhuban, Near Minerv Complex, Begumpet, Hyderabad",
        localityUrl: "hyderabad/begumpet-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/hyderabad/mealful-rolls-indias-biggest-rolls-begumpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/mealful-rolls-indias-biggest-rolls-begumpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUm9sbHMiLCJkaXNoX2lkcyI6WyI1NjY5MSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "100 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b76565f4-7612-418d-bff0-2e283a5dbcba","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20145956","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "275+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 19559223,
    type: "restaurant",
    info: {
      resId: 19559223,
      name: "Kathi Junction",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/679/95e7c893f26395b2bb16a825fbc2f679.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19559223/2be3dd3a039ec3252cc1d826de3265ac_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.4",
        rating_text: "3.4",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "2,220",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "2.8",
            reviewCount: "8",
            reviewTextSmall: "8 Reviews",
            subtext: "8 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "2.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "yellow",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "2,212",
            reviewTextSmall: "2,212 Reviews",
            subtext: "2,212 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹450 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "S R Nagar, Hyderabad",
        address:
          "Shop 2, House 7-1-621/263, Kamala Nivas, S R Nagar, Hyderabad",
        localityUrl: "hyderabad/sr-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/shake/",
          name: "Shake",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/kathi-junction-s-r-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/kathi-junction-s-r-nagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUm9sbHMiLCJkaXNoX2lkcyI6WyI1NjY5MSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "4.6 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b76565f4-7612-418d-bff0-2e283a5dbcba","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19559223","element_type":"listing","rank":6,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "725+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 20145868,
    type: "restaurant",
    info: {
      resId: 20145868,
      name: "BOX8 - Desi Meals",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/d7c/b53eac697455d9d04ec521cc4e7cdd7c.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/19847210/fd01b484c7039d91f51a8b0fb9d1c8e1_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "655",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "655",
            reviewTextSmall: "655 Reviews",
            subtext: "655 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹450 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Begumpet, Hyderabad",
        address: "H-1-2-265/B, First Floor, Madhuban, Begumpet, Hyderabad",
        localityUrl: "hyderabad/begumpet-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/box8-desi-meals-begumpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/box8-desi-meals-begumpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUm9sbHMiLCJkaXNoX2lkcyI6WyI1NjY5MSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "100 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b76565f4-7612-418d-bff0-2e283a5dbcba","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20145868","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "950+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 20289674,
    type: "restaurant",
    info: {
      resId: 20289674,
      name: "Sarvi Restaurants & Bakers",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/20289674/ad696c2f9a05ee0c4b59ea559a4e7c98_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/20289674/ad696c2f9a05ee0c4b59ea559a4e7c98_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "126",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "3",
            reviewTextSmall: "3 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "123",
            reviewTextSmall: "123 Reviews",
            subtext: "123 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "M.G. Road, Secunderabad",
        address: "GHMC 1-7-166/1, Part 128, M.G. Road, Secunderabad",
        localityUrl: "hyderabad/mg-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
          name: "Hyderabadi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "19 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/hyderabad/sarvi-restaurants-bakers-mg-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/sarvi-restaurants-bakers-mg-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUm9sbHMiLCJkaXNoX2lkcyI6WyI1NjY5MSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "323 m",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b76565f4-7612-418d-bff0-2e283a5dbcba","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20289674","element_type":"listing","rank":8,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1275+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 20018787,
    type: "restaurant",
    info: {
      resId: 20018787,
      name: "Rollsking",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/c7f/1c39e48df3e7d6674ff6a04ca80ffc7f.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/20018787/55211810216d1f87fffeee17f9b397ba_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "627",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "627",
            reviewTextSmall: "627 Reviews",
            subtext: "627 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Paradise Circle, Secunderabad",
        address:
          "Shop 14, Paradise Metro Station, Circle 18, Paradise Cross Roads, Paradise Circle, Secunderabad",
        localityUrl: "hyderabad/paradise-circle-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "26 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/rollsking-paradise-circle-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/rollsking-paradise-circle-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUm9sbHMiLCJkaXNoX2lkcyI6WyI1NjY5MSJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "491 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b76565f4-7612-418d-bff0-2e283a5dbcba","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20018787","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1450+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 19637203,
    type: "restaurant",
    info: {
      resId: 19637203,
      name: "Sree Udupi Dosa House",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/530/3b1becf1834051019b6bf97300da7530.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19637203/2fca38ab7be6bfe27b31ca784d95c0d6_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,783",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "2,783",
            reviewTextSmall: "2,783 Reviews",
            subtext: "2,783 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹150 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Banjara Hills, Hyderabad",
        address: "8-2-413, Circle 8, Road 4, Banjara Hills, Hyderabad",
        localityUrl: "hyderabad/banjara-hills-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "46 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/sree-udupi-dosa-house-banjara-hills/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/sree-udupi-dosa-house-banjara-hills/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gVGhhbGkiLCJkaXNoX2lkcyI6WyIzNTAxMyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "5.6 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"87ddc35f-7f0c-4f5d-8f42-7aa97e41f714","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19637203","element_type":"listing","rank":1,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "2300+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 19411382,
    type: "restaurant",
    info: {
      resId: 19411382,
      name: "LunchBox - Meals and Thalis",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/51f/2b6628791658223a89c27bd43c9ba51f.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/19411030/a350c22d22c1e538c68c35c85e7695bf_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,461",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "1,461",
            reviewTextSmall: "1,461 Reviews",
            subtext: "1,461 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹350 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Bowenpally, Secunderabad",
        address:
          "Shop 1 & 2, First Floor, Mahalaxmi Trade Center, Diamond Point, Bowenpally, Secunderabad",
        localityUrl: "hyderabad/bowenpally-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "34 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/hyderabad/lunchbox-meals-and-thalis-bowenpally-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/lunchbox-meals-and-thalis-bowenpally-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gVGhhbGkiLCJkaXNoX2lkcyI6WyIzNTAxMyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "2.4 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"87ddc35f-7f0c-4f5d-8f42-7aa97e41f714","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19411382","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "800+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 19563978,
    type: "restaurant",
    info: {
      resId: 19563978,
      name: "Haldiram's Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/a85/00f048a25d4ec6d151079155de696a85.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/19147625/8a05eaf26abe3d368df3bcbce2e4a58a_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "8,086",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "8,086",
            reviewTextSmall: "8,086 Reviews",
            subtext: "8,086 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Karkhana, Secunderabad",
        address: "Plot 12, H.A.C.P Colony, Vikrampuri, Karkhana, Secunderabad",
        localityUrl: "hyderabad/karkhana-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/health-food/",
          name: "Healthy Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/mithai/",
          name: "Mithai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "34 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/haldirams-restaurant-karkhana-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/haldirams-restaurant-karkhana-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gVGhhbGkiLCJkaXNoX2lkcyI6WyIzNTAxMyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "2.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"87ddc35f-7f0c-4f5d-8f42-7aa97e41f714","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19563978","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "3300+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 18774021,
    type: "restaurant",
    info: {
      resId: 18774021,
      name: "EatFit",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/18774021/c78b32fd2b64bc02cb4719158e902ff8.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/18774021/cc529502331fd96f8e2005cf1cb9c437_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "50.2K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "50.2K",
            reviewTextSmall: "50.2K Reviews",
            subtext: "50.2K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "S P Road, Secunderabad",
        address:
          "Scb Door 3-14-011, Ground Floor, Patny Square, Patny Nagar, S P Road, Secunderabad",
        localityUrl: "hyderabad/sp-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/health-food/",
          name: "Healthy Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/eatfit-sp-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/eatfit-sp-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gVGhhbGkiLCJkaXNoX2lkcyI6WyIzNTAxMyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"87ddc35f-7f0c-4f5d-8f42-7aa97e41f714","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18774021","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "40% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "3775+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    _id: 18584311,
    type: "restaurant",
    info: {
      resId: 18584311,
      name: "Sri Santosh Family Dhaba",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/93a/9c8b606c9bfcd19daea63d43aff9793a.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/18584311/20f78149304927a1359272e1fcd15b2b_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "21.7K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "268",
            reviewTextSmall: "268 Reviews",
            subtext: "268 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "21.4K",
            reviewTextSmall: "21.4K Reviews",
            subtext: "21.4K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹950 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Tarnaka, Hyderabad",
        address:
          "12-5-35/B/2, 1st Floor, Marrideep Building, Lalaguda, Tarnaka, Hyderabad",
        localityUrl: "hyderabad/tarnaka-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "40 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/sri-santosh-family-dhaba-tarnaka/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/sri-santosh-family-dhaba-tarnaka/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gVGhhbGkiLCJkaXNoX2lkcyI6WyIzNTAxMyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "4.8 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"87ddc35f-7f0c-4f5d-8f42-7aa97e41f714","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18584311","element_type":"listing","rank":6,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "6975+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    _id: 18769512,
    type: "restaurant",
    info: {
      resId: 18769512,
      name: "Kamat Hotel",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/5e7/f990bf2b67f2fc251f2c3579ca2c15e7.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/18769512/dffc86f329edd91fa56cd7bc2ac56a6d_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.5",
        rating_text: "3.5",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "3,249",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "2.8",
            reviewCount: "46",
            reviewTextSmall: "46 Reviews",
            subtext: "46 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "2.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "yellow",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "3,203",
            reviewTextSmall: "3,203 Reviews",
            subtext: "3,203 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹950 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "S D Road, Secunderabad",
        address: "1-129, 1st Floor, S D Road, Secunderabad",
        localityUrl: "hyderabad/sd-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "16 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/kamat-hotel-1-sd-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/kamat-hotel-1-sd-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gVGhhbGkiLCJkaXNoX2lkcyI6WyIzNTAxMyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "715 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"87ddc35f-7f0c-4f5d-8f42-7aa97e41f714","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18769512","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "4475+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 20250801,
    type: "restaurant",
    info: {
      resId: 20250801,
      name: "Hotel Ragavendra",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/20250801/f139151e056c8f0c930851b82fbaa5f4_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/20250801/f139151e056c8f0c930851b82fbaa5f4_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.2",
        rating_text: "3.2",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "1,538",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "2.6",
            reviewCount: "6",
            reviewTextSmall: "6 Reviews",
            subtext: "6 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "2.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "yellow",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "1,532",
            reviewTextSmall: "1,532 Reviews",
            subtext: "1,532 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Erragadda, Hyderabad",
        address:
          "8-3-166/7/4, Opposite Metro Pillar A977, Erragadda, Hyderabad",
        localityUrl: "hyderabad/erragadda-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/juices/",
          name: "Juices",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "40 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/hotel-ragavendra-erragadda/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/hotel-ragavendra-erragadda/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gVGhhbGkiLCJkaXNoX2lkcyI6WyIzNTAxMyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "5.9 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"87ddc35f-7f0c-4f5d-8f42-7aa97e41f714","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20250801","element_type":"listing","rank":8,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "5225+ orders placed from here recently",
      },
    ],
  },
  {
    _id: 92163,
    type: "restaurant",
    info: {
      resId: 92163,
      name: "Shree Ganesh Darshini",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/c34/5acf3462029a4f1d9ec0f711a0b22c34.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/92163/3c89f89cfa21cb78ba55e1e69abc4b61_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "37K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.3",
            reviewCount: "281",
            reviewTextSmall: "281 Reviews",
            subtext: "281 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "36.8K",
            reviewTextSmall: "36.8K Reviews",
            subtext: "36.8K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Kacheguda, Hyderabad",
        address:
          "3-4-771, Barkatpura, Goshamahal Circle 14, Kacheguda, Hyderabad",
        localityUrl: "hyderabad/kacheguda-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/juices/",
          name: "Juices",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/shree-ganesh-darshini-kacheguda/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/shree-ganesh-darshini-kacheguda/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gVGhhbGkiLCJkaXNoX2lkcyI6WyIzNTAxMyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "5.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"87ddc35f-7f0c-4f5d-8f42-7aa97e41f714","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"92163","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "2575+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18459135,
    info: {
      resId: 18459135,
      name: "Grill House",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/5cf/4c611b65a071950324a74c39720e65cf.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/18459135/3dfba4890e6d5f3709e14e6eed07f337_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "5,841",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "110",
            reviewTextSmall: "110 Reviews",
            subtext: "110 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "5,731",
            reviewTextSmall: "5,731 Reviews",
            subtext: "5,731 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹450 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Alwal, Secunderabad",
        address:
          "Shop 13, 28, Lothkunta Cross Roads, Near Railway Bridge, Alwal, Secunderabad",
        localityUrl: "hyderabad/alwal-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/lebanese/",
          name: "Lebanese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/sichuan/",
          name: "Sichuan",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/shawarma/",
          name: "Shawarma",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "38 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/grill-house-alwal-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/grill-house-alwal-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2hhd2FybWEiLCJkaXNoX2lkcyI6WyI0NTg3MyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "6.2 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"fa21d415-3818-4443-93f5-d297cc6489b1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18459135","element_type":"listing","rank":1,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "11650+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 18618316,
    info: {
      resId: 18618316,
      name: "Have More Restaurant & Bakers",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/6e3/016a1bba3d4d4e6b30569f80e093a6e3.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/18618316/cda8785591a589ede308bd8b197a6deb_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "44.7K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "823",
            reviewTextSmall: "823 Reviews",
            subtext: "823 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "43.9K",
            reviewTextSmall: "43.9K Reviews",
            subtext: "43.9K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,200 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "S D Road, Secunderabad",
        address:
          "9-1-70, Sarojini Devi Road, Circle 29, S D Road, Secunderabad",
        localityUrl: "hyderabad/sd-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Shawarma",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "22 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/hyderabad/have-more-restaurant-bakers-sd-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/have-more-restaurant-bakers-sd-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2hhd2FybWEiLCJkaXNoX2lkcyI6WyI0NTg3MyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "1.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"fa21d415-3818-4443-93f5-d297cc6489b1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18618316","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "7025+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 19618235,
    info: {
      resId: 19618235,
      name: "Shawarma Treat",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/19618235/ca3a05ab89b9d062416c92be50bc4f21_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/19618235/7498371635d04e8228d365b9e218a29e_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,536",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "32",
            reviewTextSmall: "32 Reviews",
            subtext: "32 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "1,504",
            reviewTextSmall: "1,504 Reviews",
            subtext: "1,504 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Bowenpally, Secunderabad",
        address:
          "Shaila Plaza, Opposite Hdfc Bank, Diamond Point, Bowenpally, Hyderabad Bowenpally, Secunderabad",
        localityUrl: "hyderabad/bowenpally-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/shawarma/",
          name: "Shawarma",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/shawarma-treat-bowenpally-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/shawarma-treat-bowenpally-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2hhd2FybWEiLCJkaXNoX2lkcyI6WyI0NTg3MyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "2.3 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"fa21d415-3818-4443-93f5-d297cc6489b1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19618235","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1075+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 20191929,
    info: {
      resId: 20191929,
      name: "Marhaba Shawarma & Wraps",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/c64/00715b9a6804fda5649c8434ca454c64.png?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/20191929/490e312ae8c9da1bc8b478b401c4e3ae_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "548",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.3",
            reviewCount: "26",
            reviewTextSmall: "26 Reviews",
            subtext: "26 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "522",
            reviewTextSmall: "522 Reviews",
            subtext: "522 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Himayath Nagar, Hyderabad",
        address: "3-6-270, Old MLA Quarters Road, Himayath Nagar, Hyderabad",
        localityUrl: "hyderabad/himayath-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/shawarma/",
          name: "Shawarma",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/shake/",
          name: "Shake",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "45 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/marhaba-shawarma-wraps-himayath-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/marhaba-shawarma-wraps-himayath-nagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2hhd2FybWEiLCJkaXNoX2lkcyI6WyI0NTg3MyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "4.8 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"fa21d415-3818-4443-93f5-d297cc6489b1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20191929","element_type":"listing","rank":6,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1250+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 19947725,
    info: {
      resId: 19947725,
      name: "Shawarma House",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/19947725/04f31645a5cb2e560b2d103f1f34f89b_o2_featured_v2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/19947725/04f31645a5cb2e560b2d103f1f34f89b_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.5",
        rating_text: "3.5",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "4,572",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "4,572",
            reviewTextSmall: "4,572 Reviews",
            subtext: "4,572 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹250 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Narayanguda, Hyderabad",
        address: "3-4-664, Near HRD Degree College, Narayanguda, Hyderabad",
        localityUrl: "hyderabad/narayanguda-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/shawarma/",
          name: "Shawarma",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "38 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/shawarma-house-narayanguda/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/shawarma-house-narayanguda/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2hhd2FybWEiLCJkaXNoX2lkcyI6WyI0NTg3MyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"fa21d415-3818-4443-93f5-d297cc6489b1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19947725","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "6275+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 94903,
    info: {
      resId: 94903,
      name: "Milan Juice Centre",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/6f4/a9f841668833f9e0c9bf45051dc596f4.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/94903/015a6e5690a42ff9551cbde357547403_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "28K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "333",
            reviewTextSmall: "333 Reviews",
            subtext: "333 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "27.7K",
            reviewTextSmall: "27.7K Reviews",
            subtext: "27.7K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Nampally, Hyderabad",
        address: "11-3-836, Mallepally, Circle 12, Nampally, Hyderabad",
        localityUrl: "hyderabad/nampally-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/lebanese/",
          name: "Lebanese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/shawarma/",
          name: "Shawarma",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "48 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/milan-juice-centre-nampally/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/milan-juice-centre-nampally/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2hhd2FybWEiLCJkaXNoX2lkcyI6WyI0NTg3MyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "6.5 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"fa21d415-3818-4443-93f5-d297cc6489b1","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"94903","element_type":"listing","rank":8,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "6300+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 93780,
    info: {
      resId: 93780,
      name: "Subway",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/0d2/828915cc237da8540d3b2563a1bd10d2.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/90204/7abe3076782b928c1ae27197f0af9dff_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "4,704",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "81",
            reviewTextSmall: "81 Reviews",
            subtext: "81 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "4,623",
            reviewTextSmall: "4,623 Reviews",
            subtext: "4,623 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "S P Road, Secunderabad",
        address: "1-8-303/34/GB-4, May Fari Building, S P Road, Secunderabad",
        localityUrl: "hyderabad/sp-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/health-food/",
          name: "Healthy Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/subway-sp-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/subway-sp-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2FuZHdpY2giLCJkaXNoX2lkcyI6WyI2NDA4OCJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "1.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"c208943d-2503-47b5-b47d-23b7c7d9e90d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"93780","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "3375+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 92744,
    info: {
      resId: 92744,
      name: "Country Oven",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/748/11760e0d6a9e66a75b9e9d2a1938f748.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/92744/e6964ef84bae99fa1293f927d7e725ed_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,692",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "268",
            reviewTextSmall: "268 Reviews",
            subtext: "268 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "2,424",
            reviewTextSmall: "2,424 Reviews",
            subtext: "2,424 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Ameerpet, Hyderabad",
        address:
          "Namrata Estates, Opposite Green Park, Greenlands, Ameerpet, Hyderabad",
        localityUrl: "hyderabad/ameerpet-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "34 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/country-oven-ameerpet/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/country-oven-ameerpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2FuZHdpY2giLCJkaXNoX2lkcyI6WyI2NDA4OCJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "4 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"c208943d-2503-47b5-b47d-23b7c7d9e90d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"92744","element_type":"listing","rank":6,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "675+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 96323,
    info: {
      resId: 96323,
      name: "Sri Narsing Bhelpuri & Juice Centre",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/4b8/2e1c10d9cebdfa173518b7f4774724b8.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/96323/ee436c00625fb4243b4a27d6d31a6409_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,044",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "148",
            reviewTextSmall: "148 Reviews",
            subtext: "148 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "2,896",
            reviewTextSmall: "2,896 Reviews",
            subtext: "2,896 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "M.G. Road, Secunderabad",
        address:
          "2-4-134, Near Ramgopalpet Police Station, Circle 18, M.G. Road, Secunderabad",
        localityUrl: "hyderabad/mg-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/hyderabad/sri-narsing-bhelpuri-juice-centre-mg-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/sri-narsing-bhelpuri-juice-centre-mg-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2FuZHdpY2giLCJkaXNoX2lkcyI6WyI2NDA4OCJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "554 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"c208943d-2503-47b5-b47d-23b7c7d9e90d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"96323","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "1650+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    _id: 20670093,
    info: {
      resId: 20670093,
      name: "Pista House Bakery",
      image: {
        url: "https://b.zmtcdn.com/data/dish_photos/b4e/cf937f1f3b000b77de9820af65f9cb4e.jpg?output-format=webp",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/19937288/b8f98cd0239c1792920ffd087a83f9fa_o2_featured_v2.jpg?output-format=webp",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "33",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "33",
            reviewTextSmall: "33 Reviews",
            subtext: "33 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹800 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "S D Road, Secunderabad",
        address:
          "Hosue 9-1-60, Ground & 1st Floor, Near Deccan Chronicals Office, S D Road, Secunderabad",
        localityUrl: "hyderabad/sd-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/shawarma/",
          name: "Shawarma",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "20 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/hyderabad/pista-house-bakery-sd-road-secunderabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/pista-house-bakery-sd-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gU2FuZHdpY2giLCJkaXNoX2lkcyI6WyI2NDA4OCJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"c208943d-2503-47b5-b47d-23b7c7d9e90d","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20670093","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        },
        text: "325+ orders placed from here recently",
      },
    ],
  },
];
