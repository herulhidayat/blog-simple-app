'use client'

import { Button, Grid } from "@mui/material"
import PaginationComponent from "../Pagination/PaginationComponent"
import { useEffect, useState } from "react"
import Search from "../Form/Search"
import SelectStatic from "../Form/SelectStatic"
import { OPTIONS_SELECT_CATEGORY } from "../Config/options.config"
import { useRouter } from "next/navigation"

export default function DataList() {
  const [listedData, setListedData] = useState<{ title: string, authorName: string, category: string, summary: string, content: string}[]>([])
  const [pagination, setPagination] = useState<{ page: number, size: number }>({
    page: 1,
    size: 9
  })
  const [category, setCategory] = useState<string>('')
  const router = useRouter()

    const dummyData = [
        {
          "title": "The Future of Web Development",
          "authorName": "Khairul Hidayat",
          "category": "Tech",
          "summary": "An overview of upcoming trends in frontend development.",
          "content": "Web development continues to evolve rapidly with frameworks like React, Angular, and new AI-assisted tools shaping the future..."
        },
        {
          "title": "Minimalist Living: Finding Joy in Simplicity",
          "authorName": "Ayu Lestari",
          "category": "Lifestyle",
          "summary": "How minimalism can improve mental clarity and overall well-being.",
          "content": "Living with less allows us to focus on what truly matters. This blog explores practical steps to declutter life and embrace simplicity..."
        },
        {
          "title": "Startup Funding 101",
          "authorName": "Budi Santoso",
          "category": "Business",
          "summary": "A beginner’s guide to understanding startup funding rounds.",
          "content": "From seed funding to Series A, B, and beyond, this article explains how startups secure capital and what investors are looking for..."
        },
        {
          "title": "Mastering TypeScript for Scalable Apps",
          "authorName": "Khairul Hidayat",
          "category": "Tech",
          "summary": "Why TypeScript is becoming essential for modern frontend developers.",
          "content": "TypeScript provides strong typing, better tooling, and easier debugging. Learn how to integrate it into your next big project..."
        },
        {
          "title": "Healthy Eating on a Budget",
          "authorName": "Siti Nurhaliza",
          "category": "Lifestyle",
          "summary": "Tips for maintaining a healthy diet without overspending.",
          "content": "Eating healthy doesn’t have to be expensive. This blog shares meal prep strategies, smart shopping hacks, and affordable nutrition tips..."
        },
        {
          "title": "Remote Work: Building Productive Teams",
          "authorName": "Andi Pratama",
          "category": "Business",
          "summary": "Best practices for managing and collaborating in remote teams.",
          "content": "With the rise of remote work, leaders must adapt. Learn techniques for communication, collaboration, and maintaining team morale..."
        },
        {
          "title": "AI and the Future of Creative Design",
          "authorName": "Khairul Hidayat",
          "category": "Tech",
          "summary": "Exploring how artificial intelligence is transforming design workflows.",
          "content": "AI tools are reshaping creative industries. From generating mockups to assisting in UX design, here’s how AI can empower designers..."
        },
        {
          "title": "Mastering TypeScript for Scalable Apps",
          "authorName": "Khairul Hidayat",
          "category": "Tech",
          "summary": "Why TypeScript is becoming essential for modern frontend developers.",
          "content": "TypeScript provides strong typing, better tooling, and easier debugging. Learn how to integrate it into your next big project..."
        },
        {
          "title": "Healthy Eating on a Budget",
          "authorName": "Siti Nurhaliza",
          "category": "Lifestyle",
          "summary": "Tips for maintaining a healthy diet without overspending.",
          "content": "Eating healthy doesn’t have to be expensive. This blog shares meal prep strategies, smart shopping hacks, and affordable nutrition tips..."
        },
        {
          "title": "Remote Work: Building Productive Teams",
          "authorName": "Andi Pratama",
          "category": "Business",
          "summary": "Best practices for managing and collaborating in remote teams.",
          "content": "With the rise of remote work, leaders must adapt. Learn techniques for communication, collaboration, and maintaining team morale..."
        },
        {
          "title": "AI and the Future of Creative Design",
          "authorName": "Khairul Hidayat",
          "category": "Tech",
          "summary": "Exploring how artificial intelligence is transforming design workflows.",
          "content": "AI tools are reshaping creative industries. From generating mockups to assisting in UX design, here’s how AI can empower designers..."
        }
    ]
  
  useEffect(() => {
    setListedData(dummyData.slice((pagination.page - 1) * pagination.size, pagination.page * pagination.size))
  }, [pagination])
      
    return(
        <div className="flex flex-col gap-8">
            <div className="flex justify-end gap-5">
              <Search />
              <SelectStatic
                placeholder="Category"
                deafultValue={OPTIONS_SELECT_CATEGORY[0].value}
                configData={OPTIONS_SELECT_CATEGORY}
                callbackSelected={(value) => setCategory(value.value)}
                style={{
                  "&.MuiInputBase-root": {
                    height: "49.33px",
                  },
                  "& .MuiSelect-select": {
                    paddingTop: "0px",
                    paddingRight: "32px !important",
                    paddingBottom: "0px",
                    height: "49.33px",
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: `1px solid text-gray-100`,
                  },
                  // "& .MuiSvgIcon-root": {
                  //   color: color,
                  // },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                }}
                onClick={() => router.push("/add")}
              >Add Post</Button>
            </div>
            <Grid container spacing={4}>
                {listedData.map((data, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                        <div className="bg-white rounded-lg border border-gray-200 p-4 h-full">
                            <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                            <p className="text-gray-600">{data.summary}</p>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <div>
              <PaginationComponent 
                itemsPerPage={pagination.size} 
                totalData={dummyData.length}
                callbackPagination={(v) => setPagination((prev) => ({ ...prev, page: v }))}
                callbackSelectedPageNumber={(v) => setPagination((prev) => ({ ...prev, size: parseInt(v.value), page: 1 }))}
                color={'var(--color-primary)'}
              />
            </div>
        </div>
    )
}