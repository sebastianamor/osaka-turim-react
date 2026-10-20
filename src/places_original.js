const PLACES = [

    {
  id: 'osaka_castle',
  cat: 'historic',
  emoji: '🏯',
   photoUrl: 'https://i.ibb.co/5X8Z7GRw/IMG-20260416-170109.jpg',
  lat: 34.6873,
  lng: 135.5262,
  rating: '4.8',
  en: {
    name: 'Osaka Castle',
    cat: 'Historic Site',
    desc: 'The iconic 16th-century castle rebuilt in 1931. Tower museum, moat and cherry blossom park.',
    mapLink: 'https://www.google.com/maps?q=34.6873,135.5262'
  },
  es: {
    name: 'Castillo de Osaka',
    cat: 'Sitio Histórico',
    desc: 'El icónico castillo del siglo XVI reconstruido en 1931. Museo, foso y parque de cerezos.',
    mapLink: 'https://www.google.com/maps?q=34.6873,135.5262'
  },
  zh: {
    name: '大阪城',
    cat: '历史遗址',
    desc: '标志性的16世纪城堡，1931年重建。城堡博物馆、护城河和樱花公园。',
    mapLink: 'https://www.google.com/maps?q=34.6873,135.5262'
  }
},
{
  id: 'templo_tenoji',
  cat: 'historic',
  emoji: '⛩️',
  photoUrl: ' https://japonpedia.com/wp-content/uploads/2019/11/Templo-de-Shitennoji-de-Osaka-696x464.jpg ',
  lat: 34.6547,
  lng: 135.5165,
  rating: '4.8',
  en: {
    name: 'Templo Tenoji',
    cat: 'Historic Site',
    desc: 'Restored Buddhist temple from the year 593 with a five-story pagoda, statues, and turtle ponds',
    mapLink: 'https://www.google.com/maps?q=34.6547,135.5165'
  },
  es: {
    name: 'Templo Tenoji',
    cat: 'Sitio Histórico',
    desc: 'Templo budista restaurado del año 593 con una pagoda de 5 niveles, estatuas y estanques con tortugas',
    mapLink: 'https://www.google.com/maps?q=34.6547,135.5165'
  },
  zh: {
    name: '天王寺',
    cat: '历史遗址',
    desc: '始建于593年、经过修复的佛教寺院，内有五重塔、佛像和放生龟池。',
    mapLink: 'https://www.google.com/maps?q=34.6547,135.5165'
  }
},
{
  id: 'dotonbori',
  cat: 'food',
  emoji: '🦑',
    photoUrl: 'https://ibb.co/jPPnqqfB"><img src="https://i.ibb.co/MxxFKKSW/IMG-20260416-160828.jpg  ',
  lat: 34.6687,
  lng: 135.5013,
  rating: '4.7',
  en: {
    name: 'Dotonbori',
    cat: 'Food & Nightlife',
    desc: 'Osaka\'s most famous street food district with glittering signs, takoyaki and ramen.',
    mapLink: 'https://www.google.com/maps?q=34.6687,135.5013'
  },
  es: {
    name: 'Dotonbori',
    cat: 'Gastronomía y Vida Nocturna',
    desc: 'El distrito gastronómico más famoso de Osaka con letreros brillantes, takoyaki y ramen.',
    mapLink: 'https://www.google.com/maps?q=34.6687,135.5013'
  },
  zh: {
    name: '道顿堀',
    cat: '美食与夜生活',
    desc: '大阪最著名的街头美食区，璀璨霓虹灯、章鱼烧和拉面。',
    mapLink: 'https://www.google.com/maps?q=34.6687,135.5013'
  }
},
{
  id: 'shinsekai',
  cat: 'historic',
  emoji: '🗼',
  photoUrl: ' https://voyapon.s3.amazonaws.com/wp-content/uploads/2020/04/22172023/Osaka_Shinsekai_47.jpg ',
  lat: 34.6519,
  lng: 135.5063,
  rating: '4.5',
  en: {
    name: 'Shinsekai',
    cat: 'Historic District',
    desc: 'Retro 1910s district with the Tsutenkaku Tower. Kushikatsu heaven and old-school atmosphere.',
    mapLink: 'https://www.google.com/maps?q=34.6519,135.5063'
  },
  es: {
    name: 'Shinsekai',
    cat: 'Barrio Histórico',
    desc: 'Barrio retro de 1910 con la Torre Tsutenkaku. Paraíso del kushikatsu y atmósfera vintage.',
    mapLink: 'https://www.google.com/maps?q=34.6519,135.5063'
  },
  zh: {
    name: '新世界',
    cat: '历史街区',
    desc: '1910年代复古街区，通天阁耸立其中，串炸天堂，老派氛围浓郁。',
    mapLink: 'https://www.google.com/maps?q=34.6519,135.5063'
  }
},
{
  id: 'umeda',
  cat: 'shopping',
  emoji: '🛍️',
  photoUrl: 'https://i.ibb.co/jkcp6QDJ/IMG-20260416-175857.jpg  ',
  lat: 34.7024,
  lng: 135.4959,
  rating: '4.6',
  en: {
    name: 'Umeda Sky Building',
    cat: 'Shopping & Views',
    desc: 'Futuristic twin towers with a "floating garden" observatory offering panoramic city views.',
    mapLink: 'https://www.google.com/maps?q=34.7024,135.4959'
  },
  es: {
    name: 'Umeda Sky Building',
    cat: 'Compras y Vistas',
    desc: 'Torres gemelas futuristas con un observatorio de "jardín flotante" con vistas panorámicas.',
    mapLink: 'https://www.google.com/maps?q=34.7024,135.4959'
  },
  zh: {
    name: '梅田空中庭院',
    cat: '购物与观景',
    desc: '未来感十足的双子塔，顶部"空中花园"观景台俯瞰城市全景。',
    mapLink: 'https://www.google.com/maps?q=34.7024,135.4959'
  }
},
{
  id: 'namba',
  cat: 'shopping',
  emoji: '🏪',
  photoUrl: 'https://learnjapanese123.com/wp-content/uploads/2019/05/namba-parks-japan-jerde-partnership-2.jpg  ',
  lat: 34.6645,
  lng: 135.5010,
  rating: '4.5',
  en: {
    name: 'Namba',
    cat: 'Shopping District',
    desc: 'Osaka\'s busiest shopping area with Den-den Town, Namba Parks and hundreds of restaurants.',
    mapLink: 'https://www.google.com/maps?q=34.6645,135.5010'
  },
  es: {
    name: 'Namba',
    cat: 'Zona de Compras',
    desc: 'La zona comercial más concurrida de Osaka con Den-den Town, Namba Parks y cientos de restaurantes.',
    mapLink: 'https://www.google.com/maps?q=34.6645,135.5010'
  },
  zh: {
    name: '难波',
    cat: '购物区',
    desc: '大阪最繁华的购物区，含电电城、难波公园及数百家餐厅。',
    mapLink: 'https://www.google.com/maps?q=34.6645,135.5010'
  }
},
{
  id: 'sumiyoshi',
  cat: 'historic',
  emoji: '⛩️',
  photoUrl: '  https://osaka.b-cdn.net/wp-content/uploads/2022/05/IMG_1137.jpeg ',
  lat: 34.6136,
  lng: 135.4930,
  rating: '4.7',
  en: {
    name: 'Sumiyoshi Grand Shrine',
    cat: 'Shinto Shrine',
    desc: 'One of Japan\'s oldest shrines (211 AD). Unique Sumiyoshi architectural style with arched bridge.',
    mapLink: 'https://www.google.com/maps?q=34.6136,135.4930'
  },
  es: {
    name: 'Gran Santuario Sumiyoshi',
    cat: 'Santuario Sintoísta',
    desc: 'Uno de los santuarios más antiguos de Japón (211 d.C.). Estilo arquitectónico único con puente arqueado.',
    mapLink: 'https://www.google.com/maps?q=34.6136,135.4930'
  },
  zh: {
    name: '住吉大社',
    cat: '神道神社',
    desc: '日本最古老的神社之一（公元211年），独特的住吉建筑风格与拱桥。',
    mapLink: 'https://www.google.com/maps?q=34.6136,135.4930'
  }
},
{
  id: 'tennoji',
  cat: 'park',
  emoji: '🦁',
  photoUrl: 'https://we-love-osaka-en.com/wp/wp-content/uploads/2022/11/access-tennoji-zoo1.jpg   ',
  lat: 34.6519,
  lng: 135.5065,
  rating: '4.6',
  en: {
    name: 'Tennoji Zoo & Park',
    cat: 'Park',
    desc: 'Más de 1.000 animales en uno de los zoológicos más antiguos de Japón, rodeado de un hermoso parque.',
    mapLink: 'https://www.google.com/maps?q=34.6519,135.5065'
  },
  es: {
    name: 'Zoo y Parque Tennoji',
    cat: 'Parque',
    desc: 'Más de 1.000 animales en uno de los zoológicos más antiguos de Japón, rodeado de un hermoso parque.',
    mapLink: 'https://www.google.com/maps?q=34.6519,135.5065'
  },
  zh: {
    name: '天王寺动物园和公园',
    cat: '公园',
    desc: '日本最古老的动物园之一，拥有1000多种动物，周围环绕美丽公园。',
    mapLink: 'https://www.google.com/maps?q=34.6519,135.5065'
  }
},
{
  id: 'nishinomaru_garden',
  cat: 'park',
  emoji: '🦁',
  photoUrl: ' https://www.jrailpass.com/blog/wp-content/uploads/2019/11/osaka-castle-park.jpg  ',
  lat: 34.6869,
  lng: 135.5234,
  rating: '4.6',
  en: {
    name: 'Nishinomaru Garden',
    cat: 'Park',
    desc: 'The Nishinomaru Garden of Osaka Castle is a vast lawn garden of approximately 20,000 tsubo located on the west side of Osaka Castle.',
    mapLink: 'https://www.google.com/maps?q=34.6869,135.5234'
  },
  es: {
    name: 'Jardín Nishinomaru',
    cat: 'Parque',
    desc: 'El Jardín Nishinomaru del Castillo de Osaka es un vasto jardín de césped de aproximadamente 20.000 tsubo en el lado oeste del Castillo de Osaka.',
    mapLink: 'https://www.google.com/maps?q=34.6869,135.5234'
  },
  zh: {
    name: '西之丸庭园',
    cat: '公园',
    desc: '大阪城西之丸庭园是一处广阔的草坪庭园，位于大阪城西侧，面积约两万坪。',
    mapLink: 'https://www.google.com/maps?q=34.6869,135.5234'
  }
},
{
  id: 'kuromon',
  cat: 'food',
  emoji: '🐟',
  photoUrl: ' https://res.cloudinary.com/dbm1qiew0/image/upload/blog-images/2024/08/Kuromon-Market-1.jpeg   ',
  lat: 34.6681,
  lng: 135.5068,
  rating: '4.7',
  en: {
    name: 'Kuromon Market',
    cat: 'Food Market',
    desc: 'Osaka\'s kitchen since 1902. Over 180 stalls with fresh seafood, fruits, meats and street food.',
    mapLink: 'https://www.google.com/maps?q=34.6681,135.5068'
  },
  es: {
    name: 'Mercado Kuromon',
    cat: 'Mercado de Alimentos',
    desc: 'La cocina de Osaka desde 1902. Más de 180 puestos con pescado fresco, frutas, carnes y comida callejera.',
    mapLink: 'https://www.google.com/maps?q=34.6681,135.5068'
  },
  zh: {
    name: '黑门市场',
    cat: '食品市场',
    desc: '自1902年起的大阪厨房，180多个摊位提供新鲜海鲜、水果、肉类和街头小食。',
    mapLink: 'https://www.google.com/maps?q=34.6681,135.5068'
  }
},
{
  id: 'hotel_granvia',
  cat: 'hotel',
  emoji: '🏨',
  photoUrl: 'https://onb-cdn.b-cdn.net/images-stn-osaka/60-Hotel-Granvia-Osaka1.jpg   ',
  lat: 34.7026,
  lng: 135.4962,
  rating: '4.6',
  en: {
    name: 'Hotel Granvia Osaka',
    cat: 'Hotel ★★★★★',
    desc: 'Luxury hotel directly connected to JR Osaka Station. Stunning views and world-class service.',
    mapLink: 'https://www.google.com/maps?q=34.7026,135.4962'
  },
  es: {
    name: 'Hotel Granvia Osaka',
    cat: 'Hotel ★★★★★',
    desc: 'Hotel de lujo directamente conectado a la estación JR Osaka. Vistas impresionantes y servicio de clase mundial.',
    mapLink: 'https://www.google.com/maps?q=34.7026,135.4962'
  },
  zh: {
    name: '大阪格兰比亚酒店',
    cat: '酒店 ★★★★★',
    desc: '直连JR大阪站的豪华酒店，壮观视野和世界级服务。',
    mapLink: 'https://www.google.com/maps?q=34.7026,135.4962'
  }
},
{
  id: 'namba_parks',
  cat: 'shopping',
  emoji: '🌿',
  photoUrl: ' https://learnjapanese123.com/wp-content/uploads/2019/05/namba-parks-japan-jerde-partnership-2.jpg  ',
  lat: 34.6627,
  lng: 135.4990,
  rating: '4.5',
  en: {
    name: 'Namba Parks',
    cat: 'Shopping & Garden',
    desc: 'Unique shopping mall with rooftop canyon garden, 9 floors of retail and dining over park terraces.',
    mapLink: 'https://www.google.com/maps?q=34.6627,135.4990'
  },
  es: {
    name: 'Namba Parks',
    cat: 'Centro Comercial',
    desc: 'Centro comercial único con jardín de cañón en la azotea, 9 pisos de tiendas y restaurantes.',
    mapLink: 'https://www.google.com/maps?q=34.6627,135.4990'
  },
  zh: {
    name: '难波公园',
    cat: '购物与花园',
    desc: '独特的购物中心，屋顶峡谷花园，9层零售和餐饮，俯瞰公园梯田。',
    mapLink: 'https://www.google.com/maps?q=34.6627,135.4990'
  }
},
{
  id: 'abeno',
  cat: 'night',
  emoji: '🌃',
  photoUrl: ' https://photos.smugmug.com/Osaka/Tennoji/i-P7K79vj/0/237e6287/L/Tennoji-Abeno_TSD_AbenoHarukas7-L.jpg  ',
  lat: 34.6461,
  lng: 135.5136,
  rating: '4.6',
  en: {
    name: 'Abeno Harukas',
    cat: 'Observatory & Night Views',
    desc: 'Japan\'s tallest skyscraper at 300m. Sky terrace with breathtaking panoramic night views of Osaka.',
    mapLink: 'https://www.google.com/maps?q=34.6461,135.5136'
  },
  es: {
    name: 'Abeno Harukas',
    cat: 'Observatorio',
    desc: 'El rascacielos más alto de Japón con 300m. Terraza con vistas nocturnas panorámicas de Osaka.',
    mapLink: 'https://www.google.com/maps?q=34.6461,135.5136'
  },
  zh: {
    name: '阿倍野Harukas',
    cat: '观景台',
    desc: '日本最高摩天大楼，高300米，天台俯瞰大阪壮阔夜景。',
    mapLink: 'https://www.google.com/maps?q=34.6461,135.5136'
  }
},
{
  id: 'denden_town',
  cat: 'otaku',
  emoji: '🎮',
  photoUrl: ' https://i.ibb.co/N23cX4zz/IMG-20260416-154220.jpg  ',
  lat: 34.6622,
  lng: 135.5057,
  rating: '4.7',
  en: {
    name: 'Den-Den Town',
    cat: 'Otaku District',
    desc: 'Osaka\'s famous electronics and anime district. Rows of shops selling manga, figures, retro games, cosplay costumes and electronics.',
    mapLink: 'https://www.google.com/maps?q=34.6622,135.5057'
  },
  es: {
    name: 'Den-Den Town',
    cat: 'Distrito Otaku',
    desc: 'El famoso barrio de electrónica y anime de Osaka. Filas de tiendas con manga, figuras, videojuegos retro, cosplay y electrónica.',
    mapLink: 'https://www.google.com/maps?q=34.6622,135.5057'
  },
  zh: {
    name: '电电城',
    cat: '御宅族街区',
    desc: '大阪著名的电子产品和动漫街区，商店林立，销售漫画、手办、复古游戏、cosplay服装和电子产品。',
    mapLink: 'https://www.google.com/maps?q=34.6622,135.5057'
  }
},
{
  id: 'animate_osaka',
  cat: 'otaku',
  emoji: '📚',
  
  lat: 34.6632,
  lng: 135.5044,
  rating: '4.6',
  en: {
    name: 'Animate Osaka Nipponbashi',
    cat: 'Anime & Manga Store',
    desc: 'Japan\'s largest anime chain store. 6 floors packed with manga, light novels, anime DVDs, CDs, figures and official merchandise.',
    mapLink: 'https://www.google.com/maps?q=34.6632,135.5044'
  },
  es: {
    name: 'Animate Osaka Nipponbashi',
    cat: 'Tienda de Anime y Manga',
    desc: 'La cadena de anime más grande de Japón. 6 pisos con manga, novelas ligeras, DVDs de anime, CDs, figuras y merchandising oficial.',
    mapLink: 'https://www.google.com/maps?q=34.6632,135.5044'
  },
  zh: {
    name: 'Animate大阪日本桥店',
    cat: '动漫漫画店',
    desc: '日本最大的动漫连锁店，6层楼满载漫画、轻小说、动漫DVD、CD、手办和官方周边。',
    mapLink: 'https://www.google.com/maps?q=34.6632,135.5044'
  }
},
{
  id: 'kotobukiya_osaka',
  cat: 'otaku',
  emoji: '🗿',
  
  lat: 34.6628,
  lng: 135.5050,
  rating: '4.8',
  en: {
    name: 'Kotobukiya Osaka',
    cat: 'Figure & Collectibles',
    desc: 'Premium figure manufacturer\'s flagship shop. Exclusive Gundam, Marvel, Star Wars and anime figures. A must for collectors.',
    mapLink: 'https://www.google.com/maps?q=34.6628,135.5050'
  },
  es: {
    name: 'Kotobukiya Osaka',
    cat: 'Figuras y Coleccionables',
    desc: 'Tienda insignia del fabricante de figuras premium. Figuras exclusivas de Gundam, Marvel, Star Wars y anime. Imprescindible para coleccionistas.',
    mapLink: 'https://www.google.com/maps?q=34.6628,135.5050'
  },
  zh: {
    name: '寿屋大阪店',
    cat: '手办与收藏品',
    desc: '高端手办厂商旗舰店，独家高达、漫威、星球大战和动漫手办，收藏家必访之地。',
    mapLink: 'https://www.google.com/maps?q=34.6628,135.5050'
  }
},
{
  id: 'super_potato_osaka',
  cat: 'otaku',
  emoji: '👾',
  
  lat: 34.6625,
  lng: 135.5048,
  rating: '4.7',
  en: {
    name: 'Super Potato Osaka',
    cat: 'Retro Game Store',
    desc: 'Legendary retro game shop with Famicom, Super Nintendo, Sega and PlayStation classics. A paradise for vintage gaming fans.',
    mapLink: 'https://www.google.com/maps?q=34.6625,135.5048'
  },
  es: {
    name: 'Super Potato Osaka',
    cat: 'Tienda de Juegos Retro',
    desc: 'Legendaria tienda de juegos retro con Famicom, Super Nintendo, Sega y clásicos de PlayStation. Paraíso para fans del gaming vintage.',
    mapLink: 'https://www.google.com/maps?q=34.6625,135.5048'
  },
  zh: {
    name: '超级薯条大阪店',
    cat: '复古游戏店',
    desc: '传奇复古游戏店，收藏FC、超任、世嘉及PlayStation经典游戏，复古游戏迷的天堂。',
    mapLink: 'https://www.google.com/maps?q=34.6625,135.5048'
  }
},
{
  id: 'shinsaibashi',
  cat: 'shopping',
  emoji: '👗',
  photoUrl: ' https://photos.smugmug.com/Osaka/Minami/i-tB7CsBK/0/8d21f7e1/L/Minami_Shop_Shinsaibashisuji1-L.jpg ',
  lat: 34.6748,
  lng: 135.5011,
  rating: '4.5',
  en: {
    name: 'Shinsaibashi',
    cat: 'Fashion District',
    desc: 'Osaka\'s premier shopping arcade with covered streets, flagship stores and local boutiques.',
    mapLink: 'https://www.google.com/maps?q=34.6748,135.5011'
  },
  es: {
    name: 'Shinsaibashi',
    cat: 'Distrito de Moda',
    desc: 'La principal galería comercial de Osaka con calles cubiertas, tiendas insignia y boutiques locales.',
    mapLink: 'https://www.google.com/maps?q=34.6748,135.5011'
  },
  zh: {
    name: '心斋桥',
    cat: '时尚街区',
    desc: '大阪首屈一指的购物拱廊，设有有盖街道、旗舰店和本地精品店。',
    mapLink: 'https://www.google.com/maps?q=34.6748,135.5011'
  }
}, 

{
  id: 'hattori_ryokuchi',
  cat: 'park',
  emoji: '🌳',
  photoUrl: 'https://osaka.b-cdn.net/wp-content/uploads/2022/03/IMG_2352-2500-696x447.jpg  ',
  lat: 34.77892675817409,
  lng: 135.48817257260572,
  rating: '4.6',
  en: {
    name: 'Hattori Ryokuchi Park',
    cat: 'Park',
    desc: 'A vast green oasis in northern Osaka featuring Japanese gardens, a bamboo forest, sports facilities, and the Open-Air Museum of Old Japanese Farmhouses.',
    mapLink: 'https://www.google.com/maps?q=34.77892675817409,135.48817257260572'
  },
  es: {
    name: 'Parque Hattori Ryokuchi',
    cat: 'Parque',
    desc: 'Un vasto oasis verde en el norte de Osaka con jardines japoneses, un bosque de bambú, instalaciones deportivas y el Museo de Casas Antiguas Japonesas al Aire Libre.',
    mapLink: 'https://www.google.com/maps?q=34.77892675817409,135.48817257260572'
  },
  zh: {
    name: '服部绿地公园',
    cat: '公园',
    desc: '大阪北部广阔的绿色氧吧，拥有日式庭园、竹林、运动设施及日本古民宅露天博物馆。',
    mapLink: 'https://www.google.com/maps?q=34.77892675817409,135.48817257260572'
  }
} , 

{
  id: 'expo_70_park',
  cat: 'park',
  emoji: '🌍',
  photoUrl: 'https://www.kanpai-japan.com/sites/default/files/uploads/2021/03/osaka-1970-expo-park-6.jpg  ',
  lat: 34.81263359285801,
  lng: 135.5319069576554,
  rating: '4.7',
  en: {
    name: 'Expo \'70 Commemorative Park',
    cat: 'Park',
    desc: 'A sprawling park built on the site of the 1970 World Expo, featuring the iconic Tower of the Sun, Japanese gardens, ponds, and wide open lawns.',
    mapLink: 'https://www.google.com/maps?q=34.81263359285801,135.5319069576554'
  },
  es: {
    name: 'Parque Conmemorativo Expo \'70',
    cat: 'Parque',
    desc: 'Un extenso parque construido en el sitio de la Exposición Universal de 1970, con la icónica Torre del Sol, jardines japoneses, estanques y amplios jardines de césped.',
    mapLink: 'https://www.google.com/maps?q=34.81263359285801,135.5319069576554'
  },
  zh: {
    name: '万博纪念公园',
    cat: '公园',
    desc: '建于1970年世博会旧址上的广阔公园，拥有标志性的太阳之塔、日式庭园、池塘和大片草坪。',
    mapLink: 'https://www.google.com/maps?q=34.81263359285801,135.5319069576554'
  }
} ,

{
  id: 'expo_2025',
  cat: 'park',
  emoji: '🌏',
  photoUrl: ' https://cdn.japan-forward.com/wp-content/uploads/2025/10/Expo-2025-last-day-1024x735.jpg ',
  lat: 34.64976892941861,
  lng: 135.38339206829616,
  rating: '4.9',
  en: {
    name: 'Expo 2025 Osaka',
    cat: 'Exhibition Park',
    desc: 'The venue of the 2025 World Expo in Osaka. A futuristic showcase of innovation, culture, and sustainability with stunning pavilions from around the world.',
    mapLink: 'https://www.google.com/maps?q=34.64976892941861,135.38339206829616'
  },
  es: {
    name: 'Expo 2025 Osaka',
    cat: 'Parque de Exposiciones',
    desc: 'La sede de la Exposición Universal 2025 en Osaka. Un escaparate futurista de innovación, cultura y sostenibilidad con impresionantes pabellones de todo el mundo.',
    mapLink: 'https://www.google.com/maps?q=34.64976892941861,135.38339206829616'
  },
  zh: {
    name: '2025年大阪世博会',
    cat: '博览公园',
    desc: '2025年大阪世界博览会举办地。汇聚全球创新、文化与可持续发展的未来主义展馆群。',
    mapLink: 'https://www.google.com/maps?q=34.64976892941861,135.38339206829616'
  }
},  {

  id: 'nagai_park',
  cat: 'park',
  emoji: '🏟️',
  photoUrl: 'https://discoverjapanhidden.com/wp-content/uploads/2026/02/Decision-Criteria-to-Avoid-Failure-at-Nagai-Park-640x360.jpg',
  lat: 34.61544648688633,
  lng: 135.51979563641612,
  rating: '4.5',
  en: {
    name: 'Nagai Park',
    cat: 'Park',
    desc: 'A spacious sports park in southern Osaka featuring Nagai Stadium, a baseball field, tennis courts, a swimming pool, and scenic walking paths.',
    mapLink: 'https://www.google.com/maps?q=34.61544648688633,135.51979563641612'
  },
  es: {
    name: 'Parque Nagai',
    cat: 'Parque',
    desc: 'Un amplio parque deportivo en el sur de Osaka con el Estadio Nagai, un campo de béisbol, canchas de tenis, una piscina y pintorescos senderos para caminar.',
    mapLink: 'https://www.google.com/maps?q=34.61544648688633,135.51979563641612'
  },
  zh: {
    name: '长居公园',
    cat: '公园',
    desc: '大阪南部宽敞的体育公园，拥有长居体育场、棒球场、网球场、游泳池和风景优美的步行道。',
    mapLink: 'https://www.google.com/maps?q=34.61544648688633,135.51979563641612'
  }
}


];

export default PLACES;
