"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import config from "../config"; // Import the configuration file
import Link from "next/link"; // Import Link directly from next/link

export default function Searchfield() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const supabaseUrl = "https://ojevxladuhglfdtmqeaq.supabase.co";
      const supabaseKey = config.supabaseKey;
      const supabase = createClient(supabaseUrl, supabaseKey);

      let { data: articlesData, error } = await supabase
        .from("articles")
        .select("*");
      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        console.log(articlesData);
        setArticles(articlesData);
      }
    };
    console.log("Searchfield component:", Searchfield);

    fetchArticles();
  }, []);

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={articles.map((option) => ({
          text: option.title,
          link: `/blog/articles/${option.id}`, // Adjust the link according to your URL structure
        }))}
        getOptionLabel={(option) => option.text}
        renderInput={(params) => <TextField {...params} label="rechercher" />}
        renderOption={(props, option) => (
          <li {...props}>
            <Link href={option.link} legacyBehavior>
              <a>{option.text}</a>
            </Link>
          </li>
        )}
      />
    </Stack>
  );
}
