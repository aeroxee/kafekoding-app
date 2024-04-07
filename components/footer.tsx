import logo from "@/public/logo.png";
import { Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center flex-col gap-3">
          <Image
            src={logo}
            alt="kafekoding"
            width={1200}
            height={800}
            className="w-[74px] h-[71px]"
          />
          <h5 className="text-sky-600 font-extrabold text-2xl">Kafe Koding</h5>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          <span className="text-sm font-light">
            kafekodingstmikip@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Instagram className="w-5 h-5" />
          <span className="text-sm font-light">Kafe Koding</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <span className="text-sm font-light">+6283189726077</span>
        </div>
      </div>

      <div className="mt-3 w-[50%] mx-auto space-y-5">
        <p className="text-center font-extralight text-sm">
          Universitas Metamedia, Jl. kahtib Sulaiman Kel. no.1 RT.004/RW.006
          Lolong Belanti, Kec. Padang Utara, Kota Padang.
        </p>
        <p className="text-center font-light text-sm">
          Made with ❤️ in Indonesia
        </p>
      </div>
    </footer>
  );
}
