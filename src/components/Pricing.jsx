import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Buttons from "./Buttons";
import { FaArrowCircleDown } from "react-icons/fa";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export function PricingCard() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex justify-center items-center gap-x-5 mb-5">
          <h3 className="inline text-slate-200 text-xl px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full  font-primary-font font-bold leading-relaxed tracking-wider">
            PRICING
          </h3>

          <a href="" className="text-slate-100">
            <FaArrowCircleDown
              size={18}
              className="animate-bounce hover:text-blue-500 duration-200"
            />
          </a>
        </div>

        <div className="lg:grid grid-cols-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <Card
              color="gray"
              variant="gradient"
              className="w-full max-w-[20rem] p-8 hover:border hover:border-sub-heading duration-200 rounded-md"
            >
              <CardHeader
                floated={false}
                shadow={false}
                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal uppercase"
                >
                  standard
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                >
                  <span className="mt-2 text-4xl">$</span>5{" "}
                  <span className="self-end text-4xl">/mo</span>
                </Typography>
              </CardHeader>
              <CardBody className="p-0">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      1 team members
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      50+ components
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      15+ built-in pages
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      3 months free updates
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      No technical support
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardFooter className="mt-12 p-0">
                <Buttons
                  title={"BUY NOW"}
                  className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-pink-700 to-pink-500 hover:opacity-80"
                ></Buttons>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center items-center">
            <Card
              color="gray"
              variant="gradient"
              className="w-full max-w-[20rem] p-8 hover:border hover:border-sub-heading duration-200 rounded-md"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal uppercase"
                >
                  Professional
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                >
                  <span className="mt-2 text-4xl">$</span>29{" "}
                  <span className="self-end text-4xl">/mo</span>
                </Typography>
              </CardHeader>
              <CardBody className="p-0">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      5 team members
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      200+ components
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      40+ built-in pages
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      1 year free updates
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      Life time technical support
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardFooter className="mt-12 p-0">
                <Buttons
                  title={"BUY NOW"}
                  className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-pink-700 to-pink-500 hover:opacity-80"
                ></Buttons>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center items-center">
            <Card
              color="gray"
              variant="gradient"
              className="w-full max-w-[20rem] p-8 hover:border hover:border-sub-heading duration-200 rounded-md"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal uppercase"
                >
                  Premium
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                >
                  <span className="mt-2 text-4xl">$</span>59{" "}
                  <span className="self-end text-4xl">/mo</span>
                </Typography>
              </CardHeader>
              <CardBody className="p-0">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      15 team members
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      400+ components
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      60+ built-in pages
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      4 year free updates
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      Life time technical support
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardFooter className="mt-12 p-0">
                <Buttons
                  title={"BUY NOW"}
                  className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-pink-700 to-pink-500 hover:opacity-80"
                ></Buttons>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
