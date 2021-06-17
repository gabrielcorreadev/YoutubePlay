import React, { useEffect } from "react";
import { Content, Left, Body, Thumbnail, View, Button, Right, Card } from 'native-base';
import { Container, Header, Text, Icon, CardItem, InputSearch, Spinner } from '../../components/ui-element';
import { SearchResultScreenNavigationProp, SearchResultScreenRouteProp } from "../../models/navigation/type";
import { Alert, FlatList, Image, Keyboard } from "react-native";
import { feedService } from "../../services/youtube/feed.service";
import { environment } from "../../environments/environment";
import { LoadingListSearch } from "../../components/skeleton/loadingListSearch";
import { LoadingCardVideo } from "../../components/skeleton/loadingCardVideo";
import { CardVideo } from "../../components/ui-element";
import { paramsSearchList } from "../../util/params.util";

type Props = {
  route: SearchResultScreenRouteProp;
  navigation: SearchResultScreenNavigationProp;
};

export const SearchResult = ({ route, navigation }: Props) => {

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [dataSource, setDataSource] = React.useState<Array<any>>([]);
  const [error, setError] = React.useState<any>(null);
  const { query } = route.params;

  const pageSize: number = 50;
  const typeResult = { channel: 'youtube#channel', video: 'youtube#video' };

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {

    setIsLoading(true);
    paramsSearchList.maxResults = pageSize;
    paramsSearchList.q = query;
    paramsSearchList.part = 'snippet';
    feedService.list(paramsSearchList).then((response) => {
      console.log(response.data.items)
      setDataSource(response.data.items);
    }).catch((error) => {
      console.log(error.response)
      setError(error.response);
    }).then(() => {
      setIsLoading(false);
    })
  }

  const ListEmptyView = () => {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}> Desculpe, nenhum dado presente. Tente novamente.</Text>
      </View>

    );
  }

  const ListFeed = () => {
    if (isLoading) {
      return (<LoadingContent />);
    }
    else {
      return (<RenderFlatlist />);
    }
  }

  const VideoCard = ({ item }: any) => {
    return (
      <CardVideo
        channelName={item?.snippet?.channelTitle}
        channelPhoto='https://yt3.ggpht.com/a-/AOh14GjwaKJYE_ZPYQqIuG_qXihZknQv646aZ1-gPQ=s68-c-k-c0x00ffffff-no-rj-mo'
        thumbnail={item?.snippet?.thumbnails?.high?.url}
        videoTitle={item?.snippet?.title}
        videoTime='2 dias'
        onPress={() => navigation.navigate('Watch', { videoId: item?.id?.videoId })}
      />
    );
  }

  const ChannelCard = ({ item }: any) => {
    return (
      <Card style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 0 }} transparent noShadow>
        <CardItem>
          <Left>
            <Thumbnail large source={{ uri: item?.snippet?.thumbnails?.high?.url }} />
            <Body>
              <Text>{item?.snippet?.channelTitle}</Text>
              <Text note>{item?.snippet?.channelTitle} - 2 dias</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }

  const renderRow = ({ item }: any) => {
    if (item?.id?.kind == typeResult.channel) {
      return (<ChannelCard item={item} />);
    }
    else {
      return (<VideoCard item={item} />);
    }
  };

  const LoadingContent = () => {
    return (
      <View>
        <LoadingCardVideo />
        <LoadingCardVideo />
        <LoadingCardVideo />
      </View>
    )
  }
  const RenderFlatlist = () => {
    return (
      <FlatList
        data={dataSource}
        renderItem={renderRow}
        keyExtractor={item => item.etag}
      />
    );
  }

  return (<Container>
    <Header searchBar noShadow rounded>
      <Button transparent onPress={() => navigation.goBack()}>
        <Icon name='arrow-left' type="Feather" style={{ color: '#9f2349' }} />
      </Button>
      <InputSearch placeholder={query} showSoftInputOnFocus={false} onPressSearch={() => navigation.goBack()} onFocus={() => Keyboard.dismiss()} />
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
    <ListFeed />
  </Container>);
}