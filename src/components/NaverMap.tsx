"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamic import for Leaflet to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const LOCATIONS = [
  // Blue Bottle
  { name: "Blue Bottle Seongsu", lat: 37.5448, lng: 127.0446, type: "bluebottle" },
  { name: "Blue Bottle Samcheong", lat: 37.5807, lng: 126.9819, type: "bluebottle" },
  { name: "Blue Bottle Gwanghwamun", lat: 37.5693, lng: 126.9787, type: "bluebottle" },
  { name: "Blue Bottle Hannam", lat: 37.5348, lng: 127.0016, type: "bluebottle" },
  { name: "Blue Bottle Yeouido (The Hyundai)", lat: 37.5259, lng: 126.9284, type: "bluebottle" },
  { name: "Blue Bottle Apgujeong", lat: 37.5265, lng: 127.0322, type: "bluebottle" },
  { name: "Blue Bottle Jamsil (Lotte World Tower)", lat: 37.5133, lng: 127.1028, type: "bluebottle" },
  { name: "Blue Bottle Myeongdong", lat: 37.5642, lng: 126.9845, type: "bluebottle" },

  // Starbucks (Special/Notable Locations)
  { name: "Starbucks Seoul Wave Art Center", lat: 37.5218, lng: 127.0116, type: "starbucks" },
  { name: "Starbucks Famille Station", lat: 37.5049, lng: 127.0049, type: "starbucks" },
  { name: "Starbucks Kyungdong 1960", lat: 37.5782, lng: 127.0373, type: "starbucks" },
  { name: "Starbucks Mangwon", lat: 37.5562, lng: 126.9103, type: "starbucks" },
  { name: "Starbucks Myeongdong Central", lat: 37.5645, lng: 126.9842, type: "starbucks" },
  { name: "Starbucks Gwanghwamun", lat: 37.5710, lng: 126.9768, type: "starbucks" },
  { name: "Starbucks Insa-dong", lat: 37.5744, lng: 126.9867, type: "starbucks" },
  { name: "Starbucks Gangnam Station", lat: 37.4979, lng: 127.0276, type: "starbucks" },
  { name: "Starbucks Hongdae Station", lat: 37.5575, lng: 126.9245, type: "starbucks" },
  { name: "Starbucks Ewha Womans Univ.", lat: 37.5583, lng: 126.9458, type: "starbucks" },
  { name: "Starbucks Cheongnyangni Station", lat: 37.5802, lng: 127.0484, type: "starbucks" },
  { name: "Starbucks Dongdaemun", lat: 37.5709, lng: 127.0078, type: "starbucks" },
  { name: "Starbucks Lotte World Mall", lat: 37.5135, lng: 127.1035, type: "starbucks" },
  { name: "Starbucks Yeouido Park", lat: 37.5244, lng: 126.9246, type: "starbucks" },
  { name: "Starbucks Seongsu Station", lat: 37.5445, lng: 127.0567, type: "starbucks" },
];

export default function NaverMap() {
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    // Load Leaflet on client side to get the Icon object
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  if (!L) return <div className="w-full h-full bg-gray-100 animate-pulse rounded-[2rem]" />;

  // Fix default marker icon issue in Leaflet + Next.js
  const starbucksIcon = L.divIcon({
    className: "custom-icon",
    html: `<div style="background: #00704a; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });

  const bluebottleIcon = L.divIcon({
    className: "custom-icon",
    html: `<div style="background: #00aeef; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });

  return (
    <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
      <MapContainer
        center={[37.5802, 127.0484]} // Cheongnyangni Station
        zoom={12}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {LOCATIONS.map((loc) => (
          <Marker
            key={loc.name}
            position={[loc.lat, loc.lng]}
            icon={loc.type === "bluebottle" ? bluebottleIcon : starbucksIcon}
          >
            <Popup>
              <div className="p-1">
                <h4 className="font-black text-sm m-0">{loc.name}</h4>
                <p className="text-xs text-gray-500 m-0 mt-1">ソウル, 韓国</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="absolute bottom-6 left-6 z-[1000] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 max-w-[200px]">
        <h4 className="font-black text-sm mb-3 text-gray-800">カフェガイド</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00704a]"></div>
            <span className="text-xs font-bold text-gray-600">スターバックス</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00aeef]"></div>
            <span className="text-xs font-bold text-gray-600">ブルーボトル</span>
          </div>
        </div>
      </div>
    </div>
  );
}
