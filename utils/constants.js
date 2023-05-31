
export const GOOGLE_API_KEY = "AIzaSyAxs1nlueNT1ARxbFGt7Hvg_29KrptT1Xk"

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=` + GOOGLE_API_KEY

export const YOUTUBE_SEARCH_SUGGESTIONS_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' 