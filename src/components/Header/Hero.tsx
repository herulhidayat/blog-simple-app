import { Container, Skeleton } from "@mui/material";
import React from "react";

interface HeroProps {
  title: string;
  description: string;
  isWebTitle?: boolean;
  children?: React.ReactNode;
  isLoading?: boolean;
}

export default function Hero({ title, description, children, isWebTitle = true, isLoading = false }: HeroProps) {
  return (
    <div className="flex h-full w-full justify-center bg-gradient-to-b from-white to-primary-50 dark:from-zinc-800 dark:to-zinc-900 border-b dark:border-b-zinc-800 relative">
      <Container sx={{ height: "100%" }}>
        <div>
          <div className="md:max-lg:-ml-4.5 sticky inset-x-0 top-14 z-20 -ml-3 flex lg:hidden"></div>
          <div className="space-y-6 py-12 xl:w-full">
            {isWebTitle && (
              <div className="relative flex justify-between">
                <span className="text-base font-semibold uppercase text-primary-600 dark:text-primary-500">
                  Blog Portal App
                </span>
              </div>
            )}
            <div className="space-y-3">
              <h2 className="text-black dark:text-white text-4xl font-bold">
                {isLoading ? (
                  <Skeleton height={40} width={500}/>
                ) : title}
              </h2>
              <p className="max-xl:max-w-prose xl:w-2/3 text-dim text-gray-500 dark:text-gray-400">
                {isLoading ? (
                  <Skeleton height={20} width={500}/>
                ) : description}
              </p>
            </div>
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
