import { useForm } from "react-hook-form";
import Title from "./Title";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Title>Contact</Title>
      <div className=" text-black  p-6">
        <form className="flex gap-6" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="Name" {...register("example")} />

          <input
            defaultValue="Subject"
            {...register("exampleRequired", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <input className="cursor-pointer" type="submit" />
        </form>
      </div>
      <div className="flex gap-6 justify-center ">
        <div className="flex  items-center gap-3">
          <i class="fa-solid fa-location-crosshairs"></i>
          <div className="">
            <p>location</p>
            <p>Istanbul, Turkiye</p>
          </div>
        </div>
        <div className="flex  items-center gap-3">
          <i class="fa-solid fa-at"></i>
          <div className=" ">
            <p>mail</p>
            <a href="mailto:mertdanis@outlook.com">mertdanis@outlook.com</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
