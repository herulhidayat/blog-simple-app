import { useEffect, useState } from "react";

interface IFormSummaryCategory {
    data: any
    callbackNext: (v:any) => void
    callbackBack: () => void
}
export default function FormSummaryCategory({ data, callbackNext, callbackBack }: IFormSummaryCategory) {
    const [type, setType] = useState<"table" | "file">()
    const [dataField, setDataField] = useState<any>([]);

    const handleCallbackData = () => {
        const data = {
            column: dataField,
            data_table: type === "table" ? true : false,
            upload_file: type === "file" ? true : false
        }

        callbackNext(data)
    }

    useEffect(() => {
        if (data.column) {
            setDataField(data.column)
        }
        if (data.data_table || data.upload_file) {
            setType(data.data_table || !data.upload_file ? "table" : "file")
        }
    }, [data])
    return(
        <>
            <div className="flex items-center justify-center">
                <div className="w-1/2 max-md:w-full flex flex-col gap-8">
                    Form Summary Category
                    <div className="flex justify-between">
                        <button onClick={() => callbackBack()} className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700">Back</button>
                        <button onClick={handleCallbackData} className="text-gray-800 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
                    </div>
                </div>
            </div>

        </>
    )
}