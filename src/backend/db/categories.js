import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    page_data: {
      SECTION_SEARCH_TABS: [
        {
          type: "TAB_TYPE_ORDER",
          url: "/hyderabad/delivery-in-secunderabad",
          key: "delivery",
          isSelected: true,
          title: "Delivery",
          image:
            "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
          bgcolor: {
            tint: "200",
            type: "yellow",
          },
        },
        {
          type: "TAB_TYPE_GOOUT",
          url: "/hyderabad/dine-out-in-secunderabad",
          key: "dineout",
          isSelected: false,
          title: "Dining Out",

          image:
            "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
          bgcolor: {
            tint: "100",
            type: "teal",
          },
        },
        {
          type: "TAB_TYPE_NIGHTLIFE",
          url: "/hyderabad/drinks-and-nightlife-in-secunderabad",
          key: "nightlife",
          isSelected: false,
          title: "Nightlife",
          image:
            "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
          bgcolor: {
            tint: "100",
            type: "blue",
          },
        },
      ],
      SECTION_SEARCH_RESULT: [
        {
          title: "Inspiration for your first order",
          type: "LDC_Rail",
          items: [
            {
              entity_type: "universal_dish",
              name: "Biryani",
              entity_id: "30308",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=30308",
              },
            },
            {
              entity_type: "universal_dish",
              name: "Pizza",
              entity_id: "68987",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=68987",
              },
            },
            {
              entity_type: "universal_dish",
              name: "Chicken",
              entity_id: "55280",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=55280",
              },
            },
            {
              entity_type: "universal_dish",
              name: "Burger",
              entity_id: "9055",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=9055",
              },
            },
            {
              entity_type: "universal_dish",
              name: "Shawarma",
              entity_id: "45873",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=45873",
              },
            },
            {
              entity_type: "universal_dish",
              name: "Cake",
              entity_id: "39212",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=39212",
              },
            },
            {
              entity_type: "universal_dish",
              name: "Sandwich",
              entity_id: "64088",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=64088",
              },
            },
            {
              entity_type: "universal_dish",
              name: "Dosa",
              entity_id: "10296",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=10296",
              },
            },
            {
              entity_type: "universal_dish",
              name: "Rolls",
              entity_id: "56691",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=56691",
              },
            },

            {
              entity_type: "universal_dish",
              name: "Thali",
              entity_id: "35013",
              image: {
                imageUrl:
                  "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=35013",
              },
            },
          ],
        },
        {
          title: "Top brands for you",
          type: "brands",
          items: [
            {
              name: "Mehfil",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png?output-format=webp",
              },
              actionInfo: {
                clickUrl: "/hyderabad/mehfil-narayanguda/order",
              },
              color: "#FFFFFF",
              res_id: "93043",
              chain_id: "93043",

              deliveryTime: "37 min",
            },
            {
              name: "Paradise Biryani",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/6f7f4964abc7bb71c4bc370ccf36ff91_1633121322.png?output-format=webp",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/paradise-biryani-paradise-circle-secunderabad/order",
              },
              color: "#7C0000",
              res_id: "91662",
              chain_id: "91662",

              deliveryTime: "20 min",
            },
            {
              name: "Domino's Pizza",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252531.png?output-format=webp",
              },
              actionInfo: {
                clickUrl: "/hyderabad/peshawar-2-lakdikapul/order",
              },
              color: "#ffffff",
              res_id:"96258",
              chain_id: "90237",

              deliveryTime: "25 min",
            },
            {
              name: "Shah Ghouse Hotel & Restaurant",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png?output-format=webp",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/shah-ghouse-hotel-restaurant-lakdikapul/order",
              },
              color: "#ffffff",
              res_id: "19698425",
              chain_id: "93970",

              deliveryTime: "52 min",
            },
            {
              name: "KFC",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png?output-format=webp",
              },
              actionInfo: {
                clickUrl: "/hyderabad/kfc-sp-road-secunderabad/order",
              },
              color: "#ffffff",
              res_id: "20645657",
              chain_id: "90195",

              deliveryTime: "24 min",
            },
            {
              name: "Cream Stone Ice Cream",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/cba530e2b1d8439cd4170fef9b3f1d51_1635882104.png?output-format=webp",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/cream-stone-ice-cream-sp-road-secunderabad/order",
              },
              color: "#FDFEFF",
              res_id: "96701",
              chain_id: "90706",

              deliveryTime: "22 min",
            },
            {
              name: "McDonald's",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983679.png?output-format=webp",
              },
              actionInfo: {
                clickUrl: "/hyderabad/mcdonalds-sd-road-secunderabad/order",
              },
              color: "#FFFFFF",
              res_id: "91852",
              chain_id: "97262",

              deliveryTime: "16 min",
            },
            {
              name: "Pizza Hut",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
              },
              actionInfo: {
                clickUrl: "/hyderabad/pizza-hut-sd-road-secunderabad/order",
              },
              color: "#FFFFFF",
              res_id: "20508153",
              chain_id: "90384",

              deliveryTime: "27 min",
            },
            {
              name: "Burger King",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187971.png?output-format=webp",
              },
              actionInfo: {
                clickUrl: "/hyderabad/burger-king-boiguda-secunderabad/order",
              },
              color: "#ffffff",
              res_id: "20223950",
              chain_id: "18138658",

              deliveryTime: "37 min",
            },
            {
              name: "La Pino'z Pizza",
              image: {
                url: "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1632140164.png?output-format=webp",
              },
              actionInfo: {
                clickUrl:
                  "/hyderabad/la-pinoz-pizza-mg-road-secunderabad/order",
              },
              color: "#ffffff",
              res_id: "18867877",
              chain_id: "18867877",

              deliveryTime: "25 min",
            },
          ],
        },
        {
          type: "restaurant",
          info: {
            resId: 92020,
            name: "Grand Hotel",
            image: {
              url: "https://b.zmtcdn.com/data/pictures/chains/0/92020/3088315ab85025468fb789f2871bf131_o2_featured_v2.jpg?output-format=webp",
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
              votes: "109.7K",
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
              text: "₹200 for one",
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
              text: "₹200 for one",
            },
          },
          order: {
            deliveryTime: "46 min",
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
            clickUrl: "/hyderabad/grand-hotel-abids/order",
            clickActionDeeplink: "",
          },
          distance: "6.1 km",
          isPromoted: true,
          promotedText: "Promoted",
          trackingData: [
            {
              table_name: "zsearch_events_log",
              payload:
                '{"search_id":"e2175a90-a7f2-4143-b37f-7c9ebc845173","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"92020","element_type":"listing","rank":1,"metadata":{"is_ad":"true"}}',
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
              text: "₹200 for one",
            },
            locality: {
              name: "Habsiguda, Hyderabad",
              address:
                "7-102/8 & 9, G1, Sai Enclave Colony, Habsiguda, Hyderabad",
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
              text: "₹200 for one",
            },
          },
          order: {
            deliveryTime: "38 min",
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
            clickUrl: "/hyderabad/mithaiwala-habsiguda/order",
            clickActionDeeplink: "",
          },
          distance: "6.3 km",
          isPromoted: false,
          promotedText: "",
          trackingData: [
            {
              table_name: "zsearch_events_log",
              payload:
                '{"search_id":"e2175a90-a7f2-4143-b37f-7c9ebc845173","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18234142","element_type":"listing","rank":2}',
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
          info: {
            resId: 93072,
            name: "My Friend's Circle Restaurant",
            image: {
              url: "https://b.zmtcdn.com/data/pictures/2/93072/36f3cf137c298d60cd4a19467c71f403_o2_featured_v2.jpg?output-format=webp",
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
              text: "₹200 for one",
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
              text: "₹200 for one",
            },
          },
          order: {
            deliveryTime: "53 min",
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: "Order Now",
              clickUrl:
                "/hyderabad/my-friends-circle-restaurant-medchal-road/order",
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: "",
            clickUrl:
              "/hyderabad/my-friends-circle-restaurant-medchal-road/order",
            clickActionDeeplink: "",
          },
          distance: "6.6 km",
          isPromoted: true,
          promotedText: "Promoted",
          trackingData: [
            {
              table_name: "zsearch_events_log",
              payload:
                '{"search_id":"e2175a90-a7f2-4143-b37f-7c9ebc845173","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"93072","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
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
              text: "53800+ orders placed from here recently",
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
          info: {
            resId: 19698425,
            name: "Shah Ghouse Hotel & Restaurant",
            image: {
              url: "https://b.zmtcdn.com/data/pictures/chains/0/93970/ae0a71b4d560c4bcf7f52761c614fcc1_o2_featured_v2.jpg?output-format=webp",
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
                  reviewCount: "42.1K",
                  reviewTextSmall: "42.1K Reviews",
                  subtext: "42.1K Delivery Reviews",
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
              text: "₹200 for one",
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
              text: "₹200 for one",
            },
          },
          order: {
            deliveryTime: "52 min",
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: "Order Now",
              clickUrl:
                "/hyderabad/shah-ghouse-hotel-restaurant-lakdikapul/order",
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: "",
            clickUrl:
              "/hyderabad/shah-ghouse-hotel-restaurant-lakdikapul/order",
            clickActionDeeplink: "",
          },
          distance: "4.9 km",
          isPromoted: false,
          promotedText: "",
          trackingData: [
            {
              table_name: "zsearch_events_log",
              payload:
                '{"search_id":"e2175a90-a7f2-4143-b37f-7c9ebc845173","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19698425","element_type":"listing","rank":4}',
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
              text: "33375+ orders placed from here recently",
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
          info: {
            resId: 18657899,
            name: "Peshawar",
            image: {
              url: "https://b.zmtcdn.com/data/pictures/9/18657899/e7e36544327330baa5badcbf45663831_o2_featured_v2.jpg?output-format=webp",
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
              votes: "1,002",
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
                  reviewCount: "195",
                  reviewTextSmall: "195 Reviews",
                  subtext: "195 Delivery Reviews",
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
            deliveryTime: "39 min",
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
            clickUrl: "/hyderabad/peshawar-2-lakdikapul/order",
            clickActionDeeplink: "",
          },
          distance: "5.3 km",
          isPromoted: false,
          promotedText: "",
          trackingData: [
            {
              table_name: "zsearch_events_log",
              payload:
                '{"search_id":"e2175a90-a7f2-4143-b37f-7c9ebc845173","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18657899","element_type":"listing","rank":5}',
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
              text: "1800+ orders placed from here recently",
            },
          ],
        },
        {
          type: "restaurant",
          info: {
            resId: 97293,
            name: "Mujtaba Grills",
            image: {
              url: "https://b.zmtcdn.com/data/pictures/chains/3/97293/12a35730dff267f5bbff016301718a21_o2_featured_v2.jpg?output-format=webp",
            },
            o2FeaturedImage: {
              url: "https://b.zmtcdn.com/data/pictures/chains/3/97293/12a35730dff267f5bbff016301718a21_o2_featured_v2.jpg?output-format=webp",
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: "3.8",
              rating_text: "3.8",
              rating_subtitle: "Good",
              rating_color: "9ACD32",
              votes: "84.8K",
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
                  reviewCount: "1,109",
                  reviewTextSmall: "1,109 Reviews",
                  subtext: "1,109 Dining Reviews",
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
                  rating: "3.7",
                  reviewCount: "83.7K",
                  reviewTextSmall: "83.7K Reviews",
                  subtext: "83.7K Delivery Reviews",
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
              text: "₹200 for one",
            },
            locality: {
              name: "Karkhana, Secunderabad",
              address:
                "Plot 1, Gun Rock Enclave, Janakpuri Colony, Karkhana, Secunderabad",
              localityUrl: "hyderabad/karkhana-restaurants",
            },
            timing: {
              text: "",
              color: "",
            },
            cuisine: [
              {
                deeplink:
                  "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTkzXCJdfSJd",
                url: "https://www.zomato.com/hyderabad/restaurants/bbq/",
                name: "BBQ",
              },
              {
                deeplink:
                  "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                url: "https://www.zomato.com/hyderabad/restaurants/sichuan/",
                name: "Sichuan",
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
                  "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                name: "North Indian",
              },
              {
                deeplink:
                  "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTk2XCJdfSJd",
                url: "https://www.zomato.com/hyderabad/restaurants/mandi/",
                name: "Mandi",
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
            deliveryTime: "24 min",
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: "Order Now",
              clickUrl: "/hyderabad/mujtaba-grills-karkhana-secunderabad/order",
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: "",
            clickUrl: "/hyderabad/mujtaba-grills-karkhana-secunderabad/order",
            clickActionDeeplink: "",
          },
          distance: "1.8 km",
          isPromoted: true,
          promotedText: "Promoted",
          trackingData: [
            {
              table_name: "zsearch_events_log",
              payload:
                '{"search_id":"e2175a90-a7f2-4143-b37f-7c9ebc845173","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"97293","element_type":"listing","rank":6,"metadata":{"is_ad":"true"}}',
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
              text: "11400+ orders placed from here recently",
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
          info: {
            resId: 18527998,
            name: "Nimrah Restaurant",
            image: {
              url: "https://b.zmtcdn.com/data/pictures/chains/8/92558/a0eddc7af3680206bf36ae6195a3c0ac_o2_featured_v2.jpg?output-format=webp",
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
              votes: "391",
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
                  reviewCount: "320",
                  reviewTextSmall: "320 Reviews",
                  subtext: "320 Delivery Reviews",
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
            ],
            should_ban_ugc: false,
            costText: {
              text: "₹200 for one",
            },
          },
          order: {
            deliveryTime: "41 min",
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
            clickUrl: "/hyderabad/nimrah-restaurant-nampally/order",
            clickActionDeeplink: "",
          },
          distance: "5.9 km",
          isPromoted: false,
          promotedText: "",
          trackingData: [
            {
              table_name: "zsearch_events_log",
              payload:
                '{"search_id":"e2175a90-a7f2-4143-b37f-7c9ebc845173","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18527998","element_type":"listing","rank":7}',
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
              text: "2450+ orders placed from here recently",
            },
          ],
        },
        {
          type: "restaurant",
          info: {
            resId: 90261,
            name: "Suruchi Restaurant",
            image: {
              url: "https://b.zmtcdn.com/data/pictures/1/90261/440f7c0d44c6bf7635c7b95c2f43269e_o2_featured_v2.jpg?output-format=webp",
            },
            o2FeaturedImage: {
              url: "https://b.zmtcdn.com/data/pictures/1/90261/440f7c0d44c6bf7635c7b95c2f43269e_o2_featured_v2.jpg?output-format=webp",
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: "3.7",
              rating_text: "3.7",
              rating_subtitle: "Good",
              rating_color: "9ACD32",
              votes: "14K",
              subtext: "REVIEWS",
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: "DINING",
                  rating: "3.4",
                  reviewCount: "369",
                  reviewTextSmall: "369 Reviews",
                  subtext: "369 Dining Reviews",
                  color: "#1C1C1C",
                  ratingV2: "3.4",
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
                  reviewCount: "13.6K",
                  reviewTextSmall: "13.6K Reviews",
                  subtext: "13.6K Delivery Reviews",
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
              text: "₹900 for two",
            },
            cfo: {
              text: "₹200 for one",
            },
            locality: {
              name: "Habsiguda, Hyderabad",
              address:
                "House 4-44/2, Plot 2, New 1-65/A/7, Vasanth Vihar Colony, Habsiguda, Hyderabad",
              localityUrl: "hyderabad/habsiguda-restaurants",
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
                  "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                url: "https://www.zomato.com/hyderabad/restaurants/mughlai/",
                name: "Mughlai",
              },
              {
                deeplink:
                  "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                url: "https://www.zomato.com/hyderabad/restaurants/sichuan/",
                name: "Sichuan",
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
            deliveryTime: "38 min",
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: "Order Now",
              clickUrl: "/hyderabad/suruchi-restaurant-habsiguda/order",
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: "",
            clickUrl: "/hyderabad/suruchi-restaurant-habsiguda/order",
            clickActionDeeplink: "",
          },
          distance: "6.6 km",
          isPromoted: true,
          promotedText: "Promoted",
          trackingData: [
            {
              table_name: "zsearch_events_log",
              payload:
                '{"search_id":"e2175a90-a7f2-4143-b37f-7c9ebc845173","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"90261","element_type":"listing","rank":8,"metadata":{"is_ad":"true"}}',
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
                url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp",
                aspect_ratio: 2.0625,
              },
              text: "Restaurant partner follows WHO protocol",
            },
          ],
        },
        {
          type: "restaurant",
          info: {
            resId: 94997,
            name: "Harsha Deluxe Mess",
            image: {
              url: "https://b.zmtcdn.com/data/pictures/chains/7/94997/a86095ef3844d2e6e84df14e2ea9a94a_o2_featured_v2.jpg?output-format=webp",
            },
            o2FeaturedImage: {
              url: "https://b.zmtcdn.com/data/pictures/chains/7/94997/a86095ef3844d2e6e84df14e2ea9a94a_o2_featured_v2.jpg?output-format=webp",
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: "4.3",
              rating_text: "4.3",
              rating_subtitle: "Very Good",
              rating_color: "5BA829",
              votes: "888",
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
                  rating: "4.2",
                  reviewCount: "360",
                  reviewTextSmall: "360 Reviews",
                  subtext: "360 Delivery Reviews",
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
              text: "₹200 for one",
            },
            locality: {
              name: "Ameerpet, Hyderabad",
              address:
                "8-3-214, /2/6, Srinivas Nagar Colony, Ameerpet, Hyderabad",
              localityUrl: "hyderabad/ameerpet-restaurants",
            },
            timing: {
              text: "Closes in 17 minutes",
              color: "#ab000d",
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
              text: "₹200 for one",
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
            clickUrl: "/hyderabad/harsha-deluxe-mess-1-ameerpet/order",
            clickActionDeeplink: "",
          },
          distance: "5 km",
          isPromoted: false,
          promotedText: "",
          trackingData: [
            {
              table_name: "zsearch_events_log",
              payload:
                '{"search_id":"e2175a90-a7f2-4143-b37f-7c9ebc845173","location_type":"delivery_cell","location_id":"4308706865241391104","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"94997","element_type":"listing","rank":9}',
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
              text: "3925+ orders placed from here recently",
            },
          ],
        },
      ],
    },
  },
];
