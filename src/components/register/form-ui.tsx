"use client"
import SvgComponent from "@/assets/logo";
import { useForm } from "react-hook-form";
import { BoldPoppins, RegularPoppins } from "../../../utils/fonts";
import { RegisterSection } from "../json/sections";
import Link from "next/link";
import useApi from "../../../utils/mutation_method";

export default function FormTemplatesUI() {
    const { register, handleSubmit } = useForm();
    const { mutate: mutate_register, data: register_response } = useApi({
        url: "http://localhost:5000/api/auth/register",
        methodv: 'POST'
    })
    function submitNow(formData: object) {
        mutate_register(formData);
    }

    return (
        <div className="p-6 w-full md:w-[28%] flex flex-col items-center md:justify-between gap-2">

            <section className="w-full  flex flex-col items-center">
                <SvgComponent className="size-32" />
            </section>
            <section className="flex flex-col gap-6 items-center w-full">
                <section className="flex flex-col items-center">
                    <h1 className={`${BoldPoppins.className} text-xl text-black/80`}>Create an account</h1>

                </section>
                <form onSubmit={handleSubmit(submitNow)} className="flex flex-col gap-4 w-full p-1 ">
                    <section className="flex flex-col gap-3">
                        {RegisterSection.map((items, index) => (
                            <fieldset className="p-2 border border-black/40 rounded-xl " key={index}>
                                <legend className={`text-xs text-black/80  px-2 ${RegularPoppins.className}`}>{items.name}</legend>
                                <input
                                    type={items.name}
                                    autoComplete="off"
                                    {...register(items.data)}
                                    className={`outline-none bg-transparent text-sm px-1 w-full ${RegularPoppins.className}`}
                                />
                            </fieldset>
                        ))}

                    </section>

                    {register_response && register_response.success ? (
                        <p className="bg-green-200 p-3 text-sm text-green-800 rouned-md">{register_response.message}</p>
                    ) : register_response && !register_response.success ? (
                        <p className="bg-red-200 p-3 text-sm text-red-800 rounded-md">{register_response.message}</p>
                    ) : null}

                    <button type="submit" className={`$ text-sm  rounded-xl  p-2  bg-green-700  text-white `}>
                        Register
                    </button>
                    <Link href={'/login'} className="text-sm text-black/90 text-center">Already have an account? Click me</Link>
                </form>

            </section>
        </div>
    );
}
