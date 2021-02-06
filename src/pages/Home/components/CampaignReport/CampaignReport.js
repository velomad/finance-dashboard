import React from "react";
import { Card } from "../../../../components";

const CampaignReport = () => {

  return (
    <div className="grid grid-cols-4 gap-8 p-10">
      <Card
        shadow="lg"
        rounded="3xl"
        classes="p-8 border-2 border-gray-50 bg-white"
        icon={`<svg className="w-6 h-6 text-gray-500 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`}
      >
        This is Card component
      </Card>
      <Card
        shadow="lg"
        rounded="3xl"
        classes="p-8 border-2 border-gray-50 bg-white"
        // icon={`<svg className="w-6 h-6 text-gray-500 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`}
      >
        this is card component
      </Card>
      <Card
        shadow="lg"
        rounded="3xl"
        classes="p-8 border-2 border-gray-50 bg-white"
        icon={`<svg className="w-6 h-6 text-gray-500 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`}
      >
        this is card component
      </Card>
      <Card
        shadow="lg"
        rounded="3xl"
        classes="p-8 border-2 border-gray-50 bg-white"
        icon={`<svg className="w-6 h-6 text-gray-500 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`}
      >
        this is card component
      </Card>

    </div>
  );
};

export default CampaignReport;
