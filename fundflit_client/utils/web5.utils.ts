import protocolDefinition from "@/public/assets/protocol/campaign.protocol.json";
import Campaign from "@/types/campaigns.type";

export const configureProtocol = async (web5: any) => {
  // query the list of existing protocols on the DWN
  const { protocols, status } = await web5.dwn.protocols.query({
    message: {
      filter: {
        protocol: protocolDefinition.protocol,
      },
    },
  });

  if (status.code !== 200) {
    alert("Error querying protocols");
    console.error("Error querying protocols", status);
    return;
  }

  // if the protocol already exists, we return
  if (protocols.length > 0) {
    console.log("Protocol already exists");
    return;
  }

  // configure protocol on local DWN
  const { status: configureStatus, protocol } =
    await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });

  console.log("Protocol configured", configureStatus, protocol);
};

export const createCampaign = async (
  campaign: Campaign,
  web5: any,
  did: string
) => {
  try {
    const { record } = await web5.dwn.records.create({
      data: { "@type": "campaign", ...campaign },
      message: {
        protocol: protocolDefinition.protocol,
        protocolPath: "campaign",
        schema: protocolDefinition.types.campaign.schema,
        dataFormat: protocolDefinition.types.campaign.dataFormats[0],
        recipient: did,
      },
    });

    const data = await record.data.json();
    console.log(data);
    // const camp = { record, id: record.id };

    //Sync the local dwm with the server dwm instantly instead of waiting for web5 to do it automatically
    // const { status: sendStatus } = await camp.record.send(did);

    console.log(record);

    return record.id;
  } catch (e) {
    console.error("error: ", e);
    return;
  }
};

export const readCampaigns = async (did: string, web5: any) => {
  console.log("readCAmpaigns", did)
  const { records } = await web5.dwn.records.query({
    from: did,
    message: {
      // filter: {
      //   protocol: protocolDefinition.protocol,
      // },
    },
  });

  console.log(records)

  const campaignPromises = records.map(async (record) => {
    const data = await record.data.json();
    return { data, recordID: record.id };
  });

  const campaignArray = await Promise.all(campaignPromises);
console.log(campaignArray)
  return campaignArray;
};

export const readCampaignDetail = async (
  did: string,
  web5: any,
  recordId: string
) => {
  const { records } = await web5.dwn.records.query({
    from: did,
    message: {
      filter: {
        protocol: protocolDefinition.protocol,
        protocolPath: "campaign",
      },
    },
   
  });

  console.log(records);

  // const campaign = await record.data;
  // console.log(campaign);

  // return campaign;
};
