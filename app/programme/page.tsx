"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Table from "@/components/Table";
export default function Programme() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return ( <>
     <Header />
    
      <div className=" h-[full] flex flex-col justify-center items-center  w-[100vw]">
        <div className="title">
          <h1 className="text-4xl underline underline-offset-8 text-left">
            Deuxieme trimestre
          </h1>
        </div>
        <div className="flex-grow">
          <Accordion open={open === 1} placeholder={"l"}>
            <AccordionHeader
              placeholder={"l"}
              onClick={() => handleOpen(1)}
              className="pt-20"
            >
              <h1 className="text-3xl text-left"> 1er cycle</h1>
            </AccordionHeader>
            <AccordionBody>
              <div className="h-full flex w-full justify-center items-center flex-col">
                <Table/>
 
              </div>
            
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} placeholder={"l"}>
            <AccordionHeader onClick={() => handleOpen(2)} placeholder={"l"}>
              <h1 className="text-3xl text-left"> 2nd cycle</h1>
            </AccordionHeader>
            <AccordionBody>
              <div className="h-full flex w-[95vw] justify-center items-center flex-col">
              <Table/>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} placeholder={"l"}>
            <AccordionHeader onClick={() => handleOpen(3)} placeholder={"l"}>
              <h1 className="text-3xl text-left">Programme des activites</h1>
            </AccordionHeader>
            <AccordionBody>
              <div className="h-full flex w-[95vw] justify-center items-center flex-col">
              <Table/>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>

    </>
  );
}
