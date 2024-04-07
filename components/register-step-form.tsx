"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";

export default function RegisterStepForm() {
  const [step, setStep] = useState<number>(0);

  return (
    <main className="flex">
      <div className="w-[445px] bg-sky-800 min-h-screen p-16">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center flex-col gap-3">
            <Image src={logo} alt="kafekoding" width={70} height={70} />
            <span className="text-xl font-bold text-white">Kafe Koding</span>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl text-white font-bold">Tahap 1</h4>
          <p className="text-xs font-light text-white">
            Masukkan informasi pribadi Anda
          </p>
        </div>
        <div>
          <ol className="list-decimal text-white">
            <li>Buat Akun Anda</li>
            <li>Status Keanggotaan</li>
            <li>Pilih kelas Anda</li>
            <li>Informasi</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
