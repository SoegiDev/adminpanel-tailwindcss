import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
      <div className="flex">
        <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">
          Tables
        </h1>
      </div>
      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
            <h2>Table</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div class="flex flex-col">
            <div class="m-2 overflow-x-auto">
              <div class="p-1.5 w-full inline-block align-middle">
                <div class="border rounded-lg border-2 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <div class="overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-slate-300 border-b-2 border-gray-200">
                        <tr>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                            No
                          </th>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                            Details
                          </th>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                            Status
                          </th>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                            Date
                          </th>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="p-3 text-sm text-gray-700">
                            <Link
                              to={"#"}
                              className="font-bold text-blue-500 hover:underline"
                            >
                              1001
                            </Link>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero, fugit?
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wide text-yellow-800 bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white ">
                              Lorem ipsum dolor sit
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            16-10-2023
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Rp.2.000.000
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-sm text-gray-700">
                            <Link
                              to={"#"}
                              className="font-bold text-blue-500 hover:underline"
                            >
                              1002
                            </Link>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero, fugit?
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wide text-yellow-800 bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white ">
                              Lorem ipsum dolor sit
                            </span>
                            .
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            16-10-2023
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Rp.4.000.000
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-sm text-gray-700">
                            <Link
                              to={"#"}
                              className="font-bold text-blue-500 hover:underline"
                            >
                              1003
                            </Link>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero, fugit?
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wide text-yellow-800 bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white ">
                              Lorem ipsum dolor sit
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            16-10-2023
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            Rp.3.000.000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
            <h2>Table</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div class="flex flex-col">
            <div class="m-2 overflow-x-auto">
              <div class="p-1.5 w-full inline-block align-middle">
                <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <div class="overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-slate-300 border-b-2 border-gray-200">
                        <tr>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                            User
                          </th>
                          <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                            Activity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="p-3 text-sm text-gray-700">
                            <Link
                              to={"#"}
                              className="font-bold text-blue-500 hover:underline"
                            >
                              1001
                            </Link>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wide text-yellow-800 bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white ">
                              Lorem ipsum dolor sit
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-sm text-gray-700">
                            <Link
                              to={"#"}
                              className="font-bold text-blue-500 hover:underline"
                            >
                              1002
                            </Link>
                          </td>

                          <td className="p-3 text-sm text-gray-700">
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wide text-yellow-800 bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white ">
                              Lorem ipsum dolor sit
                            </span>
                            .
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-sm text-gray-700">
                            <Link
                              to={"#"}
                              className="font-bold text-blue-500 hover:underline"
                            >
                              1003
                            </Link>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wide text-yellow-800 bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white ">
                              Lorem ipsum dolor sit
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
