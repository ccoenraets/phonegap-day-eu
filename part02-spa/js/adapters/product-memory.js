app.productAdapter = (function () {

    "use strict";

    var findById = function (id) {
            var deferred = $.Deferred(),
                product = null,
                l = products.length;
            for (var i = 0; i < l; i++) {
                if (products[i].id === id) {
                    product = products[i];
                    break;
                }
            }
            deferred.resolve(product);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = products.filter(function (element) {
                return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        products = [
            {   "id": 1,
                "name": "Tuareg Summer",
                "category": "Men's Shorts",
                "price": "$39.90",
                "rating": 4,
                "smallPic": "tuareg_small.jpg",
                "largePic": "tuareg.jpg",
                "features": [
                    "Lightweight, breathable cotton keeps you cool on hot summer days",
                    "Large pockets secure essentials like your keys and wallet",
                    "Comes in range of colors",
                    "Easywash, pre-shrunk and stain-resistant"
                ]
            },
            {   "id": 2,
                "name": "Nairobi Runners Blue",
                "category": "Men's Sport Footwear",
                "price": "$75",
                "rating": 3,
                "smallPic": "nairobi_small.jpg",
                "largePic": "nairobi.jpg",
                "features": [
                    "Lightweight upper with mesh windows for ventilation",
                    "Impacto cushioning system delivers 30% more protection when running on hard surfaces",
                    "Excellent ankle support",
                    "Available in a variety of colors"
                ]
            },
            {   "id": 3,
                "name": "Swim Goggles",
                "category": "Men's Sport Accessories",
                "price": "$25",
                "rating": 5,
                "smallPic": "goggles_small.jpg",
                "largePic": "goggles.jpg",
                "features": [
                    "Synthetic shell features waterproof, breathable coating; taped critical seams add weather protection",
                    "Polyester insulation hoards warmth on the inside",
                    "Integrated hood features removable faux fur trim for a dash of style",
                    "Stretch inner cuffs with thumbholes add warmth and an extra barrier against snow entry"
                ]
            },
            {   "id": 4,
                "name": "Interlaken Trek",
                "category": "Sport Hikers Footwear",
                "price": "$189.90",
                "rating": 4,
                "smallPic": "interlaken_small.jpg",
                "largePic": "interlaken.jpg",
                "features": [
                    "Lightweight upper with mesh windows for ventilation",
                    "Impacto cushioning system delivers 30% more protection when running on hard surfaces",
                    "Excellent ankle support",
                    "Available in a variety of colors"
                ]
            },
            {   "id": 5,
                "name": "Pufferfish",
                "category": "Snorkeling Fins",
                "price": "$25",
                "rating": 3,
                "smallPic": "pufferfish_small.jpg",
                "largePic": "pufferfish.jpg",
                "features": [
                    "Wool blend offers natural water repellence in light moisture",
                    "Polyfill insulation adds extra warmth",
                    "Lapels can be buttoned up to the neck for added warmth",
                    "Tailored details include a back dart, bound seams, finished interior and button cuffs"
                ]
            },
            {   "id": 6,
                "name": "Raja Ampat",
                "category": "Women's Sunglasses",
                "price": "$36",
                "rating": 5,
                "smallPic": "raja_small.jpg",
                "largePic": "raja.jpg",
                "features": [
                    "Wool blend offers natural water repellence in light moisture",
                    "Polyfill insulation adds extra warmth",
                    "Lapels can be buttoned up to the neck for added warmth",
                    "Tailored details include a back dart, bound seams, finished interior and button cuffs"
                ]
            },
            {   "id": 7,
                "name": "Mombassa Runners Pink",
                "category": "Women's Cross-Trainers",
                "price": "$120",
                "rating": 2,
                "smallPic": "mombassa_small.jpg",
                "largePic": "mombassa.jpg",
                "features": [
                    "Extra lateral support",
                    "Quick fasten velcro",
                    "Elasticized upper for maximum comfort"
                ]
            },
            {   "id": 8,
                "name": "Banff Snow",
                "category": "Ski Boots",
                "price": "$110",
                "rating": 4,
                "smallPic": "banff_small.jpg",
                "largePic": "banff.jpg",
                "features": [
                    "Extra lateral support",
                    "Quick fasten velcro",
                    "Elasticized upper for maximum comfort"
                ]
            },
            {   "id": 9,
                "name": "Corona",
                "category": "Shorts",
                "price": "$39",
                "rating": 4,
                "smallPic": "corona_small.jpg",
                "largePic": "corona.jpg",
                "features": [
                    "Lightweight peached nylon fabric wicks moisture and dries quickly to keep you comfortable on the go; fabric has a soft, smooth feel",
                    "With a UPF 50+ rating, fabric provides excellent protection against harmful ultraviolet rays",
                    "Secure your travel and trail essentials in the 2 side-seam zippered pockets or side cargo pockets"
                ]
            },
            {   "id": 10,
                "name": "Saskatoon Parka Purple",
                "category": "Women's Coat",
                "price": "$299",
                "rating": 4,
                "smallPic": "saskatoon_small.jpg",
                "largePic": "saskatoon.jpg",
                "features": [
                    "Storm shell provides wind and rain protection while allowing moisture to escape, keeping you warm and dry",
                    "High loft goose down provides the best lightweight insulation",
                    "Fur-lined hood for great protection in high wind conditions",
                    "Two high hand warmer pockets with fleece lining and two lower fleece lined pockets to keep your hands warm",
                    "Heavy duty rib knit cuffs and waistband to keep out cold winds and drafts",
                    "Inset sleeve design for comfort and improved fit"
                ]
            }
        ];

    // The public API
    return {
        findById: findById,
        findByName: findByName
    };

}());