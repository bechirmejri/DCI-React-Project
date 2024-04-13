import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import games from "../data/games.json";

const navigation = [
  { name: "Shop", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [selectedGames, setSelectedGames] = useState([]);
  
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleGameSelect = (gameId) => {
    const index = selectedGames.indexOf(gameId);
    if (index === -1) {
      setSelectedGames([...selectedGames, gameId]);
    } else {
      const updatedGames = [...selectedGames];
      updatedGames.splice(index, 1);
      setSelectedGames(updatedGames);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedGames.forEach((gameId) => {
      const game = games.find((g) => g.id === gameId);
      if (game) {
        totalPrice += game.price;
      }
    });
    return totalPrice;
  };

  const isGameSelected = (gameId) => {
    return selectedGames.includes(gameId);
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 shadow mb-8 fixed w-full z-10 top-0">
        {({ open }) => (
          <>
            {/* Navbar content */}
            {/* Your existing navbar content */}
          </>
        )}
      </Disclosure>
      {/* Render filtered games */}
      <div className="mt-20 mb-3 bg bg-lime-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div key={game.id} className="group rounded-lg overflow-hidden relative border border-green-600 shadow-md hover:shadow-lg ">
            <img
              src={`images/games/${game.image}.webp`}
              alt={game.title}
              className="w-full h-auto rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4 bg-gray-800 bg-opacity-20 absolute inset-0 flex flex-col justify-end">
              <h3 className="text-lg font-semibold text-white hover:text-green-500 transition-colors duration-300">{game.title}</h3>
              <h3 className="text-lg font-semibold text-white hover:text-green-500 transition-colors duration-300">{game.platforms}</h3>
              <h3 className="text-lg font-semibold text-white hover:text-green-500 transition-colors duration-300">{game.genre}</h3>
              <h3 className="text-lg font-semibold text-white hover:text-green-500 transition-colors duration-300">{game.price} Euro</h3>
              <button
                onClick={() => handleGameSelect(game.id)}
                className={classNames(
                  "absolute top-0 right-0 m-2 text-gray-400 hover:text-green-500",
                  isGameSelected(game.id) ? "text-red-500" : ""
                )}
              >
                <HeartIcon className="h-5 w-5 mr-1" />
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Total Price */}
      <div className="flex justify-center mb-4 mx-auto border-2 border-red-500 shadow-lg p-3 rounded-lg">
  <span className="text-lg font-semibold text-green-500">Total Price: {calculateTotalPrice().toFixed(2)} Euro</span>
</div>

    </>
  );
}
