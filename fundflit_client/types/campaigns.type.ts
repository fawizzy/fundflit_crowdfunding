type Campaign = {
  id: string;
  name: string;
  campaign_name: string;
  story: string;
  goal: number;
  current_funds: number;
  end_date: string;
  imageUrl: string;
  isPublic: boolean;
};

export default Campaign;