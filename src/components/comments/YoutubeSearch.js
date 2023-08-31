import "./Blog.scss"
import axios from "axios";
import { useState, useEffect } from 'react';
import moment from "moment/moment";


const YoutubeSearch = () => {
    const [video, setVideo] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {

    }, [])

    const handleSearchYoutube = async () => {
        try {
            let res = await axios({
                "method": "GET",
                "url": 'https://www.googleapis.com/youtube/v3/search',
                "headers": {
                    'Cache-Control': 'max-age=0',
                },
                "params": {
                    'part': 'snippet',
                    'maxResults': '20',
                    'key': 'AIzaSyBcy7R0aIeh2XYHIDbeOUXa1DefetlMi9Q',
                    "type": "video",
                    'q': query
                }
            })

            if (res && res.data && res.data.items) {
                let raw = res.data.items;
                let result = [];
                if (raw && raw.length > 0) {
                    raw.map(item => {
                        let obj = {};
                        obj.id = item.id.videoId;
                        obj.title = item.snippet.title;
                        obj.createdAt = item.snippet.pubishedAt;
                        obj.author = item.snippet.channelTitle;
                        obj.description = item.snippet.description;

                        result.push(obj);
                        console.log(">>>check respond :", res);
                    })
                }

                setVideo(result)
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleSearchYoutube();

    return (
        <div className="ytb-search-container">
            <div className="yt-search">
                <input type="text" placeholder="Search"
                    value={query}
                    onChange={(event) => { setQuery(event.target.value) }}
                />
                <button type="button">Search</button>
            </div>
            <hr />
            {video && video.length > 0 &&
                video.map(item => {
                    <div className="ytb-result" key={item.id}>
                        <div className="left">
                            <iframe className="iframe-yt"
                                src={`https://www.youtube.com/embed/${item.id}`}>

                            </iframe>
                        </div>
                        <div className="right">
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="created-time">
                                Created At : {moment(item.createdAt).format('DD/MM/yyyy')}
                            </div>
                            <div className="author">
                                Author: {item.author}
                            </div>
                            <div className="description">
                                Description:{item.description}"
                            </div>
                            <button className="right-btn">New</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "IgLyOqSLK1hBSO3UiiXektsyFGM",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 48231,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "rdul6lokR4qhI0JTIMlZjxF4flo",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "9mTgKFjJRXg"
//         },
//         "snippet": {
//           "publishedAt": "2023-07-14T15:03:06Z",
//           "channelId": "UClb90NQQcskPUGDIXsQEz5Q",
//           "title": "React Hooks Crash Course (useMemo, useCallback and more).",
//           "description": "Check out my courses to become a PRO https://developedbyed.com Starting with useState, we explore how to leverage this ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/9mTgKFjJRXg/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/9mTgKFjJRXg/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/9mTgKFjJRXg/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "developedbyed",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-07-14T15:03:06Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "M7mjreM53ZQKcLf94BT6LwhGOTY",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "TNhaISOUy6Q"
//         },
//         "snippet": {
//           "publishedAt": "2021-01-18T18:20:26Z",
//           "channelId": "UCsBjURrPoezykLs9EqgamOA",
//           "title": "10 React Hooks Explained // Plus Build your own from Scratch",
//           "description": "React hooks provide a highly-efficient was to tap into framework features and organize reactive logic. Learn how use every built-in ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/TNhaISOUy6Q/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/TNhaISOUy6Q/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/TNhaISOUy6Q/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Fireship",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-01-18T18:20:26Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "SA8k7GBFLLOvVcbZIstC2l1LpPM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "-4XpG5_Lj_o"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-04T12:33:41Z",
//           "channelId": "UCrL69sErRwEyr7_p0qVCkOQ",
//           "title": "Learn React Hooks: useEffect - Simply Explained!",
//           "description": "Join The Discord! → https://discord.cosdensolutions.io Source Code ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/-4XpG5_Lj_o/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/-4XpG5_Lj_o/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/-4XpG5_Lj_o/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Cosden Solutions",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-05-04T12:33:41Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "dkQo9HjimBiVOlljn5F2hVo1ivQ",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "LlvBzyy-558"
//         },
//         "snippet": {
//           "publishedAt": "2021-08-02T14:00:16Z",
//           "channelId": "UC8S4rDRZn6Z_StJ-hh7ph8g",
//           "title": "React Hooks Course - All React Hooks Explained",
//           "description": "In this video I will teach you guys every single core hook from React! Code: https://github.com/machadop1407/react-hooks-course ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/LlvBzyy-558/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/LlvBzyy-558/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/LlvBzyy-558/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "PedroTech",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-08-02T14:00:16Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "yhUykrEKMSstgAL5dIZyvhYftSI",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "dldjCPa9ZW4"
//         },
//         "snippet": {
//           "publishedAt": "2023-03-14T13:00:33Z",
//           "channelId": "UC8S4rDRZn6Z_StJ-hh7ph8g",
//           "title": "React Hook Form with ZOD Tutorial - React and Typescript Form Validation Tutorial",
//           "description": "To try everything Brilliant has to offer—free—for a full 30 days, visit http://brilliant.org/PedroTech/. The first 200 of you will get 20% ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/dldjCPa9ZW4/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/dldjCPa9ZW4/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/dldjCPa9ZW4/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "PedroTech",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-03-14T13:00:33Z"
//         }
//       }
//     ]
//   }
