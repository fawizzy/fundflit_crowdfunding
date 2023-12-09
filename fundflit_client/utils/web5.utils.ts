import Campaign from "@/types/campaigns.type";
import { uuid } from "short-uuid";

interface CampaignRecordType {
  data: Campaign;
  recordID: string;
}

export const protocolDefinition = {
  protocol: "http://test3",
  published: true,
  types: {
    campaign: {
      dataFormats: ["application/json"],
    },
  },
  structure: {
    campaign: {
      $actions: [
        {
          who: "anyone",
          can: "read",
        },
        {
          who: "anyone",
          can: "write",
        },
      ],
    },
  },
};

export const configureProtocol = async (web5: any, did: string | null) => {
  const { protocol, status } = await web5.dwn.protocols.configure({
    message: {
      definition: protocolDefinition,
    },
  });
  const response = await protocol.send(did);
  // console.log(response)

  console.log(status);
};

export async function queryProtocol(web5: any) {
  const { protocols } = await web5.dwn.protocols.query({
    message: {
      filter: {
        protocol: "test3",
      },
    },
  });
  console.log(protocols);
}

export const createCampaign = async (
  campaign: Campaign,
  web5: any,
  did: string | null
) => {
  try {
    const { record: initialrecord } = await web5.dwn.records.create({
      data: { ...campaign, id: uuid() },
      message: {
        schema: "blogpost",
        dataFormat: "application/json",
        protocol: "http://test3",
        protocolPath: "campaign",
        published: true,
      },
    });

    const { status: initialstatus } = await initialrecord.send(did);
    console.log(initialstatus);

    const conId = initialrecord.id;
    console.log(conId);

    return conId;
  } catch (e) {
    console.error("error: ", e);
    return;
  }
};

export const readCampaigns = async (did: any, web5: any) => {
  const { records, status } = await web5.dwn.records.query({
    from: did,
    message: {
      filter: {
        protocol: "http://test3",
        protocolPath: "campaign",
      },
    },
  });
  console.log("camapign records", records);

  // Handle error
  if (status.code !== 200) {
    console.error("Error querying records", status);
    throw new Error("Error querying records");
  }

  // Handle empty records
  if (records.length === 0) {
    console.log("No matching campaigns found");
    return [];
  }

  const campaignPromises = records.map(async (record: any) => {
    const data = await record.data.json();
    return { data, recordID: record.id } as {
      data: Campaign;
      recordID: string;
    };
  });

  const campaignArray = await Promise.all(campaignPromises);

  return campaignArray as { data: Campaign; recordID: string }[];
};

export const readCampaignDetail = async (
  did: string,
  web5: any,
  recordId: string
) => {
  try {
    const { records, status } = await web5.dwn.records.query({
      from: "",
      message: {
        filter: {
          recordId: recordId,
        },
      },
    });

    const campaignPromises = records.map(async (record: any) => {
      const data = await record.data.json();
      return data as {
        data: Campaign;
      };
    });

    const campaignArray = await Promise.all(campaignPromises);

    return campaignArray[0];
  } catch (e) {
    console.log("error fetching campaign detail: ", e);
  }
};
