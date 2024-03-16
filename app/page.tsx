import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

import ClassLists from "@/components/class-lists";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import banner from "@/public/Programmer-cuate 1.png";
import rectangle1 from "@/public/Rectangle 35.png";
import rectangle2 from "@/public/Rectangle 36.png";
import rectangle3 from "@/public/Rectangle 37.png";
import rectangle4 from "@/public/Rectangle 38.png";
import vector from "@/public/Vector 18.svg";
import laptop from "@/public/bg.jpg";

export default async function Home() {
  const buffer = await fs.readFile("./public/Programmer-cuate 1.png");
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <>
      <header className="w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between pt-[120px] md:pt-0 px-4 md:px-16 lg:px-32 mx-auto">
          <div className="space-y-4 text-center md:text-start">
            <h1 className="font-extrabold text-4xl lg:text-6xl text-sky-700">
              Selamat Datang di Kafe Koding
            </h1>
            <p className="font-normal text-sm md:text-lg">
              Kafe Koding merupakan sebuah komunitas belajar yang bergerak di
              bidang IT dan juga tempat sharing ilmu programing dan seputar
              dunia IT.
            </p>
          </div>
          <Image
            src={banner}
            alt="banner"
            width={1200}
            height={800}
            loading="lazy"
            placeholder="blur"
            blurDataURL={base64}
            className="w-[471px] h-[471px]"
          />
        </div>
      </header>

      {/* About */}
      <Container>
        <section id="about" className="pt-[70px]">
          <div className="text-center mb-5">
            <h2 className="text-sky-600 font-extrabold text-2xl">
              Tentang Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="grid grid-cols-2 gap-2">
              <Image
                src={rectangle1}
                alt=""
                width={1200}
                height={800}
                className="w-full h-[190px]"
                loading="lazy"
              />
              <Image
                src={rectangle2}
                alt=""
                width={1200}
                height={800}
                className="w-full h-[190px]"
                loading="lazy"
              />
              <Image
                src={rectangle3}
                alt=""
                width={1200}
                height={800}
                className="w-full h-[190px]"
                loading="lazy"
              />
              <Image
                src={rectangle4}
                alt=""
                width={1200}
                height={800}
                className="w-full h-[190px]"
                loading="lazy"
              />
            </div>
            <div className="space-y-5">
              <p>
                Kafe koding merupakan sebuah komunitas belajar yang bergerak
                dibidang IT, berdiri pada tanggal 1 Agustus 2013
              </p>
              <p>
                Tujuan dibentuknya komunitas ini ialah dilandasi dengan
                keinginan untuk berbagi ilmu bagi masyarakat ekonomi rendah dan
                masyarakat yang putus sekolah
              </p>
              <p>
                Kami menerima siapapun yang ingin belajar bersama kami dalam
                mengasah kemampuan softskill dibidang IT hingga siap untuk dunia
                kerja
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* Vector */}
      <section id="vector" className="relative mt-24 pt-[70px]">
        <Image
          src={vector}
          alt=""
          width={1200}
          height={800}
          className="w-full h-auto"
          loading="lazy"
        />
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Container>
            <div className="space-y-9">
              <div className="flex items-center justify-between">
                <div className="space-y-5 md:w-[473px]">
                  <h3 className="text-sky-700 font-extrabold text-4xl capitalize">
                    Satu platform banyak solusi
                  </h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam culpa cum in, aspernatur consequatur illum animi
                    vitae id quibusdam harum minus sequi quisquam, recusandae
                    rem optio et reiciendis accusamus consectetur!
                  </p>
                </div>

                <Card className="md:w-[473px]">
                  <CardHeader>
                    <CardTitle>Kelas Diskusi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quis accusamus ipsam autem culpa in impedit
                    consequuntur dicta omnis voluptate, doloremque facilis eos
                    architecto quos beatae, eligendi fugit excepturi molestiae!
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center justify-center">
                <Card className="md:w-[473px]">
                  <CardHeader>
                    <CardTitle>Explorasi Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quis accusamus ipsam autem culpa in impedit
                    consequuntur dicta omnis voluptate, doloremque facilis eos
                    architecto quos beatae, eligendi fugit excepturi molestiae!
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-start">
                <Card className="md:w-[473px]">
                  <CardHeader>
                    <CardTitle>Explorasi Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quis accusamus ipsam autem culpa in impedit
                    consequuntur dicta omnis voluptate, doloremque facilis eos
                    architecto quos beatae, eligendi fugit excepturi molestiae!
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Show case */}
      <Container>
        <section id="show-case" className="pt-[70px]">
          <div className="text-center mb-5">
            <h2 className="text-sky-600 font-extrabold text-2xl">Show Case</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-3 space-y-3">
                <Image
                  src={laptop}
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
                <p className="capitalize font-extrabold">
                  Research aplikasi line dengan case study bagaimana cara
                  mengingkatkan user
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="link">UI/UX Design</Button>
                <Button>Lihat</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-3 space-y-3">
                <Image
                  src={laptop}
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
                <p className="capitalize font-extrabold">
                  Research aplikasi line dengan case study bagaimana cara
                  mengingkatkan user
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="link">UI/UX Design</Button>
                <Button>Lihat</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-3 space-y-3">
                <Image
                  src={laptop}
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
                <p className="capitalize font-extrabold">
                  Research aplikasi line dengan case study bagaimana cara
                  mengingkatkan user
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="link">UI/UX Design</Button>
                <Button>Lihat</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </Container>

      {/* Class list */}
      <Container>
        <section id="classLists" className="pt-[70px]">
          <div className="text-center mb-5">
            <h2 className="text-sky-600 font-extrabold text-2xl">
              Kelas Kafe Koding
            </h2>
          </div>

          <ClassLists />
        </section>
      </Container>

      {/* Articles / blog */}
      <Container>
        <section id="articles" className="pt-[70px]">
          <div className="mb-5">
            <h2 className="text-sky-600 font-extrabold text-2xl">
              Apa yang ingin kamu ketahui?
            </h2>
            <p className="text-xs">
              Baca beberapa artikel yang menarik dan terbaru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <Image
                src={laptop}
                alt=""
                width={1200}
                height={800}
                loading="lazy"
                className="w-full rounded-t-sm h-[200px]"
              />
              <CardContent className="space-y-3">
                <h4 className="text-lg font-extrabold capitalize">
                  13 Programming blog dan koding website untuk meningkatkan
                  skill kamu!
                </h4>
                <p className="text-xs font-extralight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum laudantium ratione quia sapiente iusto nisi...
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Baca Selengkapnya</Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src={laptop}
                alt=""
                width={1200}
                height={800}
                loading="lazy"
                className="w-full rounded-t-sm h-[200px]"
              />
              <CardContent className="space-y-3">
                <h4 className="text-lg font-extrabold capitalize">
                  13 Programming blog dan koding website untuk meningkatkan
                  skill kamu!
                </h4>
                <p className="text-xs font-extralight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum laudantium ratione quia sapiente iusto nisi...
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Baca Selengkapnya</Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src={laptop}
                alt=""
                width={1200}
                height={800}
                loading="lazy"
                className="w-full rounded-t-sm h-[200px]"
              />
              <CardContent className="space-y-3">
                <h4 className="text-lg font-extrabold capitalize">
                  13 Programming blog dan koding website untuk meningkatkan
                  skill kamu!
                </h4>
                <p className="text-xs font-extralight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum laudantium ratione quia sapiente iusto nisi...
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Baca Selengkapnya</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </Container>

      {/*  */}
      <section className="w-full h-[250px] bg-sky-300 flex items-center justify-center flex-col">
        <h1 className="text-2xl font-extrabold capitalize mb-4 text-center">
          Cobain Belajar Bareng Kafe Koding Sekarang!
        </h1>
        <div className="flex items-center justify-around w-[55%]">
          <Button>Daftar Kelas Sekarang</Button>
          <Button variant="outline">Saya Butuh Bantuan</Button>
        </div>
      </section>
      {/*  */}

      {/* Questions */}
      <Container>
        <section id="questions">
          <h1 className="text-center text-2xl font-extrabold mb-20">
            Pertanyaan yang sering ditanyakan!
          </h1>

          <Accordion
            type="single"
            collapsible
            className="w-full md:w-[60%] mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Bagaimana cara hosting website yang sudah dibuat?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, natus ipsam necessitatibus obcaecati magni dignissimos
                dicta id in consequatur voluptate?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Apa sih itu kafe koding?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                corporis illo recusandae sint? Quas explicabo, nisi dolorum
                quaerat nulla ad!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Apakah perbedaan hosting dan vps?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                fuga dignissimos consequatur repudiandae quidem, expedita facere
                atque laborum error magnam!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Bagaimana cara meningkatkan skill coding kita?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                fuga dignissimos consequatur repudiandae quidem, expedita facere
                atque laborum error magnam!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </Container>
      {/*  */}
    </>
  );
}
