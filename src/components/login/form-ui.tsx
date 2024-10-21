"use client";
import SvgComponent from "@/assets/logo";
import { useForm } from "react-hook-form";
import { BoldPoppins, RegularPoppins } from "../../../utils/fonts";
import { LoginSection } from "../json/sections";
import Link from "next/link";
import mutationMet from "../../../utils/mutation_method";
import { useRouter } from "next/navigation";

export default function FormTemplatesUI() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { mutate: mutate_login, data: login_response } = mutationMet({
    url: "http://localhost:5000/api/login",
    methodv: "POST",
  });

  function submitNow(formData: object) {
    mutate_login(formData, {
      onSuccess: (data) => {
        if (data.success === true) {
          router.push("/p/home");
        }
      },
    });
  }

  return (
    <div className="p-6 w-full md:w-[28%] flex flex-col items-center md:justify-between gap-2">
      <section className="w-full flex flex-col items-center">
        <SvgComponent className="size-32" />
      </section>
      <section className="flex flex-col gap-9 items-center w-full">
        <section className="flex flex-col gap-6 items-center">
          <h1 className={`${BoldPoppins.className} text-xl text-black/80`}>
            Welcome back!
          </h1>
        </section>
        <form
          onSubmit={handleSubmit(submitNow)}
          className="flex flex-col gap-4 w-full p-1"
        >
          <section className="flex flex-col gap-3">
            {LoginSection.map((items, index) => (
              <fieldset
                className="p-2 border border-black/40 rounded-xl "
                key={index}
              >
                <legend
                  className={`text-xs text-black/80  px-2 ${RegularPoppins.className}`}
                >
                  {items.name}
                </legend>
                <input
                  type={items.name}
                  autoComplete="off"
                  {...register(items.data)}
                  className={`outline-none bg-transparent text-sm px-1 w-full ${RegularPoppins.className}`}
                />
              </fieldset>
            ))}
            <Link
              href={"/forgot-password"}
              className={`text-xs mx-1 text-red-600 text-start ${RegularPoppins.className}`}
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
            className={`text-sm rounded-xl p-3 bg-green-700 text-white ${RegularPoppins.className}`}
          >
            Login
          </button>
          <Link
            href={"/register"}
            className={`text-sm text-black/90 text-center ${RegularPoppins.className}`}
          >
            Don't have an account? Click me
          </Link>
        </form>
      </section>
    </div>
  );
}
