import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js"; // Assurez-vous d'installer le paquet Supabase
import Image from "next/image";
import config from "../config";

const MouvementCard = ({
  name,
  description,
  presidentName,
  profilePicture,
  date,
}) => {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2023-01-01T12:00:00Z" className="text-gray-500">
            {date}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              {name}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src={profilePicture}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                {presidentName}
              </a>
            </p>
            <p className="text-gray-600">President</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MouvementCard;
