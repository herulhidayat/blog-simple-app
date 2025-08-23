import { Container } from "@mui/material";
import StarterKit from "@tiptap/starter-kit";
import { RichTextReadOnly } from "mui-tiptap";
import Hero from "../Header/Hero";

interface IFormContent {
  data: any;
  callbackNext: () => void;
  callbackBack: () => void;
}

export default function FormPreview({ data, callbackNext, callbackBack }: IFormContent) {
  return (
    <>
      <Container>
        <div className="border border-zinc-800 rounded-2xl flex flex-col">
          <div className="rounded-t-2xl pt-3 bg-zinc-50 dark:bg-zinc-800">
            <Hero
              title={data.title}
              description={data.author}
            />
          </div>
          <div className="p-10">
            <RichTextReadOnly
              content={data.content}
              extensions={[StarterKit]}
              immediatelyRender={true}
              shouldRerenderOnTransaction={false}
            />
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={() => callbackBack()}
            className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            Back
          </button>
          <button
            onClick={() => callbackNext()}
            className="text-gray-800 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Next
          </button>
        </div>
      </Container>
    </>
  );
}
