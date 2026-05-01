"use client";

import { useRef } from "react";
import Script from "next/script";

type NaverMapObject = unknown;

type NaverInfoWindow = {
  getMap: () => unknown;
  close: () => void;
  open: (map: NaverMapObject, marker: unknown) => void;
};

type NaverMaps = {
  LatLng: new (lat: number, lng: number) => unknown;
  Map: new (id: string, options: Record<string, unknown>) => NaverMapObject;
  Marker: new (options: Record<string, unknown>) => unknown;
  InfoWindow: new (options: Record<string, unknown>) => NaverInfoWindow;
  Point: new (x: number, y: number) => unknown;
  Position: {
    TOP_RIGHT: unknown;
  };
  Event: {
    addListener: (target: unknown, eventName: string, handler: () => void) => void;
  };
};

const LOCATIONS = [
  { name: "Blue Bottle Seongsu", lat: 37.5448, lng: 127.0446, type: "bluebottle" },
  { name: "Blue Bottle Samcheong", lat: 37.5807, lng: 126.9819, type: "bluebottle" },
  { name: "Blue Bottle Gwanghwamun", lat: 37.5693, lng: 126.9787, type: "bluebottle" },
  { name: "Starbucks Seoul Wave Art Center", lat: 37.5218, lng: 127.0116, type: "starbucks" },
  { name: "Starbucks Famille Station", lat: 37.5049, lng: 127.0049, type: "starbucks" },
  { name: "Starbucks Kyungdong 1960", lat: 37.5782, lng: 127.0373, type: "starbucks" },
  { name: "Starbucks Daechung Station", lat: 37.4937, lng: 127.0736, type: "starbucks" },
  { name: "Blue Bottle Hannam", lat: 37.5348, lng: 127.0016, type: "bluebottle" },
];

export default function NaverMap() {
  const mapRef = useRef<NaverMapObject | null>(null);

  const initMap = () => {
    const naver = window.naver;
    if (!naver) return;

    const mapOptions = {
      center: new naver.maps.LatLng(37.5802, 127.0484),
      zoom: 12,
      minZoom: 10,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map("map", mapOptions);
    mapRef.current = map;

    LOCATIONS.forEach((loc) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(loc.lat, loc.lng),
        map: map,
        title: loc.name,
        icon: {
          content: `
            <div style="cursor:pointer; display:flex; flex-direction:column; align-items:center;">
              <div style="
                background: ${loc.type === 'bluebottle' ? '#00aeef' : '#00704a'};
                color: white;
                padding: 4px 8px;
                border-radius: 20px;
                font-size: 10px;
                font-weight: bold;
                white-space: nowrap;
                border: 2px solid white;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                margin-bottom: 4px;
              ">
                ${loc.type === 'bluebottle' ? 'Blue Bottle' : 'Starbucks'}
              </div>
              <div style="
                width: 10px;
                height: 10px;
                background: ${loc.type === 'bluebottle' ? '#00aeef' : '#00704a'};
                border: 2px solid white;
                border-radius: 50%;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              "></div>
            </div>
          `,
          anchor: new naver.maps.Point(40, 35),
        }
      });

      const infoWindow = new naver.maps.InfoWindow({
        content: `
          <div style="padding:15px; min-width:150px; border-radius:12px; font-family: sans-serif;">
            <h4 style="margin:0 0 5px 0; font-size:14px; font-weight:900;">${loc.name}</h4>
            <p style="margin:0; font-size:12px; color:#666;">ソウル, 韓国</p>
          </div>
        `,
        borderWidth: 0,
        backgroundColor: "transparent",
        disableAnchor: true,
        pixelOffset: new naver.maps.Point(0, -10),
      });

      naver.maps.Event.addListener(marker, "click", () => {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(map, marker);
        }
      });
    });
  };

  return (
    <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        onReady={initMap}
      />
      <div id="map" className="w-full h-full" />
      <div className="absolute bottom-6 left-6 z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 max-w-[200px]">
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

declare global {
  interface Window {
    naver?: {
      maps: NaverMaps;
    };
  }
}
