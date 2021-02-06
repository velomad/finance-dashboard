import React, { useRef } from "react";
import { Card } from "../../components";
import "./blogs.css";

const Blogs = () => {
  return (
    <div className="p-10 space-y-4">
      <div className="flex justify-between">
        <div className="text-3xl text-blue-800 font-bold">Blogs</div>
        <div className="text-sm bg-blue-200 py-2 px-4 rounded-lg text-blue-800 font-semibold">+ New Blog</div>
      </div>
      <hr className=" border-blue-300" />

      <div className="grid grid-cols-4 gap-10">
        <div className="w-60">
          <Card
            shadow=""
            classes="hover:shadow-xl transition duration-500"
            rounded="2xl"
          >
            <img
              src="https://admin.creditkaro.com/storage/uploads/THUMB_2020206130644.png"
              width="250px"
            />
            <div className="p-2 space-y-2">
              <div className="text-base font-semibold">
                Union Budget 2021-2022 Target Announcements
              </div>
              <div className="text-xs text-gray-800 font-semibold">
                5 FEBRUARY 2021
              </div>
              <hr className="border-blue-200" />
              <div className="text-sm text-gray-600 text-justify">
                This is introductory part of this blogs section and we got to
                see whether this fits perfect for this kind of environment
              </div>
              <div className="text-xs text-blue-800 font-bold">READ MORE</div>
            </div>
          </Card>
        </div>

        <div className="w-60">
          <Card
            shadow=""
            classes="hover:shadow-xl transition duration-500"
            rounded="2xl"
          >
            <img
              src="https://admin.creditkaro.com/storage/uploads/THUMB_2020206130644.png"
              width="250px"
            />
            <div className="p-2 space-y-2">
              <div className="text-base font-semibold">
                Union Budget 2021-2022 Target Announcements
              </div>
              <div className="text-xs text-gray-800 font-semibold">
                5 FEBRUARY 2021
              </div>
              <hr className="border-blue-200" />
              <div className="text-sm text-gray-600 text-justify">
                This is introductory part of this blogs section and we got to
                see whether this fits perfect for this kind of environment
              </div>
              <div className="text-xs text-blue-800 font-bold">READ MORE</div>
            </div>
          </Card>
        </div>

        <div className="w-60">
          <Card
            shadow=""
            classes="hover:shadow-xl transition duration-500"
            rounded="2xl"
          >
            <img
              src="https://admin.creditkaro.com/storage/uploads/THUMB_2020206130644.png"
              width="250px"
            />
            <div className="p-2 space-y-2">
              <div className="text-base font-semibold">
                Union Budget 2021-2022 Target Announcements
              </div>
              <div className="text-xs text-gray-800 font-semibold">
                5 FEBRUARY 2021
              </div>
              <hr className="border-blue-200" />
              <div className="text-sm text-gray-600 text-justify">
                This is introductory part of this blogs section and we got to
                see whether this fits perfect for this kind of environment
              </div>
              <div className="text-xs text-blue-800 font-bold">READ MORE</div>
            </div>
          </Card>
        </div>

        <div className="w-60">
          <Card
            shadow=""
            classes="hover:shadow-xl transition duration-500"
            rounded="2xl"
          >
            <img
              src="https://admin.creditkaro.com/storage/uploads/THUMB_2020206130644.png"
              width="250px"
            />
            <div className="p-2 space-y-2">
              <div className="text-base font-semibold">
                Union Budget 2021-2022 Target Announcements
              </div>
              <div className="text-xs text-gray-800 font-semibold">
                5 FEBRUARY 2021
              </div>
              <hr className="border-blue-200" />
              <div className="text-sm text-gray-600 text-justify">
                This is introductory part of this blogs section and we got to
                see whether this fits perfect for this kind of environment
              </div>
              <div className="text-xs text-blue-800 font-bold">READ MORE</div>
            </div>
          </Card>
        </div>

        <div className="w-60">
          <Card
            shadow=""
            classes="hover:shadow-xl transition duration-500"
            rounded="2xl"
          >
            <img
              src="https://admin.creditkaro.com/storage/uploads/THUMB_2020206130644.png"
              width="250px"
            />
            <div className="p-2 space-y-2">
              <div className="text-base font-semibold">
                Union Budget 2021-2022 Target Announcements
              </div>
              <div className="text-xs text-gray-800 font-semibold">
                5 FEBRUARY 2021
              </div>
              <hr className="border-blue-200" />
              <div className="text-sm text-gray-600 text-justify">
                This is introductory part of this blogs section and we got to
                see whether this fits perfect for this kind of environment
              </div>
              <div className="text-xs text-blue-800 font-bold">READ MORE</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
