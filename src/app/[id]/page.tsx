'use client';

import Hero from "@/components/Header/Hero";
import { Container } from "@mui/material";
import StarterKit from "@tiptap/starter-kit";
import { RichTextReadOnly } from "mui-tiptap";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function PostPage() {
  const { dataLocal } = useSelector((state: any) => state.app);
  const params = useParams();
  return (
    <>
      <Hero title={dataLocal?.find((item: any) => item.id === parseInt(params.id as string))?.title} description={dataLocal?.find((item: any) => item.id === parseInt(params.id as string))?.author} />
      <Container>
        <RichTextReadOnly
          content={dataLocal?.find((item: any) => item.id === parseInt(params.id as string))?.content}
          extensions={[StarterKit]}
          immediatelyRender={true}
          shouldRerenderOnTransaction={false}
        />
      </Container>
    </>
  );
}
