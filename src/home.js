import React, { useState } from "react";
import "./home.css";

import christ from './components/christ.jpg';
import diwali from './components/diwali.png';
import durgapuja from './components/durgapuja.jpeg';
import eid from './components/eid.jpg';
import gudi from './components/gudi padwa.jpg';
import navratri from './components/navratri.jpg';
import pongal from './components/pongal.jpg';
import raksha from './components/raksha.jpg';
import south from './components/south.jpg';
import chath from './components/chath.jpg';

const festivalData = [
  {
    title: "Christmas",
    image: christ,
    short: "A festival celebrating the birth of Jesus Christ.",
    full: "Christmas is celebrated on December 25th to honor the birth of Jesus Christ. People decorate Christmas trees, exchange gifts, and enjoy festive meals. Churches hold special midnight mass services, and carolers spread cheer. It's a time of love, giving, and togetherness across the world."
  },
  {
    title: "Diwali",
    image: diwali,
    short: "Festival of Lights celebrated with joy and fireworks.",
    full: "Diwali, the Festival of Lights, is a major Hindu festival symbolizing the victory of light over darkness. Homes are decorated with lamps (diyas), rangolis, and lights. Families perform Lakshmi Puja, share sweets, and burst crackers. It's a five-day celebration filled with love, color, and light."
  },
  {
    title: "Durga Puja",
    image: durgapuja,
    short: "Celebrates goddess Durga’s victory over evil.",
    full: "Durga Puja is one of the biggest festivals in Eastern India, especially West Bengal. It celebrates the victory of Goddess Durga over Mahishasura. Idols are beautifully crafted, pujas are performed for nine days, and cultural programs are held. It ends with a grand procession and idol immersion (Visarjan)."
  },
  {
    title: "Eid",
    image: eid,
    short: "Festival marking the end of Ramadan fasting.",
    full: "Eid al-Fitr is celebrated after the month-long fasting during Ramadan. The day begins with a special prayer at the mosque, followed by feasting and visiting loved ones. Traditional dishes like biryani, kebabs, and sheer kurma are enjoyed. It's a day of gratitude, charity (Zakat), and joy."
  },
  {
    title: "Gudi Padwa",
    image: gudi,
    short: "Maharashtrian New Year celebration.",
    full: "Gudi Padwa marks the beginning of the new year for Maharashtrians and Konkanis. Families raise a 'Gudi'—a silk cloth tied to a bamboo stick topped with a metal pot, symbolizing victory. Special dishes like puran poli and shrikhand are prepared. Homes are cleaned and decorated with rangoli."
  },
  {
    title: "Navratri",
    image: navratri,
    short: "Nine-night festival honoring divine feminine.",
    full: "Navratri is a nine-day Hindu festival dedicated to Goddess Durga and her various forms. Each day is associated with a different avatar and color. Devotees fast, pray, and celebrate with Garba and Dandiya dances at night. The festival signifies the triumph of good over evil and spiritual renewal."
  },
  {
    title: "Pongal",
    image: pongal,
    short: "Harvest festival celebrated in South India.",
    full: "Pongal is a Tamil harvest festival that lasts for four days. It is dedicated to the Sun God and celebrates nature, livestock, and farmers. The main ritual includes boiling fresh rice in milk and letting it overflow to symbolize abundance. Houses are decorated, and kolams (rangoli) are drawn."
  },
  {
    title: "Raksha Bandhan",
    image: raksha,
    short: "Celebrating the bond between brothers and sisters.",
    full: "Raksha Bandhan is celebrated by sisters tying a rakhi (decorative thread) on their brothers’ wrists. It signifies protection, love, and commitment. Brothers give gifts in return and vow to protect their sisters. It's a heartfelt celebration of the unique bond between siblings, irrespective of distance or age."
  },
  {
    title: "Varamahalakshmi",
    image: south,
    short: "South Indian festival to seek prosperity from Goddess Lakshmi.",
    full: "Varamahalakshmi Vratham is observed by women in South India to seek blessings from Goddess Lakshmi for prosperity, health, and family welfare. A decorated Kalash symbolizes the goddess. Devotees perform elaborate pujas and chant mantras. It is believed that worshipping Varamahalakshmi brings peace and wealth."
  },
  {
    title: "Chhath Puja",
    image: chath,
    short: "Devoted to the Sun God and Chhathi Maiya.",
    full: "Chhath Puja is a unique festival observed in Bihar, UP, and Jharkhand. Devotees offer prayers to the setting and rising sun over two days, standing in rivers or water bodies. It involves rigorous fasting, cleanliness, and strict discipline. Fruits, sweets, and 'Thekua' are offered to Surya Dev and Chhathi Maiya."
  }
];

const Home = () => {
  const [selectedFestival, setSelectedFestival] = useState(null);

  return (
    <div className="festival-section">
      <h2 className="section-title">Festivals</h2>
      <div className="festival-grid">
        {festivalData.map((festival, index) => (
          <div className="festival-card" key={index}>
            <img
              src={festival.image}
              alt={festival.title}
              className="festival-img"
            />
            <h3>{festival.title}</h3>
            <p>{festival.short}</p>
            <button
              className="read-more"
              onClick={() => setSelectedFestival(festival)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal for full description */}
      {selectedFestival && (
        <div className="modal-overlay" onClick={() => setSelectedFestival(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedFestival.title}</h2>
            <img src={selectedFestival.image} alt={selectedFestival.title} />
            <p>{selectedFestival.full}</p>
            <button className="close-btn" onClick={() => setSelectedFestival(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
