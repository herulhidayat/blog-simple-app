import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface FormSummaryCategoryProps {
  data: any
  callbackNext: (data: any) => void
  callbackBack: () => void
}

export default function FormSummaryCategory({
  data,
  callbackNext,
  callbackBack
}: FormSummaryCategoryProps) {
  const router = useRouter()
  const schema = yup.object().shape({
    summary: yup.string().required('Title is required'),
    category: yup.string().required('Author is required')
  });

  const [formModel] = useState<any>({
    summary: "",
    category: ""
  });

  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formModel
  });
  
  const handleSubmitForm = (data: any) => {
    callbackNext(data)
  }

  useEffect(() => {
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if(formModel.hasOwnProperty(key)) {
          setValue(key, value)
        }
      }
    }
  }, [data])

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-1/2 max-md:w-full">
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-2">
                <label htmlFor="summary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Summary</label>
                <input {...register('summary')} type="" id="summary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Masukkan summary" required />
              </div>
              <div className="col-span-2">
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <input {...register('category')} type="" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Masukkan category" required />
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={() => callbackBack()} className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700">Back</button>
              <button type="submit" className="text-gray-800 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}