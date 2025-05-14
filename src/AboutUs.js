import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Floating shapes for decoration */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      
      <div className="aboutus-content">
        <div className="aboutus-header">
          <h1>Festive India</h1>
          <p className="aboutus-tagline">Celebrating India's Rich Cultural Heritage</p>
        </div>
        
        <div className="aboutus-section">
          <div className="aboutus-description">
            <p>
              Welcome to Festive India, your ultimate guide to the vibrant and diverse festivals celebrated across our beautiful country. 
              India is a land of festivals where every state, every region has its unique cultural celebrations that bring 
              communities together in joy and harmony.
            </p>
            <p>
              From the colorful Holi in the north to the serene Onam in the south, from the magnificent Durga Puja in the east to 
              the spirited Navratri in the west, we bring you comprehensive information about festivals across all Indian states.
            </p>
          </div>
        </div>
        
        <div className="aboutus-section">
          <h2>Popular Festivals Across India</h2>
          
          <div className="festival-item">
            <h3>Diwali</h3>
            <p>
              Known as the Festival of Lights, Diwali is celebrated across India with great enthusiasm. 
              Homes are decorated with oil lamps (diyas), candles, and colorful rangoli patterns. The festival 
              signifies the victory of light over darkness and good over evil. Families gather for prayers, exchange gifts,
              enjoy traditional sweets, and light fireworks to celebrate this auspicious occasion.
            </p>
          </div>
          
          <div className="festival-item">
            <h3>Christmas</h3>
            <p>
              Christmas is celebrated on December 25th to honor the birth of Jesus Christ. People decorate Christmas trees, 
              exchange gifts, and enjoy festive meals. Churches hold special midnight mass services, and carolers spread cheer. 
              It's a time of love, giving, and togetherness across the world. In India, Christmas is celebrated with great joy 
              especially in states like Goa, Kerala, and metropolitan cities.
            </p>
          </div>
          
          <div className="festival-item">
            <h3>Durga Puja</h3>
            <p>
              A major festival in Eastern India, particularly in West Bengal, Durga Puja celebrates the 
              goddess Durga's victory over the demon Mahishasura. The festival features elaborate pandals 
              (temporary structures), cultural performances, and community feasts. For five days, cities transform
              into open-air art galleries with spectacular themed pandals housing beautiful idols of the goddess.
            </p>
          </div>
          
          <div className="festival-item">
            <h3>Eid</h3>
            <p>
              Eid al-Fitr is celebrated after the month-long fasting during Ramadan. The day begins with a special prayer 
              at the mosque, followed by feasting and visiting loved ones. Traditional dishes like biryani, kebabs, and 
              sheer kurma are enjoyed. It's a day of gratitude, charity (Zakat), and joy. Muslims dress in their finest clothes 
              and homes are decorated with lights and ornaments.
            </p>
          </div>
          
          <div className="festival-item">
            <h3>Navratri</h3>
            <p>
              Navratri is a nine-day Hindu festival dedicated to Goddess Durga and her various forms. Each day is associated 
              with a different avatar and color. Devotees fast, pray, and celebrate with Garba and Dandiya dances at night. 
              The festival signifies the triumph of good over evil and spiritual renewal. It's especially vibrant in Gujarat 
              and other western Indian states.
            </p>
          </div>
          
          <div className="festival-item">
            <h3>Pongal</h3>
            <p>
              Pongal is a Tamil harvest festival that lasts for four days. It is dedicated to the Sun God and celebrates 
              nature, livestock, and farmers. The main ritual includes boiling fresh rice in milk and letting it overflow 
              to symbolize abundance. Houses are decorated, and kolams (rangoli) are drawn. Families gather to cook sweet 
              pongal in clay pots outdoors and offer gratitude to the sun for a bountiful harvest.
            </p>
          </div>
          
          <div className="festival-item">
            <h3>Raksha Bandhan</h3>
            <p>
              Raksha Bandhan is celebrated by sisters tying a rakhi (decorative thread) on their brothers' wrists. 
              It signifies protection, love, and commitment. Brothers give gifts in return and vow to protect their sisters. 
              It's a heartfelt celebration of the unique bond between siblings, irrespective of distance or age. The festival 
              also emphasizes familial bonds and the sacred promise of protection.
            </p>
          </div>
          
          <div className="festival-item">
            <h3>Chhath Puja</h3>
            <p>
              Chhath Puja is a unique festival observed in Bihar, UP, and Jharkhand. Devotees offer prayers to the setting 
              and rising sun over two days, standing in rivers or water bodies. It involves rigorous fasting, cleanliness, 
              and strict discipline. Fruits, sweets, and 'Thekua' are offered to Surya Dev and Chhathi Maiya. The sight of 
              thousands of devotees standing in water at sunrise and sunset is a powerful symbol of devotion.
            </p>
          </div>
          
          <div className="festival-item">
            <h3>Gudi Padwa</h3>
            <p>
              Gudi Padwa marks the beginning of the new year for Maharashtrians and Konkanis. Families raise a 'Gudi'—a silk 
              cloth tied to a bamboo stick topped with a metal pot, symbolizing victory. Special dishes like puran poli and 
              shrikhand are prepared. Homes are cleaned and decorated with rangoli. The festival coincides with the spring 
              harvest and is a time for new beginnings.
            </p>
          </div>
          
          <div className="festival-item">
            <h3>Varamahalakshmi</h3>
            <p>
              Varamahalakshmi Vratham is observed by women in South India to seek blessings from Goddess Lakshmi for prosperity, 
              health, and family welfare. A decorated Kalash symbolizes the goddess. Devotees perform elaborate pujas and chant 
              mantras. It is believed that worshipping Varamahalakshmi brings peace and wealth. The festival falls on the Friday 
              before the full moon in the Hindu month of Shravana.
            </p>
          </div>
        </div>
        
        <div className="aboutus-section">
          <h2>History of Indian Festivals</h2>
          <p>
            Indian festivals have roots that go back thousands of years, with many originating from ancient Hindu scriptures, 
            historical events, agricultural cycles, and local folklore. These celebrations have evolved over centuries, 
            absorbing and reflecting the cultural influences of various dynasties, invasions, and social movements.
          </p>
          <p>
            Many festivals mark important events from Hindu mythology, such as Krishna Janmashtami celebrating Lord Krishna's birth 
            or Ram Navami honoring Lord Rama. Others, like Pongal and Baisakhi, are tied to the agricultural calendar, thanking nature 
            for bountiful harvests and marking seasonal transitions.
          </p>
          <p>
            Religious diversity in India has contributed to the rich tapestry of festivals. Muslims celebrate Eid-ul-Fitr and 
            Eid-ul-Adha, Christians observe Christmas and Easter, Sikhs commemorate Guru Nanak Jayanti, Buddhists observe Buddha Purnima, 
            and Jains celebrate Mahavir Jayanti. Each community adds its unique traditions to India's festive landscape.
          </p>
        </div>
        
        <div className="aboutus-section">
          <h2>Cultural Significance</h2>
          <p>
            Festivals in India are more than just religious observances—they are the living expression of the country's cultural soul. 
            They serve as a binding force that connects people across generations, reinforcing cultural values and traditions while 
            creating a sense of community and belonging.
          </p>
          <p>
            These celebrations are vital for preserving India's intangible cultural heritage. They maintain traditional art forms, 
            music, dance, culinary practices, and crafts that might otherwise fade away in our rapidly modernizing world. Festivals 
            provide a platform for artisans and performers to showcase their talents and pass down their knowledge to younger generations.
          </p>
          <p>
            In today's global context, Indian festivals have also become ambassadors of the country's soft power, attracting tourists 
            from around the world who wish to experience the vibrant colors, sounds, tastes, and spiritual depth of these celebrations. 
            As Indian communities spread across the globe, these festivals have become international phenomena, connecting the diaspora 
            to their cultural roots while introducing Indian traditions to new audiences worldwide.
          </p>
        </div>
        
        <div className="aboutus-section">
          <h2>Our Mission</h2>
          <p>
            At Festive India, we are dedicated to preserving and promoting the cultural heritage of India by documenting and 
            showcasing the rich tapestry of festivals celebrated across the country. Our mission is to:
          </p>
          <ul>
            <li>Provide accurate, detailed, and comprehensive information about Indian festivals across all states and territories</li>
            <li>Document the historical evolution, regional variations, and unique customs associated with each celebration</li>
            <li>Promote cultural understanding and appreciation among diverse communities within India and globally</li>
            <li>Create a digital archive of festival traditions, rituals, and practices for future generations</li>
            <li>Connect festival enthusiasts with authentic celebrations nationwide through event listings and travel guides</li>
            <li>Support local artisans and performers whose livelihoods are connected to festival celebrations</li>
            <li>Serve as an educational resource for students, researchers, and anyone interested in India's cultural heritage</li>
          </ul>
        </div>
        
        <div className="aboutus-section">
          <h2>Explore Festivals State by State</h2>
          <p>
            India's cultural diversity is beautifully reflected in how festivals are celebrated differently across its 28 states 
            and 8 union territories. Each region adds its unique flavors, customs, and traditions to even the most widely observed 
            celebrations.
          </p>
          <p>
            In North India, states like Punjab celebrate Lohri with bonfires and folk dances, while Rajasthan's Teej honors the 
            monsoon season with swings and traditional songs. In the South, Kerala's Onam features intricate flower rangolis (pookalams) 
            and boat races, while Tamil Nadu's Pongal includes special rituals thanking the Sun God for agricultural bounty.
          </p>
          <p>
            Eastern states like West Bengal transform during Durga Puja with elaborate art installations and cultural performances, 
            while Assam's Bihu marks the agricultural calendar with traditional dance and music. Western India sees Maharashtra's 
            Ganesh Chaturthi with community installations of Lord Ganesha idols, while Gujarat erupts in vibrant garba and dandiya 
            dances during Navratri.
          </p>
          <p>
            Our comprehensive state-wise guides help you discover these regional variations, explaining local customs, special foods, 
            unique rituals, and the historical context that makes each celebration special. Whether you're planning a cultural 
            tour or simply want to learn more about India's diverse heritage, our state-by-state exploration offers an in-depth 
            understanding of how India celebrates.
          </p>
        </div>
        
        <div className="aboutus-section">
          <h2>Seasonal Festivals</h2>
          <p>
            Indian festivals follow a rhythmic pattern aligned with the changes in seasons, harvests, and celestial movements. 
            Each season brings its own unique celebrations, colors, and flavors that reflect the agricultural and cultural cycles 
            of different regions.
          </p>
          <p>
            Spring welcomes vibrant celebrations like Holi, with its explosion of colors, and Baisakhi, marking the wheat harvest in Punjab. 
            Summer brings sacred events like Rath Yatra in Odisha, where massive chariots carrying deities parade through streets lined with devotees.
          </p>
          <p>
            The monsoon season is celebrated with festivals like Teej in Rajasthan and Onam in Kerala, both honoring the life-giving rains 
            and agricultural abundance. Autumn heralds the grand Navaratri and Durga Puja celebrations, while winter brings Lohri, Makar Sankranti, 
            and Pongal, marking the harvest season with bonfires, kite flying, and special offerings to the sun.
          </p>
          <p>
            Each seasonal festival incorporates elements that reflect its timing – from the foods consumed to the activities performed – 
            creating a beautiful harmony between human celebration and nature's cycles.
          </p>
        </div>
        
        <div className="aboutus-section">
          <h2>Traditional Foods and Festival Cuisine</h2>
          <p>
            Food is an integral part of Indian festival celebrations, with each occasion featuring its own special dishes that 
            carry deep cultural and symbolic significance. These culinary traditions vary widely across regions but are united 
            in their importance to the festive experience.
          </p>
          <p>
            During Diwali, families prepare sweets like ladoos, barfis, and halwa to share with loved ones and visitors. 
            Holi brings refreshing thandai and colorful gujiya pastries. Durga Puja features elaborate Bengali cuisine, 
            while Eid celebrations center around savory biryani, kebabs, and sweet seviyan (vermicelli pudding).
          </p>
          <p>
            Many festival foods are prepared only during specific celebrations, making them particularly special. The preparation 
            is often a communal activity, with recipes passed down through generations. In today's fast-paced world, these traditional 
            cooking practices during festivals help preserve culinary heritage and strengthen family bonds.
          </p>
          <p>
            At Festive India, we document these unique culinary traditions, providing recipes and stories behind the special foods 
            that make each festival a feast for all senses.
          </p>
        </div>
        
        <div className="aboutus-section thank-you-section">
          <h2>Thank You for Joining Us!</h2>
          <div className="thank-you-content">
            <p>
              We are deeply grateful that you've taken the time to explore India's rich festival traditions with us. Our journey 
              to document and celebrate these diverse cultural expressions is made meaningful by your interest and participation.
            </p>
            <p>
              As you navigate through our website, we hope you discover the beauty, significance, and joy that these festivals bring 
              to millions across India and beyond. Whether you're researching for academic purposes, planning to experience these 
              celebrations firsthand, or simply curious about India's cultural heritage, we hope Festive India serves as your 
              trusted companion.
            </p>
            <p>
              Remember, each festival is a thread in India's magnificent cultural tapestry – understanding one helps you appreciate 
              the whole. May the spirit of India's festivals bring color, light, and harmony to your life, just as they do to ours!
            </p>
            <div className="signature">
              <span>— The Festive India Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;