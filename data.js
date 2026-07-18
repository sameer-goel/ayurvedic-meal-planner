const DOSHA_INFO = {
  vata: {
    icon: '🌬️',
    name: 'Vata',
    elements: 'Air + Ether',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dall_Khichdi.jpg/500px-Dall_Khichdi.jpg',
    description: 'Vata types are creative, quick-thinking, and energetic. When balanced, they are lively and enthusiastic. Vata digestion tends to be irregular, so warm, grounding, and nourishing foods are ideal.',
    favor: ['Warm, cooked foods', 'Healthy fats (ghee, sesame oil)', 'Sweet, sour, and salty tastes', 'Root vegetables', 'Warm spices (ginger, cinnamon)'],
    avoid: ['Raw, cold foods', 'Dry and crunchy snacks', 'Bitter and astringent tastes', 'Caffeine and stimulants', 'Skipping meals'],
    tips: [
      'Eat at regular times — consistency calms Vata',
      'Favor warm, cooked meals over raw salads',
      'Use ghee and sesame oil generously',
      'Sip warm water or ginger tea throughout the day',
      'Avoid eating on the go — sit down and eat mindfully',
      'Include sweet, sour, and salty tastes in every meal'
    ]
  },
  pitta: {
    icon: '🔥',
    name: 'Pitta',
    elements: 'Fire + Water',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fruktsallad_%28Fruit_salad%29.jpg/500px-Fruktsallad_%28Fruit_salad%29.jpg',
    description: 'Pitta types are sharp, focused, and driven. They have strong digestion but can overheat easily. Cooling, moderately spiced foods help keep Pitta in balance.',
    favor: ['Cooling foods (cucumber, coconut)', 'Sweet, bitter, and astringent tastes', 'Fresh fruits and salads', 'Basmati rice and wheat', 'Cooling herbs (coriander, mint, fennel)'],
    avoid: ['Very spicy and oily foods', 'Sour and fermented foods', 'Excess salt', 'Red meat', 'Alcohol and vinegar'],
    tips: [
      'Never skip lunch — Pitta digestion peaks at midday',
      'Favor cooling foods, especially in summer',
      'Avoid excess chili, garlic, and fried foods',
      'Drink room-temperature or cool water (not iced)',
      'Include bitter greens like kale and dandelion',
      'Use coconut oil for cooking instead of mustard oil'
    ]
  },
  kapha: {
    icon: '🌊',
    name: 'Kapha',
    elements: 'Earth + Water',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Making_Stir-Fry_%283286445383%29.jpg/500px-Making_Stir-Fry_%283286445383%29.jpg',
    description: 'Kapha types are calm, steady, and nurturing. They have strong endurance but can become sluggish. Light, warm, and stimulating foods help keep Kapha energized.',
    favor: ['Light, dry, and warm foods', 'Pungent, bitter, and astringent tastes', 'Leafy greens and legumes', 'Warming spices (black pepper, turmeric)', 'Honey (in moderation, unheated)'],
    avoid: ['Heavy, oily, and fried foods', 'Excess dairy and sweets', 'Cold drinks and ice cream', 'White rice and wheat', 'Oversized portions'],
    tips: [
      'Eat your lightest meal at dinner',
      'Favor pungent and bitter tastes to stimulate digestion',
      'Use minimal oil when cooking — dry roast or bake instead',
      'Sip hot water with lemon or ginger tea',
      'Avoid snacking between meals',
      'Add warming spices like black pepper, turmeric, and ginger to every meal'
    ]
  }
};

const MEALS = {
  vata: [
    { name: 'Warm Oatmeal with Ghee & Dates', type: 'breakfast', desc: 'Creamy oats cooked with milk, topped with ghee, chopped dates, and a pinch of cinnamon.', ingredients: 'Oats, milk, ghee, dates, cinnamon, cardamom', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Oatmeal_%281%29.jpg/500px-Oatmeal_%281%29.jpg' },
    { name: 'Sweet Potato & Ginger Soup', type: 'lunch', desc: 'Velvety roasted sweet potato soup with fresh ginger and a drizzle of sesame oil.', ingredients: 'Sweet potato, ginger, onion, sesame oil, cumin, vegetable broth', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sweet_patatoes_soup_in_home.jpg/500px-Sweet_patatoes_soup_in_home.jpg' },
    { name: 'Kitchari (Mung Dal & Rice)', type: 'lunch', desc: 'The classic Ayurvedic healing meal — easy to digest and deeply nourishing.', ingredients: 'Basmati rice, mung dal, ghee, turmeric, cumin, coriander, ginger', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dall_Khichdi.jpg/500px-Dall_Khichdi.jpg' },
    { name: 'Sesame Noodles with Vegetables', type: 'dinner', desc: 'Warm rice noodles tossed with sautéed vegetables and a creamy sesame dressing.', ingredients: 'Rice noodles, carrots, zucchini, sesame paste, tamari, ginger', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nabeyaku_ramen_%28cropped%29.jpg/500px-Nabeyaku_ramen_%28cropped%29.jpg' },
    { name: 'Spiced Carrot & Beet Stew', type: 'dinner', desc: 'Hearty root vegetable stew with warming spices, perfect for grounding Vata.', ingredients: 'Carrots, beets, potato, cumin, coriander, ghee, vegetable broth', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Carrot_soup.jpg/500px-Carrot_soup.jpg' },
    { name: 'Banana Almond Smoothie', type: 'breakfast', desc: 'Warm-spiced smoothie with ripe banana, almond butter, and cardamom.', ingredients: 'Banana, almond butter, warm milk, cardamom, honey', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kiwi_Smoothie.jpg/500px-Kiwi_Smoothie.jpg' },
    { name: 'Ghee Rice with Paneer', type: 'lunch', desc: 'Fragrant basmati rice cooked in ghee, served with soft paneer and mild spices.', ingredients: 'Basmati rice, ghee, paneer, peas, cumin, turmeric', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Paneer_tikka.jpg/500px-Paneer_tikka.jpg' },
    { name: 'Warm Spiced Milk (Golden Milk)', type: 'snack', desc: 'Golden milk with turmeric, cinnamon, and a touch of honey — deeply calming.', ingredients: 'Milk, turmeric, cinnamon, ginger, honey, black pepper', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ginger_tea.jpg/500px-Ginger_tea.jpg' },
    { name: 'Avocado Toast with Poached Egg', type: 'breakfast', desc: 'Warm sourdough with creamy avocado, poached egg, and a sprinkle of cumin.', ingredients: 'Sourdough bread, avocado, egg, cumin, salt, lemon', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Avocado_toast_at_Voyager_Espresso_%2833134505776%29.jpg/500px-Avocado_toast_at_Voyager_Espresso_%2833134505776%29.jpg' },
    { name: 'Pumpkin Kheer', type: 'snack', desc: 'Creamy pumpkin pudding sweetened with jaggery and flavored with cardamom.', ingredients: 'Pumpkin, milk, jaggery, cardamom, saffron, almonds', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Kheer.jpg/500px-Kheer.jpg' }
  ],
  pitta: [
    { name: 'Coconut Chia Pudding', type: 'breakfast', desc: 'Cool and creamy chia pudding made with coconut milk and topped with fresh berries.', ingredients: 'Chia seeds, coconut milk, maple syrup, blueberries, mint', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kheer_with_condensed_milk..JPG/500px-Kheer_with_condensed_milk..JPG' },
    { name: 'Cucumber Mint Raita Bowl', type: 'lunch', desc: 'Cooling yogurt bowl with cucumber, mint, and a side of basmati rice.', ingredients: 'Yogurt, cucumber, mint, cumin, basmati rice, coriander', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Cucumber-raita.jpg/500px-Cucumber-raita.jpg' },
    { name: 'Coconut Curry with Greens', type: 'dinner', desc: 'Mild coconut curry with spinach and zucchini, served over jasmine rice.', ingredients: 'Coconut milk, spinach, zucchini, coriander, fennel, jasmine rice', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Punjabi_Sarsoon_Ka_Saag.JPG/500px-Punjabi_Sarsoon_Ka_Saag.JPG' },
    { name: 'Melon & Rose Water Salad', type: 'snack', desc: 'Refreshing fruit salad with sweet melon, rose water, and fresh mint.', ingredients: 'Cantaloupe, honeydew, rose water, mint, lime', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fruktsallad_%28Fruit_salad%29.jpg/500px-Fruktsallad_%28Fruit_salad%29.jpg' },
    { name: 'Coriander Lentil Soup', type: 'lunch', desc: 'Light and fragrant lentil soup with fresh coriander and a squeeze of lime.', ingredients: 'Red lentils, coriander, lime, coconut oil, cumin, turmeric', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/EgFoodLentilSoup.jpg/500px-EgFoodLentilSoup.jpg' },
    { name: 'Sweet Rice with Cardamom', type: 'breakfast', desc: 'Gently sweetened rice porridge with cardamom and raisins.', ingredients: 'Basmati rice, milk, cardamom, raisins, maple syrup', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kheer_with_condensed_milk..JPG/500px-Kheer_with_condensed_milk..JPG' },
    { name: 'Asparagus & Fennel Stir-fry', type: 'dinner', desc: 'Lightly sautéed asparagus and fennel with cooling herbs.', ingredients: 'Asparagus, fennel, coconut oil, coriander, dill, lime', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Making_Stir-Fry_%283286445383%29.jpg/500px-Making_Stir-Fry_%283286445383%29.jpg' },
    { name: 'Aloe Vera & Pomegranate Cooler', type: 'snack', desc: 'A refreshing drink that cools Pitta fire from the inside out.', ingredients: 'Aloe vera juice, pomegranate juice, mint, lime, raw sugar', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pomegranate_Juice_%282019%29.jpg/500px-Pomegranate_Juice_%282019%29.jpg' },
    { name: 'Mung Bean Salad', type: 'lunch', desc: 'Sprouted mung beans with cucumber, cilantro, and a light lime dressing.', ingredients: 'Mung beans, cucumber, cilantro, lime, coconut flakes, mint', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Cucumber_Salad_%2830974695127%29.jpg/500px-Cucumber_Salad_%2830974695127%29.jpg' },
    { name: 'Stuffed Zucchini Boats', type: 'dinner', desc: 'Baked zucchini filled with quinoa, fresh herbs, and a cooling yogurt drizzle.', ingredients: 'Zucchini, quinoa, parsley, mint, yogurt, fennel seeds', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Cucumber-raita.jpg/500px-Cucumber-raita.jpg' }
  ],
  kapha: [
    { name: 'Spiced Apple & Millet Porridge', type: 'breakfast', desc: 'Light and warming millet porridge with stewed apples and cloves.', ingredients: 'Millet, apple, cloves, cinnamon, ginger, honey', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Oatmeal_%281%29.jpg/500px-Oatmeal_%281%29.jpg' },
    { name: 'Turmeric Lentil Soup', type: 'lunch', desc: 'Peppery and light dal with turmeric, black pepper, and leafy greens.', ingredients: 'Red lentils, turmeric, black pepper, spinach, garlic, lemon', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/EgFoodLentilSoup.jpg/500px-EgFoodLentilSoup.jpg' },
    { name: 'Stir-fried Greens with Ginger', type: 'dinner', desc: 'Vibrant mix of kale, mustard greens, and broccoli with fresh ginger.', ingredients: 'Kale, mustard greens, broccoli, ginger, garlic, mustard seeds', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Making_Stir-Fry_%283286445383%29.jpg/500px-Making_Stir-Fry_%283286445383%29.jpg' },
    { name: 'Roasted Chickpea Bowl', type: 'lunch', desc: 'Crispy spiced chickpeas over a bed of bitter greens with lemon dressing.', ingredients: 'Chickpeas, arugula, radicchio, lemon, black pepper, turmeric', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chana_masala.jpg/500px-Chana_masala.jpg' },
    { name: 'Ginger Lemon Tea', type: 'snack', desc: 'Stimulating hot tea to kickstart digestion and clear Kapha congestion.', ingredients: 'Fresh ginger, lemon, honey, black pepper, hot water', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ginger_tea.jpg/500px-Ginger_tea.jpg' },
    { name: 'Buckwheat Pancakes', type: 'breakfast', desc: 'Light and fluffy buckwheat pancakes with a drizzle of honey and berries.', ingredients: 'Buckwheat flour, egg, almond milk, cinnamon, honey, berries', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg/500px-Foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg' },
    { name: 'Barley Vegetable Stew', type: 'dinner', desc: 'Hearty yet light stew with barley, celery, and plenty of warming spices.', ingredients: 'Barley, celery, carrots, black pepper, bay leaf, turmeric', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Carrot_soup.jpg/500px-Carrot_soup.jpg' },
    { name: 'Spicy Cabbage Sauté', type: 'dinner', desc: 'Quick-cooked cabbage with mustard seeds, chili, and fresh curry leaves.', ingredients: 'Cabbage, mustard seeds, green chili, curry leaves, turmeric', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Punjabi_Sarsoon_Ka_Saag.JPG/500px-Punjabi_Sarsoon_Ka_Saag.JPG' },
    { name: 'Corn & Pepper Salad', type: 'lunch', desc: 'Light and zesty salad with roasted corn, bell peppers, and lime.', ingredients: 'Corn, bell peppers, red onion, lime, cilantro, chili flakes', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Cucumber_Salad_%2830974695127%29.jpg/500px-Cucumber_Salad_%2830974695127%29.jpg' },
    { name: 'Baked Pear with Cloves', type: 'snack', desc: 'Warm baked pear with cloves and a touch of honey — light and satisfying.', ingredients: 'Pear, cloves, cinnamon, honey, cardamom', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg' }
  ]
};

const QUIZ_QUESTIONS = [
  {
    question: 'What best describes your body frame?',
    options: [
      { text: 'Thin & Light', subtitle: 'Hard to gain weight, narrow shoulders, lean frame', dosha: 'vata', image: 'output/body-vata-thin.png' },
      { text: 'Medium & Athletic', subtitle: 'Well-proportioned, muscular, medium build', dosha: 'pitta', image: 'output/body-pitta-athletic.png' },
      { text: 'Broad & Sturdy', subtitle: 'Gain weight easily, wide frame, strong build', dosha: 'kapha', image: 'output/body-kapha-sturdy.png' }
    ]
  },
  {
    question: 'How is your digestion?',
    options: [
      { text: 'Irregular', subtitle: 'Sometimes good, sometimes not', dosha: 'vata', image: 'output/q2-digestion-irregular.png' },
      { text: 'Strong', subtitle: 'I get hungry often and can eat a lot', dosha: 'pitta', image: 'output/q2-digestion-strong.png' },
      { text: 'Slow & Steady', subtitle: 'I can skip meals without issue', dosha: 'kapha', image: 'output/q2-digestion-slow.png' }
    ]
  },
  {
    question: 'How do you handle stress?',
    options: [
      { text: 'Anxious & Worried', subtitle: 'I get nervous and overthink', dosha: 'vata', image: 'output/q3-stress-anxious.png' },
      { text: 'Irritable & Frustrated', subtitle: 'I get fired up and impatient', dosha: 'pitta', image: 'output/q3-stress-irritable.png' },
      { text: 'Withdraw & Go Quiet', subtitle: 'I pull back and need alone time', dosha: 'kapha', image: 'output/q3-stress-withdraw.png' }
    ]
  },
  {
    question: 'What is your skin like?',
    options: [
      { text: 'Dry & Rough', subtitle: 'Especially in cold weather', dosha: 'vata', image: 'output/q4-skin-dry.png' },
      { text: 'Warm & Oily', subtitle: 'Prone to redness or sensitivity', dosha: 'pitta', image: 'output/q4-skin-warm.png' },
      { text: 'Smooth & Thick', subtitle: 'Naturally moisturized, slightly oily', dosha: 'kapha', image: 'output/q4-skin-smooth.png' }
    ]
  },
  {
    question: 'How do you sleep?',
    options: [
      { text: 'Light Sleeper', subtitle: 'I wake up easily during the night', dosha: 'vata', image: 'output/q5-sleep-light.png' },
      { text: 'Moderate', subtitle: 'I sleep well but not too long', dosha: 'pitta', image: 'output/q5-sleep-moderate.png' },
      { text: 'Deep & Heavy', subtitle: 'I love sleeping in, hard to wake up', dosha: 'kapha', image: 'output/q5-sleep-deep.png' }
    ]
  },
  {
    question: 'What weather bothers you most?',
    options: [
      { text: 'Cold & Windy', subtitle: 'I hate the chill and dry air', dosha: 'vata', image: 'output/q6-weather-cold-wind.png' },
      { text: 'Hot & Humid', subtitle: 'Heat makes me uncomfortable', dosha: 'pitta', image: 'output/q6-weather-hot-humid.png' },
      { text: 'Cold & Damp', subtitle: 'Rainy grey days drag me down', dosha: 'kapha', image: 'output/q6-weather-cold-damp.png' }
    ]
  },
  {
    question: 'How would friends describe your personality?',
    options: [
      { text: 'Creative & Spontaneous', subtitle: 'Enthusiastic, full of ideas', dosha: 'vata', image: 'output/q7-personality-creative.png' },
      { text: 'Ambitious & Sharp', subtitle: 'Determined, focused, driven', dosha: 'pitta', image: 'output/q7-personality-ambitious.png' },
      { text: 'Calm & Patient', subtitle: 'Loyal, steady, easygoing', dosha: 'kapha', image: 'output/q7-personality-calm.png' }
    ]
  }
];

// Quiz Themes — changeable via QUIZ_THEMES and setQuizTheme()
const QUIZ_THEMES = {
  earth: {
    name: 'Earth',
    bg: '#f5f0e8',
    cardBg: '#fff',
    cardBorder: '#e0d8c8',
    cardSelectedBorder: '#7a6a42',
    cardSelectedBg: '#faf4e6',
    accent: '#7a6a42',
    text: '#3a3226',
    textMuted: '#7a6a52',
    progressBg: '#e0d8c8',
    progressFill: '#7a6a42'
  },
  ocean: {
    name: 'Ocean',
    bg: '#eaf4f8',
    cardBg: '#fff',
    cardBorder: '#c8dde8',
    cardSelectedBorder: '#3a7ca5',
    cardSelectedBg: '#e6f2fa',
    accent: '#3a7ca5',
    text: '#1e3a4f',
    textMuted: '#5a8a9f',
    progressBg: '#c8dde8',
    progressFill: '#3a7ca5'
  },
  forest: {
    name: 'Forest',
    bg: '#eef5ec',
    cardBg: '#fff',
    cardBorder: '#c8dcc4',
    cardSelectedBorder: '#4a7a42',
    cardSelectedBg: '#e8f4e6',
    accent: '#4a7a42',
    text: '#2a3a26',
    textMuted: '#5a7a52',
    progressBg: '#c8dcc4',
    progressFill: '#4a7a42'
  },
  sunset: {
    name: 'Sunset',
    bg: '#fef0e8',
    cardBg: '#fff',
    cardBorder: '#f0d0b8',
    cardSelectedBorder: '#c06030',
    cardSelectedBg: '#fef0e4',
    accent: '#c06030',
    text: '#4a2a1a',
    textMuted: '#9a6a4a',
    progressBg: '#f0d0b8',
    progressFill: '#c06030'
  }
};

