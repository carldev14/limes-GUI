"use client";
import SvgComponent from "@/assets/logo";
import { useForm } from "react-hook-form";
import { BoldPoppins, RegularPoppins } from "../../../utils/fonts";
import { RegisterSection } from "../json/sections";
import Link from "next/link";
import useApi from "../../../utils/mutation_method";
import { useRouter } from "next/navigation";
import { BackendUrl } from "@/lib/utils";

export default function FormTemplatesUI() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { mutate: mutate_register, data: register_response } = useApi({
    url: `${BackendUrl}/register`,
    methodv: "POST",
  });
  function submitNow(formData: object) {
    mutate_register(formData, {
      onSuccess(data) {
        if (data.success === true) {
          router.push("/auth/login");
        }
      },
    });
  }

  return (
    <div className="p-8 w-full rounded-lg bg-white md:w-[40%] lg:w-[30%] shadow-md flex flex-col items-center md:justify-between gap-2">
      <section className="flex flex-col gap-8 p-1   w-full">
        <section className="flex flex-col gap-3">
          <h1 className={` ${BoldPoppins.className} text-xl text-black/80`}>Register</h1>
          <p className="text-sm text-black/60">Fill up the form to create your account</p>
        </section>
        <form
          onSubmit={handleSubmit(submitNow)}
          className="flex flex-col gap-4 w-full "
        >
          <section className="flex flex-col gap-3">
            {RegisterSection.map((items, index) => (

              <section
                className="  "
                key={index}
              >
                <label className={`text-xs text-black/60`}>{items.name}</label>

                <input
                  type={items.name}
                  autoComplete="off"
                  {...register(items.data)}
                  className={`outline-none bg-transparent text-sm text-black/80 p-2 w-full border border-black/20  rounded-lg`}
                />
              </section>


            ))}

          </section>

          {register_response && register_response.success ? (
            <p className="bg-green-200 p-3 text-sm text-green-800 rouned-md">
              {register_response.message}
            </p>
          ) : register_response && !register_response.success ? (
            <p className="bg-red-200 p-3 text-sm text-red-800 rounded-md">
              {register_response.error}
            </p>
          ) : null}

          <button
            type="submit"
            className={`text-sm rounded-lg p-2 bg-green-800 text-white`}
          >
            Create an account
          </button>
          <p className="text-sm text-black/80 text-center justify-center flex gap-1">
            Don't have an account?
            <Link
              href={"/access/login"}
              className={`text-green-800`}
            >
              Click me
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}
