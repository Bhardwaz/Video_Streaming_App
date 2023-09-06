export const GOOGLE_API_KEY = "AIzaSyAxs1nlueNT1ARxbFGt7Hvg_29KrptT1Xk";

export const YOUTUBE_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=` +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_RECOMMENDED_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=AIzaSyAxs1nlueNT1ARxbFGt7Hvg_29KrptT1Xk`;

export const IMG_URL =
  "https://media.licdn.com/dms/image/D4D03AQEvA4Tm335KxQ/profile-displayphoto-shrink_800_800/0/1680664265579?e=2147483647&v=beta&t=Vtx9Z10ThBH9I78ZX3xIhTGrpqIK9sVUVelwd7HNbx8";
