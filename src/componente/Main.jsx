import { Carousel } from "@material-tailwind/react";

export default function Main() {
  return (
    <Carousel
      style={{
        height: "93.4vh",
        backgroundColor: '#ea580c',
      }}
      loop={true} // Aktiviere die Endlosschleife
      autoplay={true} // Aktiviere das automatische Abspielen
      responsive={{
        // Passe die Anzahl der Slides pro Ansicht basierend auf der Bildschirmgröße an
        "640": {
          slidesPerView: 1, // Bei Bildschirmen mit einer Breite von weniger als 640px nur eine Slide anzeigen
        },
        "768": {
          slidesPerView: 2, // Bei Bildschirmen mit einer Breite von weniger als 768px zwei Slides anzeigen
        },
        "1024": {
          slidesPerView: 3, // Bei Bildschirmen mit einer Breite von weniger als 1024px drei Slides anzeigen
        },
      }}
    >
      
 <img style={{ marginTop: '270px' }}
        src="https://i.gifer.com/78og.gif"
        alt="image 4"
        className="w-600 object-cover mx-auto rounded-lg"
      />
       <img style={{ marginTop: '270px' }}
        src="https://media.contentapi.ea.com/content/dam/swgoh/common/articles/kit-reveal-jedi-knight-cal-kestis/whirndl-defense.gif"
        alt="image 4"
        className="w-600 object-cover mx-auto rounded-lg"
      />
       <img style={{ marginTop: '270px' }}
        src="https://i.gifer.com/15fp.gif"
        alt="image 4"
        className="w-600 object-cover mx-auto rounded-lg"
      />
      <img style={{ marginTop: '270px' }}
        src="https://wewillblogyoumusic.files.wordpress.com/2015/10/fifa.gif"
        alt="image 4"
        className="w-600 object-cover mx-auto rounded-lg"
      />
       <img style={{ marginTop: '270px' }}
        src="https://i.pinimg.com/originals/73/00/ba/7300ba34decf9956a85cf40b5b69ecee.gif"
        alt="image 4"
        className="w-600 object-cover mx-auto rounded-lg"
      />
      <img style={{ marginTop: '270px' }}
        src="https://gaming-cdn.com/images/products/9575/616x353/helldivers-2-pc-game-steam-europe-cover.jpg"
        alt="image 1"
        className="w-600 object-cover mx-auto rounded-lg"
      />
      <img style={{ marginTop: '270px' }}
        src="https://gaming-cdn.com/images/products/15086/616x353/horizon-forbidden-west-complete-edition-complete-edition-pc-game-steam-europe-cover.jpg"
        alt="image 2"
        className="w-600 object-cover mx-auto rounded-lg"
      />
      <img style={{ marginTop: '270px' }}
        src="https://gaming-cdn.com/images/products/442/616x353/minecraft-java-and-bedrock-edition-pc-game-cover.jpg"
        alt="image 3"
        className="w-600 object-cover mx-auto rounded-lg"
      />
      <img style={{ marginTop: '270px' }}
        src="https://rocketbeans-fan.de/gifs/GameTwo/TrantMichaRRage2G2_10F.gif"
        alt="image 4"
        className="w-600 object-cover mx-auto rounded-lg"
      />

    </Carousel>
  );
}
