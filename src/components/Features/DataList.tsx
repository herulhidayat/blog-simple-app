"use client";

import { Button, Grid } from "@mui/material";
import PaginationComponent from "../Pagination/PaginationComponent";
import { useEffect, useState } from "react";
import Search from "../Form/Search";
import SelectStatic from "../Form/SelectStatic";
import { OPTIONS_SELECT_CATEGORY } from "../Config/options.config";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setDataLocal } from "@/store/reducers/app";
import { DUMMY_DATA } from "../Config/dummy.config";
import EditIcon from '@mui/icons-material/Edit';



export default function DataList() {
  const [listedData, setListedData] = useState<
    {
      id: number;
      title: string;
      authorName: string;
      category: string;
      summary: string;
      content: string;
    }[]
  >([]);
  const [pagination, setPagination] = useState<{ page: number; size: number }>({
    page: 1,
    size: 9,
  });
  const [category, setCategory] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { dataLocal } = useSelector((state: any) => state.app);

  useEffect(() => {
    if (dataLocal) {
      setListedData(
        dataLocal?.slice(
          (pagination.page - 1) * pagination.size,
          pagination.page * pagination.size
        )
      );
    }
  }, [pagination, dataLocal]);

  useEffect(() => {
    if(dataLocal?.length === 0) {
      dispatch(setDataLocal(DUMMY_DATA));
    }
  }, []);

  return (
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
              color: "var(--color-primary)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid var(--color-primary)`,
            },
            "& .MuiSvgIcon-root": {
              color: "var(--color-primary)",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            boxShadow: "none",
          }}
          onClick={() => router.push("/add")}
        >
          Add Post
        </Button>
      </div>
      <Grid container spacing={4}>
        {listedData.map((data, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <div className="hover:relative h-full">
              <div className="absolute cursor-pointer top-3 right-3 text-sm bg-primary rounded-full w-8 h-8 flex items-center justify-center transition-all scale-80 hover:scale-90" onClick={() => router.push(`/${data?.id}/edit`)}>
                <EditIcon />
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 h-full hover:bg-primary-50 dark:hover:bg-zinc-800 cursor-pointer" onClick={() => router.push(`/${data?.id}`)}>
                <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{data.summary}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <div>
        <PaginationComponent
          itemsPerPage={pagination.size}
          totalData={dataLocal?.length}
          callbackPagination={(v) =>
            setPagination((prev) => ({ ...prev, page: v }))
          }
          callbackSelectedPageNumber={(v) =>
            setPagination((prev) => ({
              ...prev,
              size: parseInt(v.value),
              page: 1,
            }))
          }
          color={"var(--color-primary)"}
        />
      </div>
    </div>
  );
}
