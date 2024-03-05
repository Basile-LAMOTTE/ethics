"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { parseForm } from "@/components/parseForme";
import { Meteors } from "@/components/ui/meteors";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formObject = parseForm(e);
    const response = await fetch("http://localhost:8080/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const blob = await response.blob();
    setImage(URL.createObjectURL(blob));
  };

  return (
    <div className="relative">
      <div className="h-[60rem] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] rounded-md bg-black/[0.96] antialiased relative overflow-hidden flex flex-col justify-center items-center space-y-8">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className="text-4xl sm:text-7xl font-extrabold relative z-20 bg-clip-text py-8 tracking-widest">
          Fuze
          <span className="text-black text-4xl font-bold me-2 px-2.5 py-0.5 rounded dark:bg-white ms-2 relative top-[-0.15em] tracking-normal">
            ai
          </span>
        </h1>

        <div className="relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-sky-200 to-sky-600 transform scale-[0.8] rounded-full blur-3xl" />
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black z-10 relative overflow-hidden">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Welcome to Fuze.ai
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Generate images depending of the following parameters.
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex space-x-2">
                <Select name="param1">
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Parameter 1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cats">Cats</SelectItem>
                    <SelectItem value="dogs">Dogs</SelectItem>
                    <SelectItem value="character-icons">Heros</SelectItem>
                  </SelectContent>
                </Select>
                <Select name="param2">
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Parameter 2" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cats">Cats</SelectItem>
                    <SelectItem value="dogs">Dogs</SelectItem>
                    <SelectItem value="character-icons">Heros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-2 pt-2">
                <Select name="param3">
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Parameter 3" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cats">Cats</SelectItem>
                    <SelectItem value="dogs">Dogs</SelectItem>
                    <SelectItem value="character-icons">Heros</SelectItem>
                  </SelectContent>
                </Select>
                <Select name="param4">
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Parameter 4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cats">Cats</SelectItem>
                    <SelectItem value="dogs">Dogs</SelectItem>
                    <SelectItem value="character-icons">Heros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Drawer>
                <DrawerTrigger
                  className="mt-4 overflow-hidden bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Let's go !
                </DrawerTrigger>
                <BottomGradient />
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerDescription className="flex justify-center items-center">
                      <img src={image} alt="Logo" />;
                    </DrawerDescription>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
