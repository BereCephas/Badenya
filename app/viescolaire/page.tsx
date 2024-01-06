"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import MouvementCard from "../../components/MouvementCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import config from "../../config";
interface Mouvement {
  id: number;
  name: string;
  description: string;
  presidentName: string;
  profilePicture: string;
}

export default function Viescolaire() {
  const [mouvements, setMouvements] = useState<Mouvement[]>([]);

  useEffect(() => {
    const supabaseUrl = "https://ojevxladuhglfdtmqeaq.supabase.co";
    const supabaseKey = config.supabaseKey;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const fetchMouvements = async () => {
      try {
        const { data, error } = await supabase.from("Mouvement").select("*");

        if (error) {
          console.error("Error fetching mouvements:", error.message);
        } else {
          // Mise à jour de l'état avec les données récupérées
          console.log(data);
          setMouvements(data);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    };

    fetchMouvements();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Les différents mouvements présents à Badenya
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Apprenez comment développer votre entreprise avec nos conseils
              d`&apos;`experts.
            </p>
          </div>
          {mouvements.map((mouvement) => (
            <MouvementCard
              key={mouvement.id}
              name={mouvement.name}
              description={mouvement.description}
              presidentName={mouvement.presidentName}
              profilePicture={mouvement.profilePicture}
              date={""}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
