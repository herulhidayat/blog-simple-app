'use client'

import StepFrom from "@/components/Features/StepFrom";
import FormContent from "@/components/Form/FormContent";
import FormMetadata from "@/components/Form/FormMetadata";
import FormSummaryCategory from "@/components/Form/FormSummaryCategory";
import Hero from "@/components/Header/Hero";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function AddPost() {
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState<number>(1)
	const step = ["Infomasi Data", "Konfigurasi Data", "Masukkan Data", "Selesai"]

  const [dataMain, setDataMain] = useState<any>({});

  const handleCallbackFormConfig = useCallback((data: any, next: number) => {
    setDataMain((prev: any) => ({ ...prev, ...data }));
    setCurrentStep(next);
  }, []);

  const handleCallbackRow = useCallback((data: any) => {
    if(data?.isEdit) {
      setDataMain((prev: any) => ({ 
        ...prev, 
        value_row: prev?.value_row?.map((item: any, i: number) => i === data?.dataIndex ? data?.row : item) 
      }));
    } else {
      setDataMain((prev: any) => ({ 
        ...prev, 
        value_row: Boolean(prev?.value_row) ? [...prev?.value_row, data?.row] : [data?.row]
      }));
    }
  }, []);

  const handleSaveData = () => {
    console.log(dataMain);
  }


	return (
		<>
        <Hero
          title="Create New Post"
          description="Please fill in the form step by step to create a new blog post."
        />

        <Container>
          <div className="flex flex-col gap-4 py-10">
            <StepFrom stepData={step} currentStep={currentStep} />
            {currentStep === 1 && (
              <FormMetadata
                data={dataMain}
                callbackNext={(data: any) => handleCallbackFormConfig(data, 2)}
              />
            )}
            {currentStep === 2 && (
              <FormSummaryCategory
                data={dataMain}
                callbackNext={(data: any) => handleCallbackFormConfig(data, 3)}
                callbackBack={() => setCurrentStep(1)}
              />
            )}
            {currentStep === 3 && (
              <FormContent
                data={dataMain}
                callbackNext={() => handleSaveData()}
                callbackBack={() => setCurrentStep(2)}
                callbackData={handleCallbackRow}
              />
            )}
            {currentStep === 4 && (
              <>
                <div className="mt-8 flex flex-col gap-5">
                  {"Preview Data"}
                  <div className="flex justify-center">
                    <button onClick={() => router.push('/datasets')} className="text-gray-800 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Finish</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </Container>

		</>
	)
}