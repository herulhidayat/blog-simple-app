'use client'

import { isTouchDevice, MenuButtonAddTable, MenuButtonBlockquote, MenuButtonBold, MenuButtonBulletedList, MenuButtonCode, MenuButtonCodeBlock, MenuButtonEditLink, MenuButtonHighlightColor, MenuButtonHorizontalRule, MenuButtonImageUpload, MenuButtonIndent, MenuButtonItalic, MenuButtonOrderedList, MenuButtonRedo, MenuButtonRemoveFormatting, MenuButtonStrikethrough, MenuButtonSubscript, MenuButtonSuperscript, MenuButtonTaskList, MenuButtonTextColor, MenuButtonUnderline, MenuButtonUndo, MenuButtonUnindent, MenuControlsContainer, MenuDivider, MenuSelectFontFamily, MenuSelectFontSize, MenuSelectHeading, MenuSelectTextAlign, RichTextEditor, RichTextEditorRef } from "mui-tiptap";
import { useEffect, useRef, useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import { useTheme } from "@mui/material";

interface IFormContent {
  data: any;
  callbackNext: (data: any) => void;
  callbackBack: () => void;
}

export default function FormContent({
  data,
  callbackBack,
  callbackNext,
}: IFormContent) {
  const rteRef = useRef<RichTextEditorRef>(null);
  const theme = useTheme();
  return (
    <>
      <div className="flex items-center justify-center mt-8">
        <div className="w-full flex flex-col gap-8">
          <div className="bg-zinc-50 dark:bg-zinc-900">
            <RichTextEditor
              ref={rteRef}
              extensions={[StarterKit]}
              content={data.content ?? ""}
              immediatelyRender={true}
              shouldRerenderOnTransaction={false}
              renderControls={() => (
                <MenuControlsContainer>
                  <MenuSelectHeading />
                  <MenuDivider />
                  <MenuButtonBold />
                  <MenuButtonItalic />
                  <MenuButtonUnderline />
                  <MenuButtonStrikethrough />
                  <MenuDivider />
                  <MenuButtonEditLink />
                  <MenuDivider />
                  <MenuButtonOrderedList />
                  <MenuButtonBulletedList />
                  {isTouchDevice() && (
                    <>
                      <MenuButtonIndent />
                      <MenuButtonUnindent />
                    </>
                  )}
                  <MenuDivider />
                  <MenuButtonBlockquote />
                  <MenuDivider />
                  <MenuButtonCode />
                  <MenuButtonCodeBlock />
                  <MenuDivider />
                  <MenuButtonHorizontalRule />
                  <MenuDivider />
                  <MenuButtonRemoveFormatting />
                  <MenuDivider />
                  <MenuButtonUndo />
                  <MenuButtonRedo />
                </MenuControlsContainer>
              )}
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => callbackBack()}
              className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              Back
            </button>
            <button
              onClick={() => {
                callbackNext({
                  content: rteRef.current?.editor?.getHTML() ?? "",
                })
              }}
              className="text-gray-800 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
