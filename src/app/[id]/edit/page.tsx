'use client'

import StepFrom from "@/components/Features/StepFrom";
import FormContent from "@/components/Form/FormContent";
import FormMetadata from "@/components/Form/FormMetadata";
import FormPreview from "@/components/Form/FormPreview";
import FormSummaryCategory from "@/components/Form/FormSummaryCategory";
import Hero from "@/components/Header/Hero";
import { setDataLocal } from "@/store/reducers/app";
import { Container } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddPost() {
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState<number>(1)
	const step = ["Metadata", "Summary & Category", "Content", "Preview", "Finish"]
  const dispatch = useDispatch();
  const { dataLocal } = useSelector((state: any) => state.app);
  const params = useParams();

  const [dataMain, setDataMain] = useState<any>({});

  const handleCallbackFormConfig = useCallback((data: any, next: number) => {
    setDataMain((prev: any) => ({ ...prev, ...data }));
    setCurrentStep(next);
  }, []);

  const handleSaveData = () => {
    if (dataMain) {
      dispatch(setDataLocal([
        dataMain, 
        ...dataLocal?.filter((item: any) => item.id !== parseInt(params.id as string))
      ]));
      setTimeout(() => {
        setCurrentStep(5);
      }, 1000);
    }
  }

  useEffect(() => {
    if (dataLocal) {
      setDataMain(dataLocal?.find((item: any) => item.id === parseInt(params.id as string)));
    }
  }, [dataLocal]);


	return (
		<>
        <Hero
          title="Edit Post"
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
                callbackBack={() => setCurrentStep(2)}
                callbackNext={(data: any) => handleCallbackFormConfig(data, 4)}
              />
            )}
            {currentStep === 4 && (
              <FormPreview
                data={dataMain}
                callbackNext={() => handleSaveData()}
                callbackBack={() => setCurrentStep(3)}
              />
            )}
            {currentStep === 5 && (
              <>
                <div className="mt-8 flex flex-col gap-5">
                  <div className="flex flex-col justify-center items-center gap-5">
                      <div className="flex flex-col gap-2 text-center">
                          <span className="text-2xl font-medium">Data has been saved!</span>
                          <span className="text-lg text-gray-500">Click finish to back to home</span>
                      </div>
                  </div>
                  <div className="flex justify-center">
                    <button onClick={() => router.push('/')} className="text-gray-800 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Finish</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </Container>

		</>
	)
}