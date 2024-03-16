"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import py from "@/public/images/python.png";
import { Clock, Home } from "lucide-react";

export default function ClassLists() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent>
                  <Image
                    src={py}
                    alt=""
                    width={1200}
                    height={800}
                    className="w-full h-[190px] rounded-xl"
                    loading="lazy"
                  />
                </CardContent>
                <CardHeader className="text-center">
                  <CardTitle>Kelas Python</CardTitle>
                  <CardDescription className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Clock className="w-2 h-2" />
                      13.00 - 15.00
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Home className="w-2 h-2" />
                      Labor 102
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="">
                  <Button className="w-full" variant="outline">
                    Daftar Sekarang
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
