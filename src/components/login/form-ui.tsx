"use client";
import SvgComponent from "@/assets/logo";
import { useForm } from "react-hook-form";
import { BoldPoppins, RegularPoppins } from "../../../utils/fonts";
import { LoginSection } from "../json/sections";
import Link from "next/link";
import mutationMet from "../../../utils/mutation_method";
import { useRouter } from "next/navigation";
import { BackendUrl } from "@/lib/utils";

export default function FormTemplatesUI() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { mutate: mutate_login, data: login_response } = mutationMet({
    url: `${BackendUrl}/login`,
    methodv: "POST",
  });

  function submitNow(formData: object) {
    mutate_login(formData, {
      onSuccess: (data) => {
        if (data.success === true) {
          router.push("/private-page/home");
        }
      },
    });
  }

  return (
    <div className="p-8 w-full rounded-lg bg-white md:w-[40%] lg:w-[30%] shadow-md flex flex-col items-center md:justify-between gap-2">
      <section className="flex flex-col gap-8 p-1   w-full">
        <section className="flex flex-col gap-3">
          <h1 className={` ${BoldPoppins.className} text-xl text-black/80`}>Log In</h1>
          <p className="text-sm text-black/60">Fill up the form to access your account</p>
        </section>
        <form
          onSubmit={handleSubmit(submitNow)}
          className="flex flex-col gap-4 w-full "
        >
          <section className="flex flex-col gap-3">
            {LoginSection.map((items, index) => (
              

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
            <Link
              href={"/forgot-password"}
              className={`text-xs mx-1 text-red-600 text-start`}
            >
              Forgot Password?
            </Link>
          </section>

          {login_response && login_response.success ? (
            <p className="bg-green-200 p-3 text-sm text-green-800 rouned-md">
              {login_response.message}
            </p>
          ) : login_response && !login_response.success ? (
            <p className="bg-red-200 p-3 text-sm text-red-800 rounded-md">
              {login_response.error}
            </p>
          ) : null}

          <button
            type="submit"
            className={`text-sm rounded-lg p-2 bg-green-800 text-white`}
          >
            Log In
          </button>
          <p className="text-sm text-black/80 text-center justify-center flex gap-1">
            Don't have an account?
            <Link
              href={"/access/register"}
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
