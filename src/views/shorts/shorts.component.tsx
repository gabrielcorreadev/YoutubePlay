import React, { useState, useCallback, useRef, useEffect } from "react";
import { ActivityIndicator, Alert, Dimensions, FlatList } from 'react-native';
import { Left, Body, Thumbnail, View, Button, ListItem } from 'native-base';
import { Text, Icon } from '../../components/ui-element';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
import style from "./shorts.style";
import { videosService } from "../../services/youtube/videos.service";
import WebView from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

interface Props {
   videoCode?: string;
}


export default function ShortsView({ videoCode }: Props) {

   const { width, height } = Dimensions.get('window');
   const [videoId, setVideoId] = React.useState<string>();
   const [isLoading, setIsLoading] = React.useState<boolean>(false);
   const [visablePostIndex, setVisablePostIndex] = React.useState<number>(0);
   const [playing, setPlaying] = useState(false);
   const [dataSource, setDataSource] = React.useState<Array<any>>([
      {
         "kind": "youtube#video",
         "etag": "8nw0A9PGOFC1DtIqPEsi4hY9CGc",
         "id": "DTvS9lvRxZ8",
         "snippet": {
            "publishedAt": "2021-05-18T20:34:52Z",
            "channelId": "UCY1kMZp36IQSyNx_9h4mpCg",
            "title": "Backyard Squirrel Maze 2.0- The Walnut Heist",
            "description": "I bit off more than I could chew.  Join me this summer in my Creative Engineering class!! https://Monthly.com/MarkRober\n\nNEW Phat Gus Merch here!! https://markrober.store/\n\nMore info about my Creative Engineering Course- \n\nThis class is a hands-on, 30-day learning experience that will teach you how to use engineering and science to bring your creative ideas to life.\n\nDuring this class, I'm going to share with you my entire creative engineering process from start to finish. You're going to follow along with me as I fully design and engineer 3 brand new builds from scratch... from how I come up with the idea, all the way through bringing the final builds to life.\n\nThe best part is, over the month, you'll follow along with me and my process, side by side, and you will leave the class with 3 original, creative builds of your own.\n\nThis is the class I wish I had when I was starting out. It's designed to take your skills to make cool stuff to the next level, whether you're a beginner or a more experienced maker/engineer.\n\nThe class officially starts on June 7th so claim your spot if you're interested!\n\nSee you in class!\n\n-Mark",
            "thumbnails": {
               "default": {
                  "url": "https://i.ytimg.com/vi/DTvS9lvRxZ8/default.jpg",
                  "width": 120,
                  "height": 90
               },
               "medium": {
                  "url": "https://i.ytimg.com/vi/DTvS9lvRxZ8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
               },
               "high": {
                  "url": "https://i.ytimg.com/vi/DTvS9lvRxZ8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
               },
               "standard": {
                  "url": "https://i.ytimg.com/vi/DTvS9lvRxZ8/sddefault.jpg",
                  "width": 640,
                  "height": 480
               },
               "maxres": {
                  "url": "https://i.ytimg.com/vi/DTvS9lvRxZ8/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
               }
            },
            "channelTitle": "Mark Rober",
            "categoryId": "28",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
               "title": "Backyard Squirrel Maze 2.0- The Walnut Heist",
               "description": "I bit off more than I could chew.  Join me this summer in my Creative Engineering class!! https://Monthly.com/MarkRober\n\nNEW Phat Gus Merch here!! https://markrober.store/\n\nMore info about my Creative Engineering Course- \n\nThis class is a hands-on, 30-day learning experience that will teach you how to use engineering and science to bring your creative ideas to life.\n\nDuring this class, I'm going to share with you my entire creative engineering process from start to finish. You're going to follow along with me as I fully design and engineer 3 brand new builds from scratch... from how I come up with the idea, all the way through bringing the final builds to life.\n\nThe best part is, over the month, you'll follow along with me and my process, side by side, and you will leave the class with 3 original, creative builds of your own.\n\nThis is the class I wish I had when I was starting out. It's designed to take your skills to make cool stuff to the next level, whether you're a beginner or a more experienced maker/engineer.\n\nThe class officially starts on June 7th so claim your spot if you're interested!\n\nSee you in class!\n\n-Mark"
            },
            "defaultAudioLanguage": "en"
         },
         "contentDetails": {
            "duration": "PT19M13S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {

            },
            "projection": "rectangular"
         },
         "statistics": {
            "viewCount": "6661481",
            "likeCount": "738899",
            "dislikeCount": "2619",
            "favoriteCount": "0",
            "commentCount": "37243"
         }
      },
      {
         "kind": "youtube#video",
         "etag": "HE7OsSR2obC5e11hf-xaHAzG5B4",
         "id": "OOMxU9f1FBU",
         "snippet": {
            "publishedAt": "2021-05-18T15:00:02Z",
            "channelId": "UC3IZKseVpdzPSBaWxBxundA",
            "title": "BTS (방탄소년단) 'Butter' Official Teaser",
            "description": "BTS (방탄소년단) 'Butter' Official Teaser\n\nBTS (방탄소년단) 'Butter' Official MV will be released at 1PM (KST), 12AM (ET) on May 21, 2021\n\n\n\nCredits: \nDirector: Yong Seok Choi (Lumpens)\n1st AD: Jihye Yoon (Lumpens)\n2nd AD: Ran Ro (Lumpens)\nPA: Soeyoung Park, Minsu Kim\n\nDirector of Photography: Hyunwoo Nam (MOTHER)\nB Camera Operator: Eumko\nFocus Puller: Sangwoo Yun, Youngwoo Lee\n2nd AC: Eunki Kim, Eunil Lee\n3rd AC: Youngseo Park\nDIT: Yuntae Go\nTechno Crane: Service Vision\n\nGaffer: Song Hyunsuk (Real Lighting)\nLighting Crew: Choi Jung Hyun, Hwang Uigyu, Park Gyutae, Park Yeonghwan, Park Cheonil, Lee Harim, Park Nojun, Lee Jaeheung, Lee Seonggyun, Lim Seokgyu\n\nArt Director: Bona Kim, Jinsil Park (MU:E)\nAssistant Art team: Yeri Kang, Jieun Yoon(MU:E)\nArt-team Manager: ilho Heo (MU:E)\n\nShow Light: Sung Kang Jun (Jshow Company)\nMinseok Choi, Minseok Choi, Yebum Bang, Junho Jeong, Jiwoong Han, Yerim Kwon, Haeyoung Kang\n\nProducer: Emma Sungeun Kim (GE PRODUCTION)\nProduction assistant: An Ju Young, Han Ji Hoon\n\nVFX: PLASTIC BEACH\nVFX Supervisor: OHZEON\nVFX Assistant Supervisor: JOJEEM\nVFX Project Manager: Song Chanyoung, Jeong Jieun\nVFX Producer: Jang Kyutae, Ahn Sohyun\n3D Artist: Lee Kwangwon, Kim Doyeon, Lee Jeonghwa, Jeon Jiwon, Kim Hyeji\n2D Artist: Jang Gihoon, Lee Hyunjun, Shin Hyeonsung\nFX Artist: We Jungin\n\nDI: LUCID COLOUR\nColorist: Wonseok Ko\nDI Crew: Dain Kim, Hwa Dong Jeon, Jaeyeon Baek, Somi Na, Seonyoung Lee\nDI Producer: Sooyun Hyun\n\nVisual Creative: Nu Kim, Lee Sun Kyoung, Kang Ju Eun, Kim Ga Eun, Hyo Kim, Cha Yeon Hwa\nPerformance Directing: Son Sung Deuk, Lee Byung Eun, Yoon Seong Eun, Woo Hyunwoo, Hyewon Park\nArtist Management: Jang Jin Gu, Kim Su Bin, An Da Sol, Park Jun Tae, Yun Taewoong, Lee Seung Byung, Lee Jung Min, Lee Hyeon Ki\n\n\n\nBIGHIT MUSIC. Rights are reserved selectively in the video. Unauthorized reproduction is a violation of applicable laws. Manufactured by BIGHIT MUSIC, Seoul, Korea.\n\n\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://channels.vlive.tv/FE619 \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://i.youku.com/btsofficial \nhttp://btsblog.ibighit.com\n\n\n#BTS #방탄소년단 #BTS_Butter #Teaser",
            "thumbnails": {
               "default": {
                  "url": "https://i.ytimg.com/vi/OOMxU9f1FBU/default.jpg",
                  "width": 120,
                  "height": 90
               },
               "medium": {
                  "url": "https://i.ytimg.com/vi/OOMxU9f1FBU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
               },
               "high": {
                  "url": "https://i.ytimg.com/vi/OOMxU9f1FBU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
               },
               "standard": {
                  "url": "https://i.ytimg.com/vi/OOMxU9f1FBU/sddefault.jpg",
                  "width": 640,
                  "height": 480
               },
               "maxres": {
                  "url": "https://i.ytimg.com/vi/OOMxU9f1FBU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
               }
            },
            "channelTitle": "HYBE LABELS",
            "tags": [
               "BIGHIT",
               "빅히트",
               "방탄소년단",
               "BTS",
               "BANGTAN",
               "방탄"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "defaultLanguage": "ko",
            "localized": {
               "title": "BTS (방탄소년단) 'Butter' Official Teaser",
               "description": "BTS (방탄소년단) 'Butter' Official Teaser\n\nBTS (방탄소년단) 'Butter' Official MV will be released at 1PM (KST), 12AM (ET) on May 21, 2021\n\n\n\nCredits: \nDirector: Yong Seok Choi (Lumpens)\n1st AD: Jihye Yoon (Lumpens)\n2nd AD: Ran Ro (Lumpens)\nPA: Soeyoung Park, Minsu Kim\n\nDirector of Photography: Hyunwoo Nam (MOTHER)\nB Camera Operator: Eumko\nFocus Puller: Sangwoo Yun, Youngwoo Lee\n2nd AC: Eunki Kim, Eunil Lee\n3rd AC: Youngseo Park\nDIT: Yuntae Go\nTechno Crane: Service Vision\n\nGaffer: Song Hyunsuk (Real Lighting)\nLighting Crew: Choi Jung Hyun, Hwang Uigyu, Park Gyutae, Park Yeonghwan, Park Cheonil, Lee Harim, Park Nojun, Lee Jaeheung, Lee Seonggyun, Lim Seokgyu\n\nArt Director: Bona Kim, Jinsil Park (MU:E)\nAssistant Art team: Yeri Kang, Jieun Yoon(MU:E)\nArt-team Manager: ilho Heo (MU:E)\n\nShow Light: Sung Kang Jun (Jshow Company)\nMinseok Choi, Minseok Choi, Yebum Bang, Junho Jeong, Jiwoong Han, Yerim Kwon, Haeyoung Kang\n\nProducer: Emma Sungeun Kim (GE PRODUCTION)\nProduction assistant: An Ju Young, Han Ji Hoon\n\nVFX: PLASTIC BEACH\nVFX Supervisor: OHZEON\nVFX Assistant Supervisor: JOJEEM\nVFX Project Manager: Song Chanyoung, Jeong Jieun\nVFX Producer: Jang Kyutae, Ahn Sohyun\n3D Artist: Lee Kwangwon, Kim Doyeon, Lee Jeonghwa, Jeon Jiwon, Kim Hyeji\n2D Artist: Jang Gihoon, Lee Hyunjun, Shin Hyeonsung\nFX Artist: We Jungin\n\nDI: LUCID COLOUR\nColorist: Wonseok Ko\nDI Crew: Dain Kim, Hwa Dong Jeon, Jaeyeon Baek, Somi Na, Seonyoung Lee\nDI Producer: Sooyun Hyun\n\nVisual Creative: Nu Kim, Lee Sun Kyoung, Kang Ju Eun, Kim Ga Eun, Hyo Kim, Cha Yeon Hwa\nPerformance Directing: Son Sung Deuk, Lee Byung Eun, Yoon Seong Eun, Woo Hyunwoo, Hyewon Park\nArtist Management: Jang Jin Gu, Kim Su Bin, An Da Sol, Park Jun Tae, Yun Taewoong, Lee Seung Byung, Lee Jung Min, Lee Hyeon Ki\n\n\n\nBIGHIT MUSIC. Rights are reserved selectively in the video. Unauthorized reproduction is a violation of applicable laws. Manufactured by BIGHIT MUSIC, Seoul, Korea.\n\n\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://channels.vlive.tv/FE619 \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://i.youku.com/btsofficial \nhttp://btsblog.ibighit.com\n\n\n#BTS #방탄소년단 #BTS_Butter #Teaser"
            },
            "defaultAudioLanguage": "en"
         },
         "contentDetails": {
            "duration": "PT24S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {

            },
            "projection": "rectangular"
         },
         "statistics": {
            "viewCount": "32468767",
            "likeCount": "3680787",
            "dislikeCount": "21063",
            "favoriteCount": "0",
            "commentCount": "1023120"
         }
      },
      {
         "kind": "youtube#video",
         "etag": "dPSjX-MjNG2oT8UEAtQOnvi3Aa8",
         "id": "SnMs4QbUwm0",
         "snippet": {
            "publishedAt": "2021-05-18T22:57:08Z",
            "channelId": "UCrqsNpKuDQZreGaxBL_a5Jg",
            "title": "Deji VS Vinnie Hacker Press Conference - Social Gloves #BattleofthePlatforms",
            "description": "Don't miss the Social Gloves: Battle of the Platforms live press conference from Fred Segal in L.A. at 4:30 ET/1:30 pm PT. Meet all the fighters and be the first to hear some exciting announcements!\n\nBuy and watch the fight https://socialgloves.livexlive.com",
            "thumbnails": {
               "default": {
                  "url": "https://i.ytimg.com/vi/SnMs4QbUwm0/default.jpg",
                  "width": 120,
                  "height": 90
               },
               "medium": {
                  "url": "https://i.ytimg.com/vi/SnMs4QbUwm0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
               },
               "high": {
                  "url": "https://i.ytimg.com/vi/SnMs4QbUwm0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
               },
               "standard": {
                  "url": "https://i.ytimg.com/vi/SnMs4QbUwm0/sddefault.jpg",
                  "width": 640,
                  "height": 480
               },
               "maxres": {
                  "url": "https://i.ytimg.com/vi/SnMs4QbUwm0/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
               }
            },
            "channelTitle": "Deji",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en-GB",
            "localized": {
               "title": "Deji VS Vinnie Hacker Press Conference - Social Gloves #BattleofthePlatforms",
               "description": "Don't miss the Social Gloves: Battle of the Platforms live press conference from Fred Segal in L.A. at 4:30 ET/1:30 pm PT. Meet all the fighters and be the first to hear some exciting announcements!\n\nBuy and watch the fight https://socialgloves.livexlive.com"
            },
            "defaultAudioLanguage": "en-GB"
         },
         "contentDetails": {
            "duration": "PT2H13M43S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {

            },
            "projection": "rectangular"
         },
         "statistics": {
            "viewCount": "1220724",
            "likeCount": "50002",
            "dislikeCount": "685",
            "favoriteCount": "0",
            "commentCount": "5131"
         }
      },
      {
         "kind": "youtube#video",
         "etag": "W0XtkI4lndk09NbXpyAlwbRkY_4",
         "id": "I4AgeDIrHGY",
         "snippet": {
            "publishedAt": "2021-05-17T21:59:59Z",
            "channelId": "UCRijo3ddMTht_IHyNSNXpNQ",
            "title": "Bucket List: South Africa",
            "description": "BUCKET LIST IS BACK! Bungee jumping, feeding elephants, paragliding, chilling with penguins and rhino rescue... South Africa has it all! \n► Thanks for subscribing! - http://bit.ly/SubDudePerfect\n\n► Order our LIMITED EDITION Bucket List: South Africa shirt: \"That's Happy.\"\nhttps://dudeperfect.store/products/thats-happy-tee\n\n► Stay tuned for our behind the scenes video! Dropping next week on DP+\n► Subscribe so you don't miss it: http://bit.ly/DPplusSubscribe\n\n►Check out some of the awesome things we did for yourself! \nView the location/activity websites below!\n* Rappelling (Abseiling) - https://abseilafrica.co.za\n* Rhino 911 - http://www.rhino911.com\n* Shark Cage Diving - https://sharkwatchsa.com/en/home/\n* Bungee Jump - https://www.faceadrenalin.com\n* Paragliding in Cape Town - https://flycapetown.co.za\n* Helicopter Tour - https://flythehuey.co.za\n* Scuba Safari - https://piscesdivers.co.za\n* Table Mountain Aerial Cableway - https://www.tablemountain.net \n\n#BucketList\n\nNEXT LEVEL STUFF \n-------------------------------------------\n🎒 NEW Merch - http://bit.ly/DPStore\n🎮 Play our FREE iPhone game! - http://smarturl.it/DudePerfect2\n📱 Text us - (469) 205-7005\n🔔 Hit the bell next to Subscribe so you don't miss a video!\n👨🏻\u200d💻 Watch our newest vids! - http://bit.ly/NewDPVids\n📕 Read our Book - \"Go Big\" - http://amzn.to/OYdZ2s\n\nFollow our Instagrams so we can be best friends \n-------------------------------------------\n🏆 http://Instagram.com/DudePerfect\n🧔🏻 http://Instagram.com/TylerNToney\n👱🏻\u200d♂️ http://Instagram.com/Cody_Jones_\n🙋🏻\u200d♂️ http://Instagram.com/CobyCotton\n👨\u200d🦰 http://Instagram.com/GarrettHilbert\n⛹🏻\u200d♂️ http://Instagram.com/CoryCotton\n-------------------------------------------\nBonus points if you're still reading this! \nComment: That's happy.\n\nClick here to learn more about Dude Perfect:\nhttp://bit.ly/AboutDudePerfect\n\nAs always...Go Big and God Bless!\n- Your friends at Dude Perfect\n\nBusiness or Media, please contact us at: \nDude@DudePerfect.com\n\n------------\n\n5 Best Friends and a Panda.\nIf you like Sports + Comedy, come join the Dude Perfect team!\n\nBest known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! \n\nPound it 👊🏻 Noggin 🙇🏻\u200d♂️ \n- Dude Perfect",
            "thumbnails": {
               "default": {
                  "url": "https://i.ytimg.com/vi/I4AgeDIrHGY/default.jpg",
                  "width": 120,
                  "height": 90
               },
               "medium": {
                  "url": "https://i.ytimg.com/vi/I4AgeDIrHGY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
               },
               "high": {
                  "url": "https://i.ytimg.com/vi/I4AgeDIrHGY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
               },
               "standard": {
                  "url": "https://i.ytimg.com/vi/I4AgeDIrHGY/sddefault.jpg",
                  "width": 640,
                  "height": 480
               },
               "maxres": {
                  "url": "https://i.ytimg.com/vi/I4AgeDIrHGY/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
               }
            },
            "channelTitle": "Dude Perfect",
            "tags": [
               "dude perfect",
               "dude perfect stereotypes",
               "dude perfect water bottle flip",
               "bottle flip",
               "water bottle flip",
               "dude perfect bottle flip",
               "dude perfect basketball",
               "dp",
               "dude perfect world record",
               "edition",
               "nerf",
               "trick shots",
               "trick shot",
               "family",
               "ping pong",
               "bowling",
               "clean",
               "family friendly",
               "bubble wrap",
               "soccer",
               "football",
               "spinner",
               "spinners",
               "fidget spinners",
               "dude",
               "bucket",
               "list",
               "south",
               "africa",
               "bungee",
               "jump",
               "bridge",
               "rhino",
               "safari",
               "photo",
               "scuba",
               "rappel",
               "abseil",
               "leopard",
               "lion",
               "elephant",
               "giraffe",
               "travel",
               "beautiful",
               "table",
               "mountain"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
               "title": "Bucket List: South Africa",
               "description": "BUCKET LIST IS BACK! Bungee jumping, feeding elephants, paragliding, chilling with penguins and rhino rescue... South Africa has it all! \n► Thanks for subscribing! - http://bit.ly/SubDudePerfect\n\n► Order our LIMITED EDITION Bucket List: South Africa shirt: \"That's Happy.\"\nhttps://dudeperfect.store/products/thats-happy-tee\n\n► Stay tuned for our behind the scenes video! Dropping next week on DP+\n► Subscribe so you don't miss it: http://bit.ly/DPplusSubscribe\n\n►Check out some of the awesome things we did for yourself! \nView the location/activity websites below!\n* Rappelling (Abseiling) - https://abseilafrica.co.za\n* Rhino 911 - http://www.rhino911.com\n* Shark Cage Diving - https://sharkwatchsa.com/en/home/\n* Bungee Jump - https://www.faceadrenalin.com\n* Paragliding in Cape Town - https://flycapetown.co.za\n* Helicopter Tour - https://flythehuey.co.za\n* Scuba Safari - https://piscesdivers.co.za\n* Table Mountain Aerial Cableway - https://www.tablemountain.net \n\n#BucketList\n\nNEXT LEVEL STUFF \n-------------------------------------------\n🎒 NEW Merch - http://bit.ly/DPStore\n🎮 Play our FREE iPhone game! - http://smarturl.it/DudePerfect2\n📱 Text us - (469) 205-7005\n🔔 Hit the bell next to Subscribe so you don't miss a video!\n👨🏻\u200d💻 Watch our newest vids! - http://bit.ly/NewDPVids\n📕 Read our Book - \"Go Big\" - http://amzn.to/OYdZ2s\n\nFollow our Instagrams so we can be best friends \n-------------------------------------------\n🏆 http://Instagram.com/DudePerfect\n🧔🏻 http://Instagram.com/TylerNToney\n👱🏻\u200d♂️ http://Instagram.com/Cody_Jones_\n🙋🏻\u200d♂️ http://Instagram.com/CobyCotton\n👨\u200d🦰 http://Instagram.com/GarrettHilbert\n⛹🏻\u200d♂️ http://Instagram.com/CoryCotton\n-------------------------------------------\nBonus points if you're still reading this! \nComment: That's happy.\n\nClick here to learn more about Dude Perfect:\nhttp://bit.ly/AboutDudePerfect\n\nAs always...Go Big and God Bless!\n- Your friends at Dude Perfect\n\nBusiness or Media, please contact us at: \nDude@DudePerfect.com\n\n------------\n\n5 Best Friends and a Panda.\nIf you like Sports + Comedy, come join the Dude Perfect team!\n\nBest known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! \n\nPound it 👊🏻 Noggin 🙇🏻\u200d♂️ \n- Dude Perfect"
            },
            "defaultAudioLanguage": "en"
         },
         "contentDetails": {
            "duration": "PT31M39S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {

            },
            "projection": "rectangular"
         },
         "statistics": {
            "viewCount": "6814159",
            "likeCount": "441298",
            "dislikeCount": "3122",
            "favoriteCount": "0",
            "commentCount": "30221"
         }
      },
      {
         "kind": "youtube#video",
         "etag": "Q0PhaEoih0legd4nMXgQIJfAbIY",
         "id": "sI6EhfwnbhE",
         "snippet": {
            "publishedAt": "2021-05-18T17:00:09Z",
            "channelId": "UCkvK_5omS-42Ovgah8KRKtg",
            "title": "The TRUTH About My Car Accident.",
            "description": "Today we are going on a journey. Here is what has been happening in my life for the last month.\nMy best friend Daniel and I were in a horrible car accident that changed our lives and was very haunting. It's been exactly ONE month since everything happened and I wanted to talk about everything. I never expected sympathy but the amount of people who were celebrating our accident, was truly disturbing. Here is the TRUTH about everything. Thank you all so much for all the well wishes and love, it's been overwhelming and such appreciated.\n\nWANT MORE? 🐶 Meet My NEW Pomeranian Puppy! Lucky Number 7! ▷ https://youtu.be/4oEwYP1nR6I\n💄 SHOP the Velour Liquid Lipstick Collection: https://bit.ly/3gdAIuQ \n\n *SHOP: http://www.jeffreestarcosmetics.com \n+ FOLLOW MY BRAND ON Instagram: http://instagram.com/jeffreestarcosmetics \n+FOLLOW ME ON IG: http://instagram.com/jeffreestar \n+ SNAPCHAT: jeffreestar \n+ TWITTER: @jeffreestar\n\nCLIPS USED IN THIS VIDEO:\nCourtesy of E! News - https://www.youtube.com/watch?v=tadUZ6pB__A\n\nWATCH MORE VIDEOS...................❤️\n\n💉 WATCH ME GET BOTOX BEFORE THE LOCKDOWN ▷ https://bit.ly/2wHzUw9\n\n💜 Swatching EVERY Liquid Lipstick I’ve EVER Made ▷ https://www.youtube.com/watch?v=RfcY3J6CjgQ&t=2055s\n\n🔮 WATCH FULL FACE OF BRANDS THAT HATE ME  ► https://bit.ly/2O6GgJi",
            "thumbnails": {
               "default": {
                  "url": "https://i.ytimg.com/vi/sI6EhfwnbhE/default.jpg",
                  "width": 120,
                  "height": 90
               },
               "medium": {
                  "url": "https://i.ytimg.com/vi/sI6EhfwnbhE/mqdefault.jpg",
                  "width": 320,
                  "height": 180
               },
               "high": {
                  "url": "https://i.ytimg.com/vi/sI6EhfwnbhE/hqdefault.jpg",
                  "width": 480,
                  "height": 360
               },
               "standard": {
                  "url": "https://i.ytimg.com/vi/sI6EhfwnbhE/sddefault.jpg",
                  "width": 640,
                  "height": 480
               },
               "maxres": {
                  "url": "https://i.ytimg.com/vi/sI6EhfwnbhE/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
               }
            },
            "channelTitle": "jeffreestar",
            "tags": [
               "jeffree star",
               "jeffree star car accident",
               "jeffree star cosmetics",
               "Jeffree rolls Royce",
               "Wyoming",
               "Jeffree star Wyoming",
               "Makeup tutorial"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
               "title": "The TRUTH About My Car Accident.",
               "description": "Today we are going on a journey. Here is what has been happening in my life for the last month.\nMy best friend Daniel and I were in a horrible car accident that changed our lives and was very haunting. It's been exactly ONE month since everything happened and I wanted to talk about everything. I never expected sympathy but the amount of people who were celebrating our accident, was truly disturbing. Here is the TRUTH about everything. Thank you all so much for all the well wishes and love, it's been overwhelming and such appreciated.\n\nWANT MORE? 🐶 Meet My NEW Pomeranian Puppy! Lucky Number 7! ▷ https://youtu.be/4oEwYP1nR6I\n💄 SHOP the Velour Liquid Lipstick Collection: https://bit.ly/3gdAIuQ \n\n *SHOP: http://www.jeffreestarcosmetics.com \n+ FOLLOW MY BRAND ON Instagram: http://instagram.com/jeffreestarcosmetics \n+FOLLOW ME ON IG: http://instagram.com/jeffreestar \n+ SNAPCHAT: jeffreestar \n+ TWITTER: @jeffreestar\n\nCLIPS USED IN THIS VIDEO:\nCourtesy of E! News - https://www.youtube.com/watch?v=tadUZ6pB__A\n\nWATCH MORE VIDEOS...................❤️\n\n💉 WATCH ME GET BOTOX BEFORE THE LOCKDOWN ▷ https://bit.ly/2wHzUw9\n\n💜 Swatching EVERY Liquid Lipstick I’ve EVER Made ▷ https://www.youtube.com/watch?v=RfcY3J6CjgQ&t=2055s\n\n🔮 WATCH FULL FACE OF BRANDS THAT HATE ME  ► https://bit.ly/2O6GgJi"
            },
            "defaultAudioLanguage": "en"
         },
         "contentDetails": {
            "duration": "PT32M28S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {

            },
            "projection": "rectangular"
         },
         "statistics": {
            "viewCount": "1054415",
            "likeCount": "49949",
            "dislikeCount": "3762",
            "favoriteCount": "0",
            "commentCount": "7405"
         }
      }
   ]);
   const [error, setError] = React.useState<any>(null);
   const pageSize: number = 50;
   const typeResult = { channel: 'youtube#channel', video: 'youtube#video' };

   const params = {
      key: 'AIzaSyD35CDtIMjHJrW9USpTFBRANp22tjCLd1o',
      part: 'snippet',
      maxResults: pageSize,
      q: ''
   }

   useEffect(() => {
      setVideoId(videoCode);
   }, []);

   const onStateChange = useCallback((state) => {
      if (state === "ended") {
         setPlaying(false);
         Alert.alert("video has finished playing!");
      }
   }, []);

   const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
   }, []);

   const loadData = () => {

      setIsLoading(true);
      console.log(params)
      videosService.listVideos(params).then((response) => {
         console.log(response.data.items)
         setDataSource(response.data.items);
      }).catch((error) => {
         console.log(error.response)
         setError(error.response);
      }).then(() => {
         setIsLoading(false);
      })
   }

   const Placeholder = () => {
      return (
         <View>
            <ActivityIndicator size="large" color="white" />
         </View>
      );
   };

   const _youTubeRef = React.createRef<YouTube>();

   const onViewableItemsChanged = ({ viewableItems, changed }:any) => {
      console.log("Visible items are", viewableItems);
      console.log("Changed in this iteration", changed);
   }


   const TopBar = ({ item }: any) => (
      <View
         style={style.view_top_bar}
      >
         <View style={{ flex: 1 }}>
            <ListItem icon noBorder>
               <Left>
                  <Thumbnail small source={{ uri: 'https://yt3.ggpht.com/ytc/AAUvwnhKuSq0YjbSC0DtnaHxh2LNhhfzg1aY14YB91cR6A=s48-c-k-c0x00ffffff-no-rj' }} />
               </Left>
               <Body>
                  <Text>{item?.snippet?.channelTitle}</Text>
               </Body>
            </ListItem>
         </View>
      </View>
   );

   const CenterNavigation = ({ item }: any) => (
      <View
         style={style.view_navigation}
      >
         <ListItem thumbnail style={style.item_navigation}>
            <Left>
               <Button style={style.nav_button}>
                  <Icon type="Feather" active name="thumbs-up" />
                  <Text style={{ textAlign: 'center' }} numberOfLines={1}>{item?.statistics?.likeCount}</Text>
               </Button>

            </Left>
         </ListItem>
         <ListItem thumbnail style={style.item_navigation}>
            <Left>
               <Button style={style.nav_button}>
                  <Icon type="Feather" active name="thumbs-down" />
                  <Text style={{ textAlign: 'center' }} numberOfLines={1}>{item?.statistics?.dislikeCount}</Text>
               </Button>
            </Left>
         </ListItem>
         <ListItem thumbnail style={style.item_navigation}>
            <Left>
               <Button style={style.nav_button}>
                  <Icon type="Feather" active name="message-square" />
                  <Text style={{ textAlign: 'center' }} numberOfLines={1}>{item?.statistics?.commentCount}</Text>
               </Button>
            </Left>
         </ListItem>
         <ListItem noBorder thumbnail style={style.item_navigation}>
            <Left>
               <Button style={style.nav_button_icon}>
                  <Icon type="Feather" active name="share-2" />
               </Button>
            </Left>
         </ListItem>
      </View>
   );

   const BottomBar = ({ item }: any) => (
      <View
         style={style.view_bottom}
      >
         <View style={{ flex: 1, alignSelf: 'center' }}>
            <ListItem noBorder>
               <Text numberOfLines={1}>{item?.snippet?.title}</Text>
            </ListItem>
         </View>
      </View>
   );

   const RenderRow = ({ item }: any) => {
      return (
      <View>
            <TopBar item={item} />
            <CenterNavigation item={item} />
            <BottomBar item={item} />
         </View>);
   };

   return (<View style={{flex:1}}>
                <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/" + videoCode }}
        />
                 <FlatList
                 style={{position:'absolute', zIndex:100}}
            pagingEnabled
            data={dataSource}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item, index }) =>
               <RenderRow item={item} />
            }
         />

          </View>);
}