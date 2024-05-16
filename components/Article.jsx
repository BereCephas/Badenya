"use client";

import { createClient } from "@supabase/supabase-js";
import config from "../config";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Article({ id }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const supabaseUrl = "https://ojevxladuhglfdtmqeaq.supabase.co";
      const supabaseKey = config.supabaseKey;
      const supabase = createClient(supabaseUrl, supabaseKey);

      try {
        const { data, error } = await supabase
          .from("articles")
          .select()
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching article:", error);
        } else {
          setArticle(data);
        }
      } catch (error) {
        console.error("Error fetching article:", error.message);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(article.created_at).toLocaleDateString("fr-FR");

  return (
    <>
      <div className="h-full w-full">
        <div className="banner h-[50vh]">
          <img
            src={article.cover_img}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full px-4 sm:px-14 xl:px-28 gap-5 pt-10 flex flex-col md:flex-row justify-between">
          <h1 className="text-3xl font-extrabold">{article.title}</h1>
          <p>{formattedDate}</p>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="w-full px-4 sm:px-14 xl:px-28 gap-5 pt-10">
          <p>{article.content}</p>
        </div>

        <div className="px-4 sm:px-14 xl:px-28 pb-10 pt-10">
          <button
            type="button"
            className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
          >
            <svg
              className="w-5 h-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <a href="/blog">Retour</a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
