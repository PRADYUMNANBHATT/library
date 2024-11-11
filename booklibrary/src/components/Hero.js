import Image from "next/image";
import {
  Headland_One,
  Sevillana,
  Montserrat_Alternates,
} from "next/font/google";
import Link from "next/link";
import Card from "./Card";

const head = Headland_One({ subsets: ["latin"], weight: ["400"] });
const sev = Sevillana({ subsets: ["latin"], weight: ["400"] });

export default async function Hero() {
  let data = await fetch("https://dummyjson.com/products");
  let posts = await data.json();
  let currentPage = 0;
  const noOfproductPerPage = 10;
  let x = Object.entries(posts.products);
  let y = x.slice(currentPage, noOfproductPerPage);
  console.log(y);

  // let currentPost = await posts.slice(currentPage, noOfproductPerPage);

  return (
    <main>
      <section className="flex min-h-screen max-w-screen flex-col items-center  align-middle justify-center hero-bg">
        <div className=" flex pt-5 flex-row h-full hero-bg-bx  items-center justify-center text-center lg:w-full w-full">
          <div className="hero-left ">
            <h1 className={"hero-heading " + head.className}>
              Explore our vast variety of titles.
            </h1>
            <p>
              More than 600,000 titles including books, e-books, audio books,
              periodicals and more..
            </p>
            <div className="flex flex-row w-full align-middle justify-evenly border-2 border-slate-700">
              <div className="flex flex-row align-middle justify-center p-2">
                <form className="max-w-lg mx-auto">
                  <div className="flex flex-row">
                    <select className="focus:outline-none">
                      <option>Open this select menu</option>
                      <option>By Title</option>
                      <option>By Author</option>
                      <option>By Publisher</option>
                      <option>By subject</option>
                    </select>
                    <div className="relative flex flex-row gap-3">
                      <input
                        type="search"
                        id="search-dropdown"
                        className=" focus:outline-none block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300"
                        placeholder="Search Books..."
                        required
                      />
                      <button
                        type="submit"
                        className="border-0 outline-none text-sm font-medium h-full text-gray  "
                      >
                        <svg
                          className="w-4 h-4 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="hero-rgt">
            <Image
              src="/book.png"
              alt="Vercel Logo"
              className=""
              height={600}
              width={600}
              priority
              style={{ maxWidth: "100vw", width: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-row gap-1 max-w-[100vw] overflow-hidden">
          <div
            className={
              "flex flex-row align-middle justify-center p-2 gap-3 text-white"
            }
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.004 512.004"
              xmlSpace="preserve"
              fill="#000000"
              height={44}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect
                  x="39.151"
                  style={{ fill: "#00DDC0" }}
                  width="113.52"
                  height="512.004"
                ></rect>{" "}
                <rect
                  x="95.911"
                  style={{ fill: "#00AC93" }}
                  width="56.76"
                  height="512.004"
                ></rect>{" "}
                <rect
                  x="152.671"
                  style={{ fill: "#FFAD1D" }}
                  width="113.52"
                  height="512.004"
                ></rect>{" "}
                <rect
                  x="209.442"
                  style={{ fill: "#FF8900" }}
                  width="56.76"
                  height="512.004"
                ></rect>{" "}
                <rect
                  x="39.151"
                  y="437.501"
                  style={{ fill: "#006659" }}
                  width="113.52"
                  height="74.493"
                ></rect>{" "}
                <rect
                  x="95.911"
                  y="437.501"
                  style={{ fill: "#006659" }}
                  width="56.76"
                  height="74.493"
                ></rect>{" "}
                <rect
                  x="152.671"
                  y="437.501"
                  style={{ fill: "#FF3400" }}
                  width="113.52"
                  height="74.493"
                ></rect>{" "}
                <rect
                  x="209.442"
                  y="437.501"
                  style={{ fill: "#FF3400" }}
                  width="56.76"
                  height="74.493"
                ></rect>{" "}
                <rect
                  x="315.22"
                  y="9.326"
                  transform="matrix(-0.9806 0.1962 -0.1962 -0.9806 783.7764 437.2287)"
                  style={{ fill: "#00A5FF" }}
                  width="110.026"
                  height="496.216"
                ></rect>{" "}
                <rect
                  x="369.697"
                  y="3.927"
                  transform="matrix(-0.9806 0.1962 -0.1962 -0.9806 836.1343 421.2428)"
                  style={{ fill: "#0082D2" }}
                  width="55.013"
                  height="496.216"
                ></rect>{" "}
                <polygon
                  style={{ fill: "#006DF3" }}
                  points="472.845,489.894 364.963,511.484 350.333,438.373 458.261,417.012 "
                ></polygon>{" "}
                <polygon
                  style={{ fill: "#005FD1" }}
                  points="472.845,489.894 418.905,500.689 404.297,427.692 458.261,417.012 "
                ></polygon>{" "}
                <rect
                  x="73.978"
                  y="51.2"
                  style={{ fill: "#FFFFFF" }}
                  width="44.522"
                  height="33.391"
                ></rect>{" "}
                <rect
                  x="96.236"
                  y="51.2"
                  style={{ fill: "#E1E1E4" }}
                  width="22.261"
                  height="33.391"
                ></rect>{" "}
                <rect
                  x="187.509"
                  y="51.2"
                  style={{ fill: "#E1E1E4" }}
                  width="44.522"
                  height="33.391"
                ></rect>{" "}
                <rect
                  x="209.442"
                  y="51.2"
                  style={{ fill: "#E1E1E4" }}
                  width="22.594"
                  height="33.391"
                ></rect>{" "}
                <rect
                  x="318.886"
                  y="59.425"
                  transform="matrix(-0.1896 -0.9819 0.9819 -0.1896 319.6778 425.8492)"
                  style={{ fill: "#FFFFFF" }}
                  width="33.392"
                  height="43.145"
                ></rect>{" "}
                <polygon
                  style={{ fill: "#E1E1E4" }}
                  points="338.215,97.479 331.662,64.735 353.595,60.502 359.925,93.287 "
                ></polygon>{" "}
              </g>
            </svg>
            <span className={"" + sev.className}>Offer</span>
          </div>
          <div
            className={
              "flex flex-row gap-3 align-middle justify-center p-2 text-white"
            }
          >
            <svg
              version="1.0"
              id="Layer_1"
              height={44}
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path
                      fill="#B4CCB9"
                      d="M32.516,53.933C32.347,53.978,32.173,54,32,54s-0.347-0.022-0.516-0.067L2,46.07v1.954l30,7.941l30-7.941 V46.07L32.516,53.933z"
                    ></path>{" "}
                    <path
                      fill="#B4CCB9"
                      d="M32,58c-0.086,0-0.172-0.011-0.256-0.033L2,50.093v1.906l25.033,6.676l1.987,0.53 c0.079,1.143,0.785,2.111,1.788,2.546l0.676,0.181c0.169,0.045,0.343,0.067,0.516,0.067s0.347-0.022,0.516-0.067l0.676-0.181 c1.003-0.435,1.709-1.403,1.788-2.546l1.987-0.53L62,51.999v-1.906l-29.744,7.874C32.172,57.989,32.086,58,32,58z"
                    ></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <polygon
                      fill="#F9EBB2"
                      points="2.001,2.001 1.998,2.001 2,44 31,51.733 31,9.733 2.001,2 "
                    ></polygon>{" "}
                    <polygon
                      fill="#F9EBB2"
                      points="33,9.733 33,51.733 62,44 62,2 "
                    ></polygon>{" "}
                  </g>{" "}
                  <polygon
                    opacity="0.15"
                    fill="#231F20"
                    points="33,9.733 33,51.733 62,44 62,2 "
                  ></polygon>{" "}
                  <g>
                    {" "}
                    <path
                      fill="#394240"
                      d="M8.992,29.828l14.467,4.134C23.551,33.987,23.643,34,23.734,34c0.435,0,0.835-0.286,0.961-0.726 c0.151-0.53-0.156-1.084-0.688-1.236L9.541,27.904c-0.527-0.146-1.084,0.155-1.236,0.688C8.153,29.122,8.461,29.676,8.992,29.828z "
                    ></path>{" "}
                    <path
                      fill="#394240"
                      d="M8.992,36.829l14.467,4.133C23.551,40.987,23.643,41,23.734,41c0.435,0,0.835-0.286,0.961-0.726 c0.151-0.531-0.156-1.084-0.688-1.236L9.541,34.905c-0.527-0.146-1.084,0.155-1.236,0.688C8.153,36.124,8.461,36.677,8.992,36.829 z"
                    ></path>{" "}
                    <path
                      fill="#394240"
                      d="M8.992,22.828l14.467,4.134C23.551,26.987,23.643,27,23.734,27c0.435,0,0.835-0.286,0.961-0.726 c0.151-0.53-0.156-1.084-0.688-1.236L9.541,20.904c-0.527-0.146-1.084,0.155-1.236,0.688C8.153,22.122,8.461,22.676,8.992,22.828z "
                    ></path>{" "}
                    <path
                      fill="#394240"
                      d="M8.992,15.828l14.467,4.134C23.551,19.987,23.643,20,23.734,20c0.435,0,0.835-0.286,0.961-0.726 c0.151-0.53-0.156-1.084-0.688-1.236L9.541,13.904c-0.527-0.146-1.084,0.155-1.236,0.688C8.153,15.122,8.461,15.676,8.992,15.828z "
                    ></path>{" "}
                    <path
                      fill="#394240"
                      d="M39.963,33.962c0.092,0,0.184-0.013,0.275-0.038l14.467-4.134c0.531-0.152,0.839-0.706,0.688-1.236 c-0.152-0.532-0.708-0.832-1.236-0.688L39.689,32c-0.531,0.152-0.839,0.706-0.688,1.236 C39.128,33.676,39.528,33.962,39.963,33.962z"
                    ></path>{" "}
                    <path
                      fill="#394240"
                      d="M54.459,34.905l-14.467,4.133c-0.531,0.152-0.839,0.705-0.688,1.236C39.431,40.714,39.831,41,40.266,41 c0.092,0,0.184-0.013,0.275-0.038l14.467-4.133c0.531-0.152,0.839-0.705,0.688-1.236C55.543,35.061,54.987,34.761,54.459,34.905z"
                    ></path>{" "}
                    <path
                      fill="#394240"
                      d="M40.266,27c0.092,0,0.184-0.013,0.275-0.038l14.467-4.134c0.531-0.152,0.839-0.706,0.688-1.236 c-0.152-0.532-0.708-0.834-1.236-0.688l-14.467,4.134c-0.531,0.152-0.839,0.706-0.688,1.236C39.431,26.714,39.831,27,40.266,27z"
                    ></path>{" "}
                    <path
                      fill="#394240"
                      d="M40.266,20c0.092,0,0.184-0.013,0.275-0.038l14.467-4.134c0.531-0.152,0.839-0.706,0.688-1.236 c-0.152-0.532-0.708-0.832-1.236-0.688l-14.467,4.134c-0.531,0.152-0.839,0.706-0.688,1.236C39.431,19.714,39.831,20,40.266,20z"
                    ></path>{" "}
                    <path
                      fill="#394240"
                      d="M63.219,0.414c-0.354-0.271-0.784-0.413-1.221-0.413c-0.172,0-0.345,0.022-0.514,0.066L32,7.93 L2.516,0.067c-0.17-0.045-0.343-0.066-0.515-0.066c-0.437,0-0.866,0.142-1.22,0.413C0.289,0.793,0,1.379,0,2v49.999 c0,0.906,0.609,1.699,1.484,1.933l25.873,6.899C28.089,62.685,29.887,64,32,64s3.911-1.315,4.643-3.169l25.873-6.899 C63.391,53.698,64,52.905,64,51.999V2C64,1.379,63.711,0.793,63.219,0.414z M2.001,2.001L2.001,2.001L31,9.733v42L2,44 L1.998,2.001C1.998,2.001,1.999,2.001,2.001,2.001z M62,51.999l-25.033,6.676l-1.987,0.53c-0.079,1.143-0.785,2.111-1.788,2.546 l-0.676,0.181c-0.169,0.045-0.343,0.067-0.516,0.067s-0.347-0.022-0.516-0.067l-0.676-0.181c-1.003-0.435-1.709-1.403-1.788-2.546 l-1.987-0.53L2,51.999v-1.906l29.744,7.874C31.828,57.989,31.914,58,32,58s0.172-0.011,0.256-0.033L62,50.093V51.999z M62,48.024 l-30,7.941L2,48.024V46.07l29.484,7.862C31.653,53.978,31.827,54,32,54s0.347-0.022,0.516-0.067L62,46.07V48.024z M62,44 l-29,7.733v-42L62,2V44z"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className={"" + sev.className}>Offer</span>
          </div>
          <div
            className={
              "flex flex-row align-middle justify-center p-2 text-white"
            }
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              height={44}
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect
                  x="132.044"
                  style={{ fill: "#735538" }}
                  width="32.337"
                  height="63.437"
                ></rect>{" "}
                <rect
                  x="347.619"
                  style={{ fill: "#5D412A" }}
                  width="32.337"
                  height="63.437"
                ></rect>{" "}
                <polygon
                  style={{ fill: "#735538" }}
                  points="406.593,479.663 406.593,512 353.237,512 353.237,479.663 358.153,479.663 324.016,416.876 186.454,416.876 152.327,479.663 158.762,479.663 158.762,512 105.405,512 105.405,479.663 115.516,479.663 214.339,297.864 242.742,313.31 204.023,384.538 306.445,384.538 267.728,313.31 296.141,297.864 394.952,479.663 "
                ></polygon>{" "}
                <polygon
                  style={{ fill: "#5D412A" }}
                  points="406.593,479.663 406.593,512 353.237,512 353.237,479.663 358.153,479.663 324.016,416.876 255.547,416.876 255.547,384.538 306.445,384.538 267.728,313.31 296.141,297.864 394.952,479.663 "
                ></polygon>{" "}
                <rect
                  x="84.623"
                  y="63.441"
                  style={{ fill: "#006659" }}
                  width="342.75"
                  height="246.044"
                ></rect>{" "}
                <rect
                  x="255.793"
                  y="63.441"
                  style={{ fill: "#005349" }}
                  width="171.584"
                  height="246.044"
                ></rect>{" "}
                <path
                  style={{ fill: "#FF9900" }}
                  d="M68.455,47.274v278.38h375.089V47.274H68.455z M411.207,293.316H100.792V79.61h310.415V293.316z"
                ></path>{" "}
                <polygon
                  style={{ fill: "#E47500" }}
                  points="443.545,47.274 443.545,325.652 255.795,325.652 255.795,293.316 411.207,293.316 411.207,79.61 255.795,79.61 255.795,47.274 "
                ></polygon>{" "}
                <g>
                  {" "}
                  <path
                    style={{ fill: "#EEE5DD" }}
                    d="M171.927,137.993l18.837,29.776l18.838-29.776h21.51l-29.896,43.751l28.925,42.536H208.63 l-17.866-28.56l-17.865,28.56h-21.633l28.925-42.536l-29.897-43.751L171.927,137.993L171.927,137.993z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#EEE5DD" }}
                    d="M276.321,173.359v15.556h-11.546v12.639h-17.5v-12.639h-11.424v-15.556h11.424V160.72h17.5v12.639 H276.321z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#EEE5DD" }}
                    d="M303.423,137.993l18.594,39.62l18.837-39.62h21.754L331.86,194.87v29.41H312.05v-29.653 l-30.262-56.633L303.423,137.993L303.423,137.993z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className={"" + sev.className}>Offer</span>
          </div>
          <div
            className={
              "flex flex-row align-middle justify-center p-2 text-white"
            }
          >
            <svg
              viewBox="0 0 1024 1024"
              className="icon"
              width={44}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M21.333333 810.666667h981.333334v42.666666H21.333333zM533.333333 384h85.333334v341.333333h-85.333334zM661.333333 384h85.333334v341.333333h-85.333334zM789.333333 384h85.333334v341.333333h-85.333334zM405.333333 384h85.333334v341.333333h-85.333334zM277.333333 384h85.333334v341.333333h-85.333334zM149.333333 384h85.333334v341.333333H149.333333zM917.333333 341.333333H106.666667v-64l405.333333-192 405.333333 192zM106.666667 725.333333h810.666666v42.666667H106.666667z"
                  fill="#FF9800"
                ></path>
                <path
                  d="M533.333333 341.333333h85.333334v42.666667h-85.333334zM661.333333 341.333333h85.333334v42.666667h-85.333334zM789.333333 341.333333h85.333334v42.666667h-85.333334zM405.333333 341.333333h85.333334v42.666667h-85.333334zM277.333333 341.333333h85.333334v42.666667h-85.333334zM149.333333 341.333333h85.333334v42.666667H149.333333zM64 768h896v42.666667H64z"
                  fill="#EF6C00"
                ></path>
                <path
                  d="M512 234.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z"
                  fill="#EF6C00"
                ></path>
              </g>
            </svg>
            <span className={"" + sev.className}>Offer</span>
          </div>
        </div>
      </section>

      <sectionc className="flex min-h-screen max-w-screen  sec-two flex-col max-w-[100vw] items-center  align-middle justify-center ">
        <div className="flex items-center  align-middle justify-center pt-5 pb-10">
          <h1 className="">Library Recommendations. Something for everyone.</h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center align-middle gap-5 pb-10">
          {y.map((post) => (
            <Card key={post.id} post={post[1]} />
          ))}
        </div>
      </sectionc>
    </main>
  );
}
