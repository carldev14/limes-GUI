"use client";
import { useQuery } from "@tanstack/react-query";
import {
  BoldPoppins,
  HeaderPoppins,
  RegularPoppins,
} from "../../../utils/fonts";
import Image from "next/image";
import axios from "axios";
export default function UserDataSection() {
  const { data: getUserData } = useQuery({
    queryKey: ["getUserData"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:5000/api/get-user-data",
        {
          withCredentials: true,
        }
      );
      console.log(response.data.username);
      return response.data.user;
    },
  });
  return (
    getUserData && (
      <div className="w-full ">
        <h1 className="py-2 text-lg">My Account</h1>
        <section className="h-fit bg-gray-200 rounded-t-md flex flex-row items-center  md:gap-8 gap-5 md:p-6 p-4">
          <Image src={""} alt="" className="size-16 md:size-20 bg-gray-300 rounded-full" />
          <section className="flex-col flex gap-1">
            <label className={`${BoldPoppins.className} text-lg text-black/75`}>
              {getUserData.username}
            </label>
            <p className="text-sm text-black/80">{getUserData.email}</p>
          </section>
        </section>
        <section className="h-fit grid place-items-center grid-cols-1 md:grid-cols-2 w-full gap-3 bg-gray-100  p-6 rounded-b-md">
          <section className="flex flex-col w-full  gap-2 ">
            <label className="text-xs text-black/80   ">Email:</label>
            <p className="text-sm r p-3 text-black/90 border-b border-black/50">
              {getUserData.email}
            </p>
          </section>
          <section className="flex flex-col w-full  gap-2 ">
            <label className="text-xs text-black/80   ">Username:</label>
            <p className="text-sm  p-3 text-black/90 border-b border-black/50">
              {getUserData.username}
            </p>
          </section>
          <section className="flex flex-col w-full  gap-2 ">
            <label className="text-xs text-black/80   ">LastLogin:</label>
            <p className="text-sm  p-3 text-black/90 border-b border-black/50">
              {getUserData.lastlogin}
            </p>
          </section>
          <section className="flex flex-col w-full  gap-2 ">
            <label className="text-xs text-black/80   ">User since:</label>
            <p className="text-sm  p-3 text-black/90 border-b border-black/50">
              {getUserData.createdAt}
            </p>
          </section>
        </section>
      </div>
    )
  );
}
