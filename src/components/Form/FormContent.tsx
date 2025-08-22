import { useEffect, useState } from "react";

interface IFormContent {
    data: any
    callbackNext: () => void
    callbackBack: () => void
    callbackData: (data: any) => void
}

export default function FormContent({data,callbackBack,callbackNext,callbackData}:IFormContent) {
    return(
        <>
            <div className="flex items-center justify-center mt-8">
                <div className="w-1/2 max-md:w-full flex flex-col gap-8">
                    Form Content
                    <div className="flex justify-between">
                        <button onClick={() => callbackBack()} className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700">Back</button>
                        <button onClick={() => callbackNext()} className="text-gray-800 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}