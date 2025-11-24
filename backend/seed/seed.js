// backend/seed/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Plant from "../models/Plant.js";

dotenv.config();

const plants = [
  {
    name: "Aloe Vera",
    category: "Skincare",
    description: "Aloe vera is widely used in skincare for its soothing, hydrating, and healing properties. It is an excellent natural moisturizer that suits all skin types, especially dry and sensitive skin. Known for its cooling effect, it helps soothe sunburns and reduce inflammation. Aloe vera also contains antibacterial and anti-inflammatory compounds, making it effective in treating acne and calming irritated skin. Rich in antioxidants like vitamins C and E, it supports skin elasticity and helps reduce signs of aging such as fine lines and wrinkles. Regular use can lighten blemishes, fade acne scars, and promote a more even skin tone. Additionally, it can be used as a gentle makeup remover or mild exfoliant, leaving the skin refreshed and smooth. Whether applied directly from the plant or used in commercial products, aloe vera remains a staple in natural skincare.",
    image: "https://www.lotus.in/cdn/shop/files/Aloe_Vera_19d03d67-a8e3-4e65-bd94-12222849c32d_600x.jpg?v=1712987991",
  },
  {
    name: "Neem",
    category: "Skincare",
    description: "Neem is a powerful herb widely used in skincare for its antibacterial, antifungal, and anti-inflammatory properties. It is especially beneficial for acne-prone skin, as it helps fight acne-causing bacteria, reduce excess oil, and soothe inflamed breakouts. Neem also aids in healing scars and dark spots, promoting a clearer and more even complexion. Its antifungal properties make it effective in treating skin conditions like eczema, psoriasis, and fungal infections. Rich in antioxidants and fatty acids, neem helps nourish the skin, delay signs of aging, and improve skin elasticity. It also tightens pores and controls sebum production, making it ideal for oily skin. Whether used in face packs, oils, or cleansers, neem is a natural and effective remedy for maintaining healthy, blemish-free skin.",
    image: "https://t4.ftcdn.net/jpg/06/66/22/45/360_F_666224592_nId6bSdaOgx8yjgEvokpP791NG5WYXw3.jpg",
  },
  {
    name: "Tulsi",
    category: "Medicinal",
    description: "Tulsi, also known as Holy Basil, is highly valued in traditional medicine for its wide range of therapeutic benefits. It is a powerful adaptogen, helping the body cope with stress and improve overall resilience. Tulsi has strong antibacterial, antiviral, and antifungal properties, making it effective in boosting immunity and protecting against common infections like colds, flu, and respiratory issues. It supports respiratory health by relieving symptoms of asthma, bronchitis, and congestion. Tulsi is also known to aid digestion, regulate blood sugar levels, and support heart health by lowering cholesterol and blood pressure. Its anti-inflammatory and antioxidant compounds help detoxify the body and fight oxidative stress. Additionally, tulsi is used to promote mental clarity, reduce anxiety, and support overall well-being.",
    image: "https://www.ugaoo.com/cdn/shop/articles/561da47a50.jpg?v=1729499689",
  },
  {
    name: "Bhringraj",
    category: "Haircare",
    description: "Bhringraj, often referred to as the KING OF HERBS for hair, is highly regarded in Ayurvedic hair care for its nourishing and restorative properties. It is best known for promoting hair growth by stimulating the hair follicles and improving blood circulation to the scalp. Bhringraj helps reduce hair fall, strengthens the roots, and prevents premature graying. Its natural conditioning properties make hair softer, shinier, and more manageable. It also helps combat dandruff and dry scalp due to its antifungal and anti-inflammatory effects. Regular use of bhringraj oil or hair masks can improve overall scalp health, prevent split ends, and support thicker, healthier hair. It is especially beneficial when used in the form of oil or infused into herbal hair treatments.",
    image: "https://m.media-amazon.com/images/I/41iYtra4ZGL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "Shikakai",
    category: "Haircare",
    description: "Shikakai, often called the “fruit for the hair,” is a traditional Ayurvedic ingredient known for its gentle cleansing and nourishing properties. It acts as a natural shampoo, effectively removing dirt and excess oil without stripping the scalp of its natural moisture. Rich in vitamins A, C, D, E, and K, shikakai strengthens hair roots, promotes healthy hair growth, and reduces hair fall. It helps maintain the scalp’s natural pH balance, preventing issues like dandruff, dryness, and itchiness. Shikakai also works as a natural detangler, leaving hair soft, smooth, and more manageable. Regular use improves hair texture, adds shine, and helps prevent split ends. It's commonly used in powder or liquid form as a part of herbal hair washes or masks.",
    image: "https://m.media-amazon.com/images/I/517P56L47JL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "Turmeric",
    category: "Medicinal",
    description: "Turmeric, a golden-yellow spice widely used in traditional medicine, offers a wealth of medicinal benefits due to its active compound curcumin. It is well-known for its powerful anti-inflammatory and antioxidant properties, which help combat chronic inflammation and oxidative stress in the body. Turmeric supports joint health, making it beneficial in managing arthritis and related conditions. It also aids in digestive health by stimulating bile production and reducing symptoms of bloating and indigestion. Turmeric has antimicrobial properties that help fight infections and boost the immune system. Additionally, it supports heart health by improving blood circulation and reducing cholesterol levels. Studies also suggest that turmeric may help improve brain function, lower the risk of neurodegenerative diseases, and even aid in managing symptoms of depression.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "Sandal wood",
    category: "Skincare",
    description: "Sandalwood is a highly valued ingredient in skincare, known for its soothing, anti-inflammatory, and antimicrobial properties. It helps calm irritated skin, making it effective in treating acne, rashes, and other inflammatory skin conditions. Sandalwood is also known for its ability to lighten blemishes, dark spots, and pigmentation, promoting a clearer and more even skin tone. Its cooling effect makes it ideal for soothing sunburns and skin allergies. Rich in antioxidants, sandalwood helps fight signs of aging such as fine lines, wrinkles, and dryness by nourishing and rejuvenating the skin. It also acts as a gentle exfoliant, removing dead skin cells and improving skin texture. Whether used as a powder, paste, or essential oil, sandalwood is a natural remedy for achieving smooth, radiant, and healthy skin.",
    image: "https://t4.ftcdn.net/jpg/04/84/44/83/360_F_484448394_j85DJHVFAAEIcmPbQc8pEaF9nVnMYRXu.jpg",
  },{
    name: "Vetiver",
    category: "Skincare",
    description: "Vetiver, also known as Khus, is a highly beneficial natural ingredient for skincare, especially valued for its cooling, healing, and hydrating properties. It is rich in antioxidants, which help protect the skin from environmental damage and delay signs of aging like fine lines and wrinkles. Vetiver is especially effective for dry and dehydrated skin, as it deeply moisturizes and restores the skin’s natural moisture barrier. Its anti-inflammatory and antimicrobial properties make it useful in treating acne, rashes, and skin irritation, while its cooling nature helps soothe sunburn and redness. Vetiver also aids in skin regeneration, making it useful for fading scars and promoting an even skin tone. Its pleasant, earthy aroma adds a calming, aromatic benefit, often used in skincare oils, toners, and masks for a refreshing and rejuvenating effect.",
    image: "https://img500.exportersindia.com/product_images/bc-500/2023/9/8213622/vetiver-dry-1676460365-6764024.jpg",
  },{
    name: "Amla",
    category: "Haircare",
    description: "Amla, also known as Indian gooseberry, is a powerhouse of nutrients and is highly regarded in haircare for its strengthening and rejuvenating properties. Rich in vitamin C and antioxidants, amla helps stimulate hair growth by improving scalp circulation and nourishing the hair follicles. It strengthens the hair from the roots, reducing hair fall and breakage. Amla also helps prevent **premature graying** by supporting melanin production, keeping hair naturally dark and vibrant. Its antibacterial and anti-inflammatory properties help maintain a healthy scalp, combating **dandruff, itchiness, and dryness**. Regular use of amla—either as oil, powder, or in hair masks—leaves hair **shiny, soft, and voluminous**, making it a key ingredient in many Ayurvedic haircare routines.",
    image: "https://static.wixstatic.com/media/943d2f_b142d61cd7084df88a43d68f18961456~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/943d2f_b142d61cd7084df88a43d68f18961456~mv2.jpg",
  },{
    name: "Henna",
    category: "Haircare",
    description: "Henna is a natural herb widely used in haircare for its conditioning and coloring benefits. It acts as a natural hair dye, providing a rich reddish tint without the harmful chemicals found in synthetic dyes. Beyond coloring, henna strengthens the hair shaft, making hair stronger, thicker, and less prone to breakage. It also helps condition the scalp, reducing dandruff and soothing irritation with its antifungal and antimicrobial properties. Henna adds a natural shine and smoothness to hair, improving texture and manageability. Regular use of henna can help balance oil production on the scalp, making it beneficial for both dry and oily hair types. Overall, henna is valued not only for its beautifying effects but also for promoting healthier, more resilient hair.",
    image: "https://vgrgardens.com/wp-content/uploads/2023/04/henna-maruthani-muligai-buyonline-vgr-gardens-1-scaled.jpg",
  },{
    name: "Hibiscus",
    category: "Haircare",
    description: "Hibiscus is a popular natural ingredient in haircare known for its nourishing and strengthening properties. Rich in vitamins A and C, hibiscus promotes healthy hair growth by stimulating the scalp and improving blood circulation. It helps reduce hair fall and prevents premature graying by strengthening the hair roots. Hibiscus also acts as a natural conditioner, making hair softer, shinier, and more manageable. Its moisturizing properties help combat dryness and dandruff, soothing an itchy scalp. Additionally, hibiscus can help repair damaged hair and prevent split ends, promoting overall hair health. Whether used as a powder, oil, or in hair masks, hibiscus is a gentle and effective way to maintain beautiful, healthy hair naturally.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Hibiscus_rosa-sinensis_flower_2.JPG/2560px-Hibiscus_rosa-sinensis_flower_2.JPG",
  },{
    name: "Rosemary",
    category: "Haircare",
    description: "Roses are cherished in haircare for their soothing and hydrating benefits. Rose water and rose oil help balance the scalp’s pH, reducing dryness and irritation while promoting a healthy environment for hair growth. Rich in antioxidants and vitamins, roses nourish the hair follicles, strengthen the roots, and prevent hair fall. They also add a natural shine and softness to the hair, making it more manageable and smooth. Rose extracts have mild astringent properties that help control excess oil on the scalp, reducing dandruff and itchiness. The gentle, calming fragrance of roses also makes hair treatments refreshing and uplifting. Overall, roses support healthy, shiny, and fragrant hair while soothing the scalp naturally.",
    image: "https://images.prismic.io/floraqueen-blog/Ztnf-7zzk9ZrXD0f_shutterstock_174579518.jpg?w=1000&h=600&fit=crop&auto=format,compress",
  },{
    name: "Fenugreek",
    category: "Haircare",
    description: "Fenugreek (methi) is a popular herb in haircare known for its rich nutritional profile and multiple benefits. It is packed with proteins, vitamins, and nicotinic acid, which help stimulate hair growth and strengthen hair follicles. Fenugreek seeds help reduce hair fall, prevent dandruff, and soothe an itchy, flaky scalp thanks to their anti-inflammatory and antifungal properties. They also help in restoring hair’s natural shine and softness, making it more manageable. Fenugreek can help delay premature graying and reduce scalp dryness by moisturizing and nourishing deeply. Used as a paste, oil, or hair mask, fenugreek is an effective natural remedy for promoting thicker, healthier, and stronger hair.",
    image: "https://plantura.garden/uk/wp-content/uploads/sites/2/2022/04/fenugreek-seeds-leaves.jpg",
  },{
    name: "Moringa",
    category: "Medicinal",
    description: "Moringa, often called the miracle tree, is packed with medicinal benefits due to its rich nutrient content, including vitamins, minerals, and antioxidants. It supports **immune health** by boosting the body's ability to fight infections and inflammation. Moringa has powerful **anti-inflammatory properties** that help reduce pain and swelling, making it beneficial for conditions like arthritis. It also aids in **regulating blood sugar levels**, which can help manage diabetes. Rich in antioxidants, moringa protects cells from oxidative damage and supports **heart health** by lowering cholesterol and blood pressure. Additionally, it promotes **digestive health**, helps detoxify the body, and improves skin and hair health thanks to its nourishing compounds. Moringa is also known to enhance energy levels and mental clarity, making it a valuable herb for overall wellness.",
    image: "https://www.allthatgrows.in/cdn/shop/articles/Feat_Image-Moringa.jpg?v=1615441270",
  },{
    name: "Green Tea",
    category: "Skincare",
    description: "Green tea is highly valued in skincare for its powerful antioxidant and anti-inflammatory properties. It helps protect the skin from damage caused by free radicals and UV exposure, reducing signs of aging like fine lines and wrinkles. Green tea soothes irritated skin, calms redness, and helps reduce inflammation, making it beneficial for sensitive and acne-prone skin. It also helps control excess oil production and fights acne-causing bacteria, promoting clearer skin. Rich in polyphenols, green tea supports skin healing and can reduce puffiness and dark circles around the eyes. Whether used as a toner, in face masks, or creams, green tea is a natural ingredient that promotes healthy, radiant, and youthful-looking skin.",
    image: "https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg",
  },{
    name: "Ashwagandha",
    category: "Medicinal",
    description: "Ashwagandha, often called the Indian ginseng,is a powerful adaptogenic herb widely used in traditional medicine for its numerous health benefits. It helps the body manage stress by reducing cortisol levels, promoting relaxation, and improving mental clarity. Ashwagandha supports the immune system, enhancing overall resilience against infections. It has anti-inflammatory and antioxidant properties that help reduce inflammation and protect cells from damage. This herb is also known to boost energy, improve stamina, and support muscle strength. Additionally, ashwagandha promotes better sleep quality, supports thyroid function, and may help regulate blood sugar and cholesterol levels. Its calming effects make it beneficial for anxiety, depression, and overall mental well-being.",
    image: "https://plantura.garden/uk/wp-content/uploads/sites/2/2023/06/ashwagandha-fruits.jpg",
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Plant.deleteMany(); // clears old data
    await Plant.insertMany(plants);
    console.log("✅ Data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
