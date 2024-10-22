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
    <div className="p-6 w-full md:w-[30%] lg:w-[40%]  flex flex-col items-center md:justify-between gap-2">
      <section className="flex flex-col gap-8 p-1   w-full">
        <section className="flex flex-col gap-3">
          <h1 className="text-xl text-black/80">Login</h1>
          <p className="text-sm text-black/60">Login your account</p>
        </section>
        <form
          onSubmit={handleSubmit(submitNow)}
          className="flex flex-col gap-4 w-full "
        >
          <section className="flex flex-col gap-3">
            {LoginSection.map((items, index) => (
              <>
                <label className={`text-xs  ${BoldPoppins.className} text-black/60`}>{items.name}</label>
                <section
                  className="p-2 border border-black/20  rounded-lg "
                  key={index}
                >

                  <input
                    type={items.name}
                    autoComplete="off"
                    {...register(items.data)}
                    className={`outline-none bg-transparent text-sm text-black/80 px-2 w-full `}
                  />
                </section>
              </>

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
            className={`text-sm rounded-lg p-3 bg-green-800 text-white`}
          >
            Login
          </button>
          <Link
            href={"/auth/register"}
            className={`text-sm text-black/60 text-center`}
          >
            Don't have an account? Click me
          </Link>
        </form>
      </section>
    </div>
  );
}
