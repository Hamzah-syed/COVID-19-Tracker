import React from "react";

const ProviceDataTabel = ({ provinceData }) => {
  return (
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">
              Province
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
              Infected
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
              Recovered
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
              Deaths
            </th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody className="">
          {provinceData.length ? (
            provinceData.map((pData, i) => (
              <tr key={i}>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  {pData.proName === null ? "No Province" : pData.proName}
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  {pData.proConfirmed}
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  {pData.proRecovered}
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  {pData.proDeaths}
                </td>
              </tr>
            ))
          ) : (
            <tr className="">
              <td
                colSpan="4"
                className="  py-2 bg-red-500 text-white  text-center w-full bg-opacity-75 border-solid  border-red-600"
              >
                Please Select Country
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProviceDataTabel;
