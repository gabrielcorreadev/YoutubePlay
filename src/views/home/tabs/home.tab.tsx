import React, { useEffect } from "react";
import { View } from 'native-base';
import { CardVideo, Text, Spinner } from '../../../components/ui-element';
import { SearchResultScreenNavigationProp, SearchResultScreenRouteProp } from "../../../models/navigation/type";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import { LoadingCardVideo } from "../../../components/skeleton/loadingCardVideo";
import { paramsVideosList } from "../../../util/params.util";
import { videosService } from "../../../services/youtube/videos.service";
import VideoListItem from "../../../components/VideoListItem";


export default function HomeTab  ({ navigation }: any) {
  const isCancelled = React.useRef(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [loadingStart, setLoadingStart] = React.useState<boolean>(true);
  const [dataSource, setDataSource] = React.useState<Array<any>>([]);
  const [error, setError] = React.useState<any>(null);
  const [pageToken, setPageToken] = React.useState<string>();

  const pageSize: number = 8;
  const typeResult = { channel: 'youtube#channel', video: 'youtube#video' };
 const itemVideo = {
  id: "1",
  createdAt: "5 months ago",
  title: "Build a Realtime Chat App in React Native (tutorial for beginners) 🔴  ",
  thumbnail: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  duration: 384,
  user: {
    "name": "Vadim Savin",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    "subscribers": 100000
  },
  views: 357000,
  tags: "#VadimSavin #notjust #notJustDeveloper",
  likes: 3759,
  dislikes: 53
}

  useEffect(() => {
  
    return () => {
      isCancelled.current = true;
    };
  }, [])

  const loadData = () => {

    setIsLoading(true);
    paramsVideosList.part = 'snippet';
    paramsVideosList.chart = 'mostPopular';
    paramsVideosList.maxResults = pageSize;

    if(pageToken)
    {
      paramsVideosList.pageToken = pageToken;
    }
    console.log('teste gabrie', paramsVideosList)
    videosService.listVideos(paramsVideosList).then((response) => {

      if (!isCancelled.current) {
        setDataSource(dataSource.concat(response.data.items))
        setPageToken(response.data.nextPageToken);
        console.log('teste gabrie', response.data)
      }
    }).catch((error) => {
      console.log(error.response)
      setError(error.response);
    }).then(() => {
      setIsLoading(false);
      setLoadingStart(false);
    })
  }

  const handleLoadMore = () => {
    loadData();
  }

  const ListEmptyView = () => {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}> Desculpe, nenhum dado presente. Tente novamente.</Text>
      </View>

    );
  }

  const RenderRow = ({ item }: any) => {
    return (
      <CardVideo
      channelName={item?.snippet?.channelTitle}
      channelPhoto='https://yt3.ggpht.com/a-/AOh14GjwaKJYE_ZPYQqIuG_qXihZknQv646aZ1-gPQ=s68-c-k-c0x00ffffff-no-rj-mo'
      thumbnail={item?.snippet?.thumbnails?.high?.url}
      videoTitle={item?.snippet?.title}
      videoTime='2 dias'
      onPress={() => navigation.navigate('Watch', { videoId: item?.id })}
    />
      );
  };

  const LoadingContent = () => {
    return (
      <View>
        {
          Array.apply(null, Array(3)).map((item, i)=>
          <LoadingCardVideo key={i} />
          )
        }
      </View>
    )
  }

  const renderFooter = () => {
    if (!isLoading) return null;
    return (<View>{ loadingStart ? <LoadingContent /> : <View style={{alignSelf: 'center',
    marginVertical: 20,}}><Spinner /></View>}</View>);
  };

  return (<View style={{flex:1}}> 
<VideoListItem video={itemVideo} />
  <FlatList
    data={dataSource}
    renderItem={({ item }) =>
    <RenderRow item={item} />
  }
    keyExtractor={(item, index) => index.toString()}
    onEndReached={handleLoadMore}
    onEndReachedThreshold={0.5}
    ListFooterComponent={renderFooter}
  /></View>);
}

const styles = StyleSheet.create({

  loading: {
    alignSelf: 'center',
  },
});