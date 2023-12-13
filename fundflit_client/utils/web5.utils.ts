import Campaign from "@/types/campaigns.type";
import { uuid } from "short-uuid";
import { createClient } from "@supabase/supabase-js";

//TODO: change to env variable
export const supabase = createClient(
  "https://afhzvfdehexjwwarwddg.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmaHp2ZmRlaGV4and3YXJ3ZGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDc1NTIsImV4cCI6MjAwNzg4MzU1Mn0.i7KPf2UQqd3r164zxA0ElaflaCPPHVB4QL936TiUUik"
);

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
      from: did,
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

export const savePublicCampaign = async (
  did: string | null,
  recordID: string
) => {
  try {
    const { data, error } = await supabase
      .from("did")
      .insert([{ did: did, recordID: recordID }]);
    if (error) {
      throw error;
    }
    console.log("Did inserted:", data);
  } catch (error) {
    console.error("Error inserting did:", error);
  }
};

export const readPublicCampaigns = async (web5: any) => {
  try {
    const { data } = await supabase.from("did").select("*");

    if (!data || data.length === 0) {
      return [];
    }

    const campaignArr = await Promise.all(
      data.map(async (campaign) => {
        return {
          data: await readCampaignDetail(campaign.did, web5, campaign.recordID),
          recordID: campaign.recordID,
        };
      })
    );

    return campaignArr as { data: Campaign; recordID: string }[];
  } catch (error) {
    console.error("Error fetching public campaigns:", error);
    return [];
  }
};
