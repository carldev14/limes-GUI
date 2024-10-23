"use client";
import { useQuery } from "@tanstack/react-query";
import {
  BoldPoppins,

} from "../../../utils/fonts";

import axios from "axios";
import { BackendUrl } from "@/lib/utils";
export default function PersonalInfo() {
  const { data: getUserData } = useQuery({
    queryKey: ["getUserData"],
    queryFn: async () => {
      const response = await axios.get(
        `${BackendUrl}/get-user-data`,
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
      <div className="w-full flex flex-col gap-8 items-center p-2">
        <section className="text-center">
          <h1 className={` py-2  text-xl md:text-2xl text-black/90`}>Account Info</h1>
          <p className="text-sm text-black/80">Here's the info about your account</p>
        </section>
        {/* account infos */}
        <section className="border border-black/15 w-full rounded-md p-6 flex flex-col gap-4">
          <section className="">
            <h2 className={`text-base  text-black/90`}>Basic info</h2>
          </section>
          <fieldset className="flex-col flex gap-4">
            <section className="flex flex-col gap-1 py-2 border-b border-black/40">
              <legend className="text-xs text-black/80">Username:  </legend>
               <p className="text-black/90 text-sm">{getUserData.username}</p>
            </section>
            <section className="flex flex-col gap-1 py-2 border-b border-black/40">
              <legend className="text-xs text-black/80">Email:  </legend>
              <p className="text-black/90 text-sm">{getUserData.email}</p>
            </section>
            <section className="flex flex-col gap-1 py-2 border-b border-black/40">
              <legend className="text-xs text-black/80">Last Login:  </legend>
              <p className="text-black/90 text-sm">{getUserData.lastlogin}</p>
            </section>
          </fieldset>
        </section>
      </div>
    )
  );
}
